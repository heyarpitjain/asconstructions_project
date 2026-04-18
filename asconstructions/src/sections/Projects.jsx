import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// ===== IMPORT IMAGES (MAKE SURE CASE MATCHES EXACTLY) =====

// Bhopal
import p1 from "../assets/projects/Bhopal/p1.jpg";
import p2 from "../assets/projects/Bhopal/p2.jpg";
import p3 from "../assets/projects/Bhopal/p3.jpg";
import p4 from "../assets/projects/Bhopal/p4.jpg";
import p5 from "../assets/projects/Bhopal/p5.jpg";
import p6 from "../assets/projects/Bhopal/p6.jpg";

// Amla
import a1 from "../assets/projects/Amla/a1.jpeg";
import a2 from "../assets/projects/Amla/a2.jpeg";
import a3 from "../assets/projects/Amla/a3.jpeg";
import a4 from "../assets/projects/Amla/a4.jpeg";

// Betul
import b1 from "../assets/projects/Betul/b1.jpeg";
import b2 from "../assets/projects/Betul/b2.jpeg";
import b3 from "../assets/projects/Betul/b3.jpeg";
import b4 from "../assets/projects/Betul/b4.jpeg";
import b5 from "../assets/projects/Betul/b5.jpeg";
import b6 from "../assets/projects/Betul/b6.jpeg";
import b7 from "../assets/projects/Betul/b7.jpeg";
import b8 from "../assets/projects/Betul/b8.jpeg";

// Bhedaghat
import d1 from "../assets/projects/Bhedaghat/d1.jpeg";
import d2 from "../assets/projects/Bhedaghat/d2.jpeg";
import d3 from "../assets/projects/Bhedaghat/d3.jpeg";
import d4 from "../assets/projects/Bhedaghat/d4.jpeg";
import d5 from "../assets/projects/Bhedaghat/d5.jpeg";

// Sarni
import s1 from "../assets/projects/Sarni/s1.jpeg";
import s2 from "../assets/projects/Sarni/s2.jpeg";
import s3 from "../assets/projects/Sarni/s3.jpeg";
import s4 from "../assets/projects/Sarni/s4.jpeg";
import s5 from "../assets/projects/Sarni/s5.jpeg";
import s6 from "../assets/projects/Sarni/s6.jpeg";

// ===== IMAGE GROUPS =====
const imageGroups = [
  [p1, p2, p3, p4, p5, p6],
  [a1, a2, a3, a4],
  [b1, b2, b3, b4, b5, b6, b7, b8],
  [d1, d2, d3, d4, d5],
  [s1, s2, s3, s4, s5, s6],
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Projects
        </h2>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          autoHeight
        >
          {imageGroups.map((images, groupIndex) => (
            <SwiperSlide key={groupIndex}>

              <div
                className={`
                  grid gap-6 auto-rows-[minmax(140px,auto)]
                  ${
                    images.length <= 2
                      ? "grid-cols-1 sm:grid-cols-2 justify-center"
                      : images.length <= 4
                      ? "grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  }
                `}
              >
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    className={`relative overflow-hidden rounded-xl cursor-pointer ${
                      images.length > 4 && i % 3 === 0 ? "row-span-2" : ""
                    }`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    onClick={() => setSelected(img)}
                  >
                    <img
                      src={img}
                      loading="lazy"
                      alt={`Project ${groupIndex + 1} image ${i + 1}`} // ✅ FIXED
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition"></div>
                  </motion.div>
                ))}
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Selected project"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()} // ✅ FIXED (prevents accidental close)
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;