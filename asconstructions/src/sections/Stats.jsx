import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/* ===== INTERSECTION OBSERVER ===== */
const useInView = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

/* ===== COUNTER ===== */
const Counter = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);

      // smooth easing
      const ease = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(ease * target));

      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };

    requestAnimationFrame(animate);
  }, [target, isVisible]);

  return <span>{count}+</span>;
};

/* ===== MAIN COMPONENT ===== */
const Stats = () => {
  const [ref, isVisible] = useInView();

  const stats = [
    { number: 6, label: "Project Managers" },
    { number: 20, label: "Supervisors" },
    { number: 450, label: "Labours" },
    { number: 5, label: "Safety Engineers" },
    { number: 6, label: "Quality Engineers" },
    { number: 2, label: "Batching Plant" },
    { number: 2, label: "Concrete Pump" },
    { number: 2, label: "Fiori Machine" },
    { number: 2, label: "JCB" },
  ];

  return (
    <section
      id="stats"
      ref={ref}
      className="relative py-28 bg-linear-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.08),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">
            Our Capabilities
          </h2>
          <p className="text-gray-400">
            Strength that drives our infrastructure excellence
          </p>
        </motion.div>

        {/* 🔥 3×3 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">

          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
              className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >

              {/* Number */}
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <Counter target={s.number} isVisible={isVisible} />
              </h2>

              {/* Label */}
              <p className="text-sm text-gray-300 group-hover:text-white transition">
                {s.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;