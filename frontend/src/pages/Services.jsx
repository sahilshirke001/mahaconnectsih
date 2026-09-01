import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

const viewService = (service) => {
  navigate(`/services/${service.id}`);
};
  const [search, setSearch] = useState("");

  const services = [
    {
      icon: "🎓",
      id: "education",
      title: "Education",
      description: "Scholarships, certificates and student services.",
      category: "Education",
    },
    {
      icon: "🏥",
      id: "healthcare",
      title: "Healthcare",
      description: "Government healthcare schemes and services.",
      category: "Healthcare",
    },
    {
      icon: "📄",
      id: "certificates",
      title: "Certificates",
      description: "Apply for important government certificates.",
      category: "Certificates",
    },
    {
      icon: "🚗",
      id: "transport",
      title: "Transport",
      description: "Access Maharashtra transport services.",
      category: "Transport",
    },
    {
      icon: "🏠",
      id: "housing",
      title: "Housing",
      description: "Explore government housing schemes and assistance.",
      category: "Housing",
    },
    {
      icon: "💼",
      id: "employment",
      title: "Employment",
      description: "Find employment schemes and skill development programs.",
      category: "Employment",
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase())
  );

  

  return (
    <div className="services-page">

      {/* Header */}
      <div className="services-header">
        <p className="services-label">MAHARASHTRA GOVERNMENT</p>

        <h1>Government Services</h1>

        <p className="services-subtitle">
          Discover and access Maharashtra government services
          from one simple platform.
        </p>

        {/* Search */}
        <div className="service-search">
          <span>🔎</span>

          <input
            type="text"
            placeholder="Search government services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="category-buttons">
        <button>All Services</button>
        <button>Education</button>
        <button>Healthcare</button>
        <button>Certificates</button>
        <button>Transport</button>
      </div>

      {/* Services */}
      <div className="service-list">

        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div className="service-card" key={service.title}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <button
                className="service-button"
                onClick={() => viewService(service)}
              >
                View Service →
              </button>

            </div>
          ))
        ) : (
          <div className="no-results">
            <h2>No services found</h2>
            <p>Try searching for another government service.</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Services;