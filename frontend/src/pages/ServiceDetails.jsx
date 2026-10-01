import { useNavigate, useParams } from "react-router-dom";

function ServiceDetails() {
  const { service } = useParams();
  const navigate = useNavigate();

  const certificateData = {
    income: {
      icon: "💰",
      title: "Income Certificate",
      description:
        "An official certificate used to verify the annual income of an individual or family.",
      status: "Available",
      purpose:
        "Income certificates may be required for scholarships, fee concessions, government schemes and other eligible benefits.",
      documents: [
        "Identity Proof",
        "Address Proof",
        "Income-related supporting documents",
        "Self-declaration / applicable declaration",
      ],
      process: [
        "Enter applicant details",
        "Provide address and income information",
        "Upload required documents",
        "Review the application",
        "Submit the application",
        "Receive your Application ID",
      ],
    },

    caste: {
      icon: "🏛️",
      title: "Caste Certificate",
      description:
        "A government certificate used to establish the caste status of an eligible applicant.",
      status: "Under Construction",
      purpose:
        "MahaConnect will provide guided information and application support for caste certificate services.",
      documents: [
        "Identity Proof",
        "Address Proof",
        "Supporting caste-related documents",
        "Other applicable documents",
      ],
      process: [
        "Check eligibility",
        "Review required documents",
        "Enter applicant details",
        "Submit application",
        "Track application status",
      ],
    },

    domicile: {
      icon: "🏠",
      title: "Domicile Certificate",
      description:
        "A certificate related to proof of residence or domicile status in Maharashtra.",
      status: "Under Construction",
      purpose:
        "This service is planned for a future version of MahaConnect.",
      documents: [
        "Identity Proof",
        "Address Proof",
        "Residence-related documents",
      ],
      process: [
        "Check eligibility",
        "Prepare required documents",
        "Complete application",
        "Submit application",
        "Track application",
      ],
    },

    residence: {
      icon: "📍",
      title: "Residence Certificate",
      description:
        "A government certificate related to residential status.",
      status: "Under Construction",
      purpose:
        "This certificate service will be added in a future version.",
      documents: [
        "Identity Proof",
        "Address Proof",
        "Applicable residence documents",
      ],
      process: [
        "Check eligibility",
        "Prepare documents",
        "Complete application",
        "Submit application",
      ],
    },

    "senior-citizen": {
      icon: "👴",
      title: "Senior Citizen Certificate",
      description:
        "Certificate services designed for eligible senior citizens.",
      status: "Under Construction",
      purpose:
        "This service is planned for a future version of MahaConnect.",
      documents: [
        "Identity Proof",
        "Age Proof",
        "Address Proof",
      ],
      process: [
        "Check eligibility",
        "Prepare documents",
        "Complete application",
        "Submit application",
      ],
    },

    "non-creamy-layer": {
      icon: "📄",
      title: "Non-Creamy Layer Certificate",
      description:
        "A certificate service for eligible applicants requiring NCL documentation.",
      status: "Under Construction",
      purpose:
        "This service will be developed in a future version of MahaConnect.",
      documents: [
        "Identity Proof",
        "Address Proof",
        "Income-related documents",
        "Applicable supporting documents",
      ],
      process: [
        "Check eligibility",
        "Prepare documents",
        "Complete application",
        "Submit application",
      ],
    },
  };

  const data = certificateData[service];

  // Invalid service
  if (!data) {
    return (
      <div className="details-page">
        <div className="details-card">
          <h1>Service Not Found</h1>
          <p>
            The requested certificate service could not be found.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/services")}
          >
            Back to Certificates
          </button>
        </div>
      </div>
    );
  }

  const isAvailable = data.status === "Available";

  return (
    <div className="details-page">

      {/* Back */}
      <button
        className="details-back"
        onClick={() => navigate("/services")}
      >
        ← Back to Certificates
      </button>

      {/* Header */}
      <div className="details-hero">

        <div className="details-icon">
          {data.icon}
        </div>

        <div>
          <p className="details-label">
            MAHARASHTRA GOVERNMENT
          </p>

          <h1>{data.title}</h1>

          <p>{data.description}</p>

          <span
            className={
              isAvailable
                ? "details-status available"
                : "details-status construction"
            }
          >
            {isAvailable
              ? "✓ Service Available"
              : "🚧 Under Construction"}
          </span>
        </div>

      </div>

      {/* Purpose */}
      <section className="details-section">

        <p className="details-label">
          ABOUT THIS CERTIFICATE
        </p>

        <h2>What is it used for?</h2>

        <p>{data.purpose}</p>

      </section>

      {/* Documents */}
      <section className="details-section">

        <p className="details-label">
          DOCUMENT CHECKLIST
        </p>

        <h2>Required Documents</h2>

        <div className="document-list">

          {data.documents.map((document, index) => (
            <div
              className="document-item"
              key={index}
            >
              <span>✓</span>
              <p>{document}</p>
            </div>
          ))}

        </div>

      </section>

      {/* Process */}
      <section className="details-section">

        <p className="details-label">
          APPLICATION PROCESS
        </p>

        <h2>How it works</h2>

        <div className="process-list">

          {data.process.map((step, index) => (
            <div
              className="process-item"
              key={index}
            >

              <div className="process-number">
                {index + 1}
              </div>

              <p>{step}</p>

            </div>
          ))}

        </div>

      </section>

      {/* Action */}
      <section className="details-action">

        {isAvailable ? (
          <>
            <div>
              <p className="details-label">
                READY TO APPLY?
              </p>

              <h2>
                Start your Income Certificate application
              </h2>

              <p>
                Complete the application form and receive
                an Application ID for tracking.
              </p>
            </div>

            <button
              className="primary-btn"
              onClick={() => navigate("/application")}
            >
              Apply Now →
            </button>
          </>
        ) : (
          <>
            <div>
              <p className="details-label">
                COMING SOON
              </p>

              <h2>
                This service is under construction
              </h2>

              <p>
                We are currently focusing on making Income
                Certificate services fully functional.
              </p>
            </div>

            <button
              className="secondary-details-btn"
              onClick={() => navigate("/services")}
            >
              View Certificates
            </button>
          </>
        )}

      </section>

    </div>
  );
}

export default ServiceDetails;