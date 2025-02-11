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
  
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "schedule" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  

  const handleBooking = async () => {
    if (!selectedTour || !selectedDate) {
      alert("Please select a tour and date.");
      return;
    }

    
    alert(`Booking confirmed! Total cost: $${totalCost}`);
  };

  return (
    <div className="w-full h-full">
      <header className="p-4 bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-green-700">Schedule Your Appointment</h1>
        <p className="text-gray-600 mt-2">Use the calendar below to select your preferred date and time.</p>
      </header>
      
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
