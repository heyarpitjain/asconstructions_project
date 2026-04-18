import { motion } from "framer-motion";
import data from "../assets/data/projects.json";

const Work = () => {
  const completed = data.filter(d => d.status === "completed");
  const ongoing = data.filter(d => d.status === "ongoing");

  const Table = ({ title, data }) => (
    <div className="mb-20">

      {/* Section Title */}
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>

      {/* Table Container */}
      <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">

        <div className="max-h-125 overflow-y-auto">

          <table className="w-full text-left">

            {/* Header */}
            <thead className="bg-black text-white sticky top-0 z-10">
              <tr>
                <th className="p-4 text-sm font-medium">Work</th>
                <th className="p-4 text-sm font-medium">Year</th>
                <th className="p-4 text-sm font-medium">Department</th>
                <th className="p-4 text-sm font-medium">Client</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((item, i) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.01 }}
                  className={`
                    border-b transition duration-200
                    ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    hover:bg-yellow-50
                  `}
                >
                  {/* Work Name (Accent Line) */}
                  <td className="p-4 relative font-medium text-gray-800">
                    <span className="absolute left-0 top-0 h-full w-1 bg-yellow-500 opacity-0 group-hover:opacity-100"></span>
                    {item.name}
                  </td>

                  <td className="p-4 text-gray-600">{item.year}</td>
                  <td className="p-4 text-gray-600">{item.department}</td>
                  <td className="p-4 text-gray-600">{item.client}</td>
                </motion.tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );

  return (
    <section id="work" className="py-28 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-3">
            Our Work & Projects
          </h2>
          <p className="text-gray-500">
            Delivering infrastructure excellence across regions
          </p>
        </motion.div>

        {/* Completed */}
        <Table title="Work Details" data={completed} />

        {/* Ongoing */}
        <Table title="Ongoing Projects" data={ongoing} />

      </div>
    </section>
  );
};

export default Work;