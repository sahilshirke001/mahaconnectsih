import { Link, useParams } from "react-router-dom";

function ServiceDetails() {
  const { service } = useParams();

  const serviceData = {
    education: {
      icon: "🎓",
      title: "Education Services",
      description:
        "Explore education-related government services and student support programs.",
      services: [
        "Scholarship Information",
        "Student Certificates",
        "Education Schemes",
        "Student Support Services",
      ],
    },

    healthcare: {
      icon: "🏥",
      title: "Healthcare Services",
      description:
        "Find public healthcare schemes and government health services.",
      services: [
        "Healthcare Schemes",
        "Health Certificates",
        "Public Health Services",
        "Health Assistance Programs",
      ],
    },

    certificates: {
      icon: "📄",
      title: "Certificate Services",
      description:
        "Find information about important government certificates.",
      services: [
        "Income Certificate",
        "Caste Certificate",
        "Domicile Certificate",
        "Birth Certificate",
      ],
    },

    transport: {
      icon: "🚗",
      title: "Transport Services",
      description:
        "Access information about Maharashtra transport services.",
      services: [
        "Driving Licence",
        "Vehicle Registration",
        "RTO Services",
        "Transport Permits",
      ],
    },

    housing: {
      icon: "🏠",
      title: "Housing Services",
      description:
        "Explore government housing schemes and assistance programs.",
      services: [
        "Housing Schemes",
        "Housing Assistance",
        "Affordable Housing",
        "Application Information",
      ],
    },

    employment: {
      icon: "💼",
      title: "Employment Services",
      description:
        "Discover employment and skill-development opportunities.",
      services: [
        "Employment Schemes",
        "Skill Development",
        "Job Assistance",
        "Training Programs",
      ],
    },
  };

  const data = serviceData[service];

  if (!data) {
    return (
      <div className="details-page">
        <h1>Service Not Found</h1>
        <Link to="/services">← Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="details-page">

      <Link to="/services" className="back-link">
        ← Back to Services
      </Link>

      <div className="details-header">

        <div className="details-icon">
          {data.icon}
        </div>

        <h1>{data.title}</h1>

        <p>{data.description}</p>

      </div>

      <div className="details-list">

        <h2>Available Services</h2>

        {data.services.map((item) => (
          <div className="details-item" key={item}>
            <span>✓</span>
            <p>{item}</p>
            <button
              className="service-button"
                onClick={() => viewService(service)}
                >
                View Service →
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ServiceDetails;