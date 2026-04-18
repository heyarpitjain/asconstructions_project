import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">
            About Us
          </h2>
          <p className="text-gray-500">
            Building reliable infrastructure for a sustainable future
          </p>
        </motion.div>

        {/* 🔥 MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4 text-[15px]"
        >
          <p>
            At <span className="font-semibold text-black">AS Constructions</span>, we are a versatile civil contractor specializing in water supply and sewerage projects. With a strong foundation in infrastructure development, we offer end-to-end solutions including design, civil works, mechanical execution with procurement, and maintenance of water distribution systems, treatment plants, pumping stations, and pipelines.
          </p>

          <p>
            Our team of experienced engineers, project managers, and skilled technicians is committed to delivering reliable, cost-effective, and sustainable infrastructure that meets the highest standards of quality and safety. We leverage modern construction methods, advanced equipment, and project management tools to ensure timely delivery and long-term performance.
          </p>

          <p>
            Over the years, we have successfully executed projects for government agencies and private clients across multiple departments associated with water infrastructure.
          </p>

          <p>
            We understand the critical role that water and sanitation infrastructure plays in public health and community development. That’s why we approach each project with responsibility, environmental awareness, and a focus on lasting impact.
          </p>

          <p>
            Driven by innovation and guided by integrity, we are dedicated to building efficient and future-ready infrastructure.
          </p>
        </motion.div>

        {/* 🔥 MISSION & STRENGTH */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-yellow-500 mb-3">
              Our Mission
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm">
              At AS Constructions, we believe that having a vision is just the beginning — turning that vision into reality with excellence is what truly defines success. Guided by the belief that “the top is always vacant,” we are committed to delivering high-quality civil infrastructure solutions that exceed client expectations.
              <br /><br />
              Our mission is to build enduring relationships through integrity, innovation, and customer satisfaction, ensuring long-term value for all stakeholders.
            </p>
          </motion.div>

          {/* STRENGTH */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-yellow-500 mb-3">
              Our Strength
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm">
              Our greatest strength lies in our loyal and dedicated team of engineers, technicians, and management professionals who form the backbone of AS Constructions.
              <br /><br />
              Their technical expertise, teamwork, and problem-solving mindset enable us to overcome challenges and deliver exceptional results. This unity of purpose and commitment to excellence distinguishes us in the industry.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;