import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import s1 from "../assets/s1.jpeg";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpeg";
import s4 from "../assets/s4.jpeg";
import s5 from "../assets/s5.jpeg";
import s6 from "../assets/s6.jpeg";

const packages = [
  {
    id: 1,
    title: "Quest for the Agami",
    location: "Costa Rica – Birding & Birding with a Camera",
    image: s1,
    date: "June 14 – July 8, 2025",
    nights: 10,
    days: 11,
    focus: "Birding, Nature, History",
    price:"From $2000", 
  },
  {
    id: 2,
    title: "Target List Trek",
    location: "Costa Rica – Birding & Birding with a Camera",
    image: s2,
    date: "March 16 – 26, 2025",
    nights: 9,
    days: 10,
    focus: "Bird & Nature Photography",
    price:"From $2000", 
  },
  {
    id: 3,
    title: "Tracking the Trogons",
    location: "Costa Rica – Birding & Birding with a Camera",
    image: s3,
    date: "June 10 – 20, 2025",
    nights: 9,
    days: 10,
    focus: "Birding and Nature",
    price:"From $2000", 
  },
  {
    id: 4,
    title: "King Vulture Venture",
    location: "Costa Rica – Bird Photography",
    image: s4,
    date: "Jan 10 – 24, 2026",
    nights: 14,
    days: 15,
    focus: "Bird & Nature Photography",
    price:"From $2000", 
  },
  {
    id: 5,
    title: "Hunt for the Harpy Eagle",
    location: "Panama – Birding & Birding with a Camera",
    image: s5,
    date: "Multiple. Please inquire.",
    nights: 8,
    days: 9,
    focus: "Birding and History",
    price:"From $2000", 
  },
  {
    id: 6,
    title: "Search for the Elusive Birds",
    location: "Costa Rica – Birding & Birding with a Camera",
    image: s3,
    date: "October 14 – 22, 2025",
    nights: 8,
    days: 9,
    focus: "Birding, Nature, History",
    price:"From $2000", 
  },
];

export default function SmallGroupPackages() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      

        <motion.h2 
        className="text-2xl md:text-3xl font-bold text-center mb-6 text-green-700"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(34,197,94,0.8)" }}
        >
        Scheduled Small Group Packages
        </motion.h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-green-600">{pkg.title}</h3>
              <p className="text-sm text-gray-700">{pkg.location}</p>
              
              <div className="mt-2 text-sm text-gray-600 flex-grow">
                <p>
                  <strong>Date:</strong> {pkg.date}
                </p>
                <p>
                  <strong>Days:</strong> {pkg.nights} Nights | {pkg.days} Days
                </p>
                <p>
                  <strong>Focus:</strong> {pkg.focus}
                </p>
                
              </div>
              <p className="text-red-500 mt-2">
                  <strong>Price:</strong> {pkg.price}
                </p>
              <motion.div
                className="mt-4"
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={`/package/${pkg.id}`}
                  className="block w-full text-center bg-blue-500 text-white font-bold py-2 rounded"
                >
                  READ MORE
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
