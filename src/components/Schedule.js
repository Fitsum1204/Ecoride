import  InlineWidget  from '@calcom/embed-react';

const Schedule = () => {
  return (
    <section className="flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:px-16 xl:px-32 bg-gray-50">
      <div className="w-full max-w-2xl">
        <h3 className="text-lg font-semibold text-green-700 mb-2 text-center">Contact Us</h3>
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Schedule Your Appointment Today!
        </h2>
        <InlineWidget
          calLink="https://cal.com/free-forfree-huuuew/schedule-your-visit"
          styles={{
            primaryColor: '#34d399', // Tailwind's emerald-400
            textColor: '#374151', // Tailwind's gray-700
            backgroundColor: '#f9fafb', // Tailwind's gray-50
          }}
        />
      </div>
    </section>
  );
};

export default Schedule;
