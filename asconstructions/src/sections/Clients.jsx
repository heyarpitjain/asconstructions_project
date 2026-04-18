import { motion } from "framer-motion";

// ✅ FIXED: lowercase extensions
import c1 from "../assets/clients/c1.png";
import c2 from "../assets/clients/c2.png";
import c3 from "../assets/clients/c3.png";
import c4 from "../assets/clients/c4.png";
import c5 from "../assets/clients/c5.png";
import c6 from "../assets/clients/c6.png";
import c7 from "../assets/clients/c7.png";
import c8 from "../assets/clients/c8.png";
import c9 from "../assets/clients/c9.png";
import c10 from "../assets/clients/c10.png";
import c11 from "../assets/clients/c11.jpeg"; // keep if correct
import c12 from "../assets/clients/c12.png";

const clients = [
  c1, c2, c3, c4, c5, c6,
  c7, c8, c9, c10, c11, c12
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
                alt={`Client ${i + 1} logo`}  // ✅ SEO improvement
                // className="h-12 md:h-14 object-contain grayscale group-hover:grayscale-0 transition duration-300 group-hover:scale-105"
                className="h-12 md:h-14 object-contain transition duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Clients;