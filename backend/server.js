require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
//cal_live_5a93d4b74ad1d7a99e182c18cfe19700//api keycal.com

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Booking Schema
const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  tour: String,
  date: String,
  time: String,
  people: Number,
  totalCost: Number,
});

const Booking = mongoose.model("Booking", BookingSchema);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API: Save Booking & Send Email
app.post("/book-tour", async (req, res) => {
  const { name, email, tour, date, time, people, totalCost } = req.body;

  try {
    // Check if the time and date are already reserved
    const existingBooking = await Booking.findOne({ date, time });
    if (existingBooking) {
      return res.json({ message: "This time is already reserved. Please select another time." });
    }

    // Save to database if available
    const booking = new Booking({ name, email, tour, date, time, people, totalCost });
    await booking.save();

    // Send email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Booking Confirmation",
      text: `Thank you for booking ${tour} on ${date} at ${time}. Total Cost: $${totalCost}.`,
    });

    // Send email to admin (Michael)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Booking Received",
      text: `${name} booked ${tour} on ${date} at ${time} for ${people} people.`,
    });

    res.status(201).json({ message: "Booking confirmed & email sent!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/api/booked-times", async (req, res) => {
  const { date, tour } = req.query;

  try {
    const bookedTimes = await Booking.find({ date, tour }).select("time");
    const times = bookedTimes.map((booking) => booking.time);

    res.json(times);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//app.listen(3000, () => console.log("Server running on port 3000"));
