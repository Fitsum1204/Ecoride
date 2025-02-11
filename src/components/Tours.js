import { motion } from "framer-motion";
import s1 from "../assets/s1.jpeg";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpeg";

const TourPackages = () => {
  const tours = [
    {
      id: 1,
      title: "City Exploration Tour",
      image: s1,
      description: "Discover the vibrant city life, historic landmarks, and hidden gems with our expert guides.",
    },
    {
      id: 2,
      title: "Hiking & Nature Adventure",
      image: s2,
      description: "Experience breathtaking mountain trails, lush forests, and stunning landscapes.",
    },
    {
      id: 3,
      title: "Cultural & Heritage Experience",
      image: s3,
      description: "Immerse yourself in rich traditions, cultural sites, and authentic local experiences.",
    },
  ];

  return (
    <section className="px-4 py-12 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        Our Tour Packages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <motion.div
            key={tour.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: tour.id * 0.2 }}
          >
            <motion.img
              src={tour.image}
              alt={tour.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {tour.title}
              </h3>
              <p className="text-gray-600 mt-2">{tour.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TourPackages;
