import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">
            Contact Us
          </h2>
          <p className="text-gray-400">
            Reach out to us for projects, collaborations, or inquiries
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* MANAGEMENT */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Management
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Mr. B.N. More (Partner)
              <br />
              Mr. K.R. Bhoyar (Partner)
            </p>
          </div>

          {/* CONTACT INFO */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Contact Details
            </h3>

            <div className="space-y-3 text-gray-300">

              {/* Phone */}
              <a
                href="tel:+919981149411"
                className="block hover:text-yellow-400 transition"
              >
                📞 +91 9981149411
              </a>

              {/* Email */}
              <a
                href="mailto:bhoyar_kr@yahoo.co.in"
                className="block hover:text-yellow-400 transition"
              >
                ✉️ bhoyar_kr@yahoo.co.in
              </a>

              <a
                href="mailto:ascindore.71@gmail.com"
                className="block hover:text-yellow-400 transition"
              >
                ✉️ ascindore.71@gmail.com
              </a>

              {/* Website */}
              <a
                href="https://www.asconstructions.in"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-yellow-400 transition"
              >
                🌐 www.asconstructions.in
              </a>

            </div>
          </div>

          {/* ADDRESSES */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Offices
            </h3>

            <div className="space-y-4 text-gray-300">

              <div>
                <p className="font-medium text-white">Branch Office</p>
                <p>
                  329-A, Mahalaxmi Nagar,<br />
                  Indore - 452010 (M.P.)
                </p>
              </div>

              <div>
                <p className="font-medium text-white">Registered Office</p>
                <p>
                  Indraprastha Nagar,<br />
                  Chalisgaon - 424101 (MH)
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;