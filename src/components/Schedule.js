import React, { useState, useEffect } from "react";
import axios from "axios";

const Schedule = () => {
  const [tours] = useState([
    {
      name: "City Tour",
      price: 50,
      eventTypeId: 1761492,
      availableTimes: ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
    },
    {
      name: "Safari",
      price: 100,
      eventTypeId: 1679568,
      availableTimes: ["07:00 AM", "12:00 PM", "03:00 PM", "06:00 PM"],
    },
  ]);

  const [selectedTour, setSelectedTour] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedTimes, setBookedTimes] = useState([]);

  useEffect(() => {
    if (date && selectedTour) {
      axios
        .get(`https://ecoride-pddz.onrender.com/api/booked-times?date=${date}&tour=${selectedTour}`)
        .then((response) => setBookedTimes(response.data))
        .catch((error) => console.error("Error fetching booked times:", error));
    }
  }, [date, selectedTour]);

  useEffect(() => {
    if (selectedTour) {
      const tourPrice = tours.find((t) => t.name === selectedTour)?.price || 0;
      setTotalCost(tourPrice * people);
    }
  }, [selectedTour, people, tours]);

  const handleBooking = async () => {
    if (!selectedTour || !date || !name || !email || !selectedTime) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("https://ecoride-pddz.onrender.com/book-tour", {
        name,
        email,
        tour: selectedTour,
        date,
        time: selectedTime,
        people,
        totalCost,
      });
      alert(response.data.message);
      setName("")
      setEmail("");
      setSelectedTour("");
      setDate("");
      setSelectedTime("");
      setPeople(1);
      setTotalCost(0);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Book a Tour</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Select a Tour:</label>
          <select
            value={selectedTour}
            onChange={(e) => setSelectedTour(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Tour --</option>
            {tours.map((tour, index) => (
              <option key={index} value={tour.name}>
                {tour.name} - ${tour.price} per person
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Select Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Available Times:</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Time --</option>
            {selectedTour &&
              tours
                .find((tour) => tour.name === selectedTour)
                ?.availableTimes.map((time, index) => (
                  <option key={index} value={time} disabled={bookedTimes.includes(time)}>
                    {time} {bookedTimes.includes(time) && "(Booked)"}
                  </option>
                ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Number of People:</label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            min="1"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <h3 className="text-xl font-semibold text-center text-green-600">Total Cost: ${totalCost}</h3>

        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Schedule;
