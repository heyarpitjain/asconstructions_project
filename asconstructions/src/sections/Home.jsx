import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center pt-24 md:pt-0 overflow-hidden"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,204,0,0.08),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* 🔥 HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Building{" "}
          <span className="text-yellow-400 relative inline-block">
            Infrastructure
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute left-0 bottom-0 h-[.3px] bg-yellow-400"
            ></motion.span>
          </span>
          <br />
          That Lasts
        </motion.h1>

        {/* 🔥 TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-yellow-500 text-base md:text-lg mb-4"
        >
          Let your dreams be our Project
        </motion.p>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 max-w-xl mx-auto text-sm md:text-base"
        >
          A versatile civil contractor specializing in water supply and sewerage
          infrastructure. Delivering reliable, sustainable, and future-ready
          projects across regions.
        </motion.p>

        {/* 🔥 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="#projects"
            className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-black font-medium rounded-md hover:bg-yellow-400 transition"
          >
            Explore Projects
          </a>
        </motion.div>

        {/* 🔥 STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-4xl mx-auto"
        >
          {[
            { value: "40+", label: "Projects" },
            { value: "10+", label: "Years Experience" },
            { value: "20+", label: "Engineers" },
            { value: "100%", label: "Commitment" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400">
                {item.value}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Home;