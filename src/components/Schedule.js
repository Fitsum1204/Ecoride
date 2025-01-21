import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Schedule = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "schedule" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

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
      />
    </div>
  );
};

export default Schedule;
