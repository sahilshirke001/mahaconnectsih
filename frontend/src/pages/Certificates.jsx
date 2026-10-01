import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Certificates() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const certificates = [
    {
      icon: "💰",
      id: "income",
      title: "Income Certificate",
      description:
        "Apply for an official certificate showing your annual family income.",
      available: true,
    },
    {
      icon: "🏛️",
      id: "caste",
      title: "Caste Certificate",
      description:
        "Access information and application support for caste certification.",
      available: false,
    },
    {
      icon: "🏠",
      id: "domicile",
      title: "Domicile Certificate",
      description:
        "Certificate related to proof of residence in Maharashtra.",
      available: false,
    },
    {
      icon: "📍",
      id: "residence",
      title: "Residence Certificate",
      description:
        "Government certificate related to residential status.",
      available: false,
    },
    {
      icon: "👴",
      id: "senior-citizen",
      title: "Senior Citizen Certificate",
      description:
        "Certificate services for eligible senior citizens.",
      available: false,
    },
    {
      icon: "📄",
      id: "non-creamy-layer",
      title: "Non-Creamy Layer Certificate",
      description:
        "Certificate service for eligible applicants requiring NCL documentation.",
      available: false,
    },
  ];

  const filteredCertificates = certificates.filter((certificate) =>
    certificate.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="services-page">

      <div className="services-header">

        <p className="services-label">
          MAHARASHTRA GOVERNMENT
        </p>

        <h1>
          Government
          <br />
          <span>Certificates</span>
        </h1>

        <p className="services-subtitle">
          Apply for and track Maharashtra government
          certificate services from one platform.
        </p>

        <div className="service-search">

          <span>🔎</span>

          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      <div className="services-results-header">

        <div>
          <p className="category-label">
            CERTIFICATE SERVICES
          </p>

          <h2>
            Government Certificates
          </h2>

          <p>
            {filteredCertificates.length} certificate
            {filteredCertificates.length !== 1 ? "s" : ""}
            {" "}available
          </p>
        </div>

      </div>

      <div className="service-list">

        {filteredCertificates.map((certificate) => (

          <div
            className={`service-card modern-service-card ${
              !certificate.available
                ? "under-construction-card"
                : ""
            }`}
            key={certificate.id}
          >

            <div className="service-card-top">

              <div className="service-icon">
                {certificate.icon}
              </div>

              <span className="service-category">
                Certificate
              </span>

            </div>

            <h2>
              {certificate.title}
            </h2>

            <p>
              {certificate.description}
            </p>

            {certificate.available ? (

              <button
                className="service-button"
                onClick={() =>
                  navigate(`/services/${certificate.id}`)
                }
              >
                Apply / View Details
                <span>→</span>
              </button>

            ) : (

              <button
                className="service-button construction-button"
                disabled
              >
                🚧 Under Construction
              </button>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Certificates;