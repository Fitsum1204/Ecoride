import Cal, { getCalApi } from "@calcom/embed-react";
import { useState, useEffect } from "react";

// Sample cost calculation based on tour type and number of people
const calculateCost = (tourType, numPeople) => {
  const costPerPerson = {
    "city_tour": 50,
    "nature_tour": 70,
    "transportation": 30,
  };

  return costPerPerson[tourType] * numPeople;
};

const Schedule = () => {
  const [selectedTour, setSelectedTour] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "schedule" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleTourSelection = (tour) => {
    setSelectedTour(tour);
    setTotalCost(calculateCost(tour, numPeople)); // Recalculate cost when tour changes
  };

  const handleBooking = async () => {
    if (!selectedTour || !selectedDate) {
      alert("Please select a tour and date.");
      return;
    }

    // Send email notifications via webhook or Zapier
    // You can use fetch to trigger a webhook or integrate with Zapier here.
    
    // Example:
    // fetch('https://your-webhook-url', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     userEmail: 'user@example.com',
    //     tour: selectedTour,
    //     date: selectedDate,
    //     numPeople,
    //     totalCost,
    //   }),
    // });

    alert(`Booking confirmed! Total cost: $${totalCost}`);
  };

  return (
    <div className="w-full h-full">
      <header className="p-4 bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-green-700">Schedule Your Appointment</h1>
        <p className="text-gray-600 mt-2">Use the calendar below to select your preferred date and time.</p>
      </header>

      {/* Tour/Transportation Selection */}
      <div className="mt-4 p-4 text-center">
        <label className="block text-lg">Choose a Tour:</label>
        <select
          value={selectedTour}
          onChange={(e) => handleTourSelection(e.target.value)}
          className="border p-2"
        >
          <option value="">Select Tour</option>
          <option value="city_tour">City Tour</option>
          <option value="nature_tour">Nature Tour</option>
          <option value="transportation">Transportation</option>
        </select>
      </div>

      {/* Number of People */}
      <div className="mt-4 p-4 text-center">
        <label className="block text-lg">Number of People:</label>
        <input
          type="number"
          value={numPeople}
          onChange={(e) => {
            setNumPeople(e.target.value);
            setTotalCost(calculateCost(selectedTour, e.target.value)); // Recalculate total cost
          }}
          className="border p-2 w-16"
          min="1"
        />
      </div>

      {/* Date Selection */}
      <div className="mt-4 p-4 text-center">
        <label className="block text-lg">Choose a Date:</label>
        <input
          type="date"
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2"
        />
      </div>

      {/* Total Cost Display */}
      <div className="mt-4 text-center">
        <p className="text-lg">Total Cost: ${totalCost}</p>
      </div>

      {/* Booking Button */}
      <div className="mt-4 text-center">
        <button
          onClick={handleBooking}
          className="bg-green-600 text-white py-2 px-4 rounded"
        >
          Confirm Booking
        </button>
      </div>

      <Cal
        namespace="schedule"
        calLink="fitsum-amare-vhgdss/schedule"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
        onDateSelected={setSelectedDate} // Handle the date selection from the calendar
      />
    </div>
  );
};

export default Schedule;
