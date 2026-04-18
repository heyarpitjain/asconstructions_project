import { motion } from "framer-motion";

// ✅ NO IMPORTS — SAFE FOR VERCEL
const clients = [
  "/clients/c1.png",
  "/clients/c2.png",
  "/clients/c3.png",
  "/clients/c4.png",
  "/clients/c5.png",
  "/clients/c6.png",
  "/clients/c7.png",
  "/clients/c8.png",
  "/clients/c9.png",
  "/clients/c10.png",
  "/clients/c11.jpeg",
  "/clients/c12.png",
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3">
            Our Clients
          </h2>
          <p className="text-gray-500">
            Trusted by leading organizations across India
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">

          {clients.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
              }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-xl p-5 flex items-center justify-center shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={logo}
                loading="lazy"
                alt={`Client ${i + 1} logo`}
                className="h-12 md:h-14 object-contain grayscale group-hover:grayscale-0 transition duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Clients;