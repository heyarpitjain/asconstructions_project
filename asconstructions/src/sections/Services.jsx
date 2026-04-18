import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Building Construction",
      description: "We build high quality residential and commercial buildings.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
      title: "Architecture Design",
      description: "Modern and creative architectural solutions for your needs.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
    {
      title: "Project Planning",
      description: "Efficient planning and execution for every project.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-600 mt-2">
            We provide top-notch construction services
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Services;