import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

function Certificates() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const descriptions = {
    en: {
      income:
        "Apply for an official certificate showing your annual family income.",
      caste:
        "Access information and application support for caste certification.",
      domicile:
        "Certificate related to proof of residence in Maharashtra.",
      residence:
        "Government certificate related to residential status.",
      senior:
        "Certificate services for eligible senior citizens.",
      ncl:
        "Certificate service for eligible applicants requiring NCL documentation.",
    },

    mr: {
      income:
        "तुमच्या वार्षिक कौटुंबिक उत्पन्नाचा अधिकृत दाखला मिळवण्यासाठी अर्ज करा.",
      caste:
        "जात प्रमाणपत्रासाठी माहिती आणि अर्ज सहाय्य मिळवा.",
      domicile:
        "महाराष्ट्रातील अधिवासाचा पुरावा देणारे प्रमाणपत्र.",
      residence:
        "रहिवासी स्थितीशी संबंधित शासकीय प्रमाणपत्र.",
      senior:
        "पात्र ज्येष्ठ नागरिकांसाठी प्रमाणपत्र सेवा.",
      ncl:
        "NCL कागदपत्रांची आवश्यकता असलेल्या पात्र अर्जदारांसाठी प्रमाणपत्र सेवा.",
    },

    hi: {
      income:
        "अपनी वार्षिक पारिवारिक आय दर्शाने वाले आधिकारिक प्रमाण पत्र के लिए आवेदन करें।",
      caste:
        "जाति प्रमाण पत्र के लिए जानकारी और आवेदन सहायता प्राप्त करें।",
      domicile:
        "महाराष्ट्र में निवास के प्रमाण से संबंधित प्रमाण पत्र।",
      residence:
        "निवास स्थिति से संबंधित सरकारी प्रमाण पत्र।",
      senior:
        "पात्र वरिष्ठ नागरिकों के लिए प्रमाण पत्र सेवाएं।",
      ncl:
        "NCL दस्तावेज़ की आवश्यकता वाले पात्र आवेदकों के लिए प्रमाण पत्र सेवा।",
    },
  };

  const currentDescriptions = descriptions[language];

  const certificates = [
    {
      icon: "💰",
      id: "income",
      title: t.incomeCertificate,
      description: currentDescriptions.income,
      available: true,
    },
    {
      icon: "🏛️",
      id: "caste",
      title: t.casteCertificate,
      description: currentDescriptions.caste,
      available: false,
    },
    {
      icon: "🏠",
      id: "domicile",
      title: t.domicileCertificate,
      description: currentDescriptions.domicile,
      available: false,
    },
    {
      icon: "📍",
      id: "residence",
      title: t.residenceCertificate,
      description: currentDescriptions.residence,
      available: false,
    },
    {
      icon: "👴",
      id: "senior-citizen",
      title: t.seniorCitizenCertificate,
      description: currentDescriptions.senior,
      available: false,
    },
    {
      icon: "📄",
      id: "non-creamy-layer",
      title: t.nonCreamyLayer,
      description: currentDescriptions.ncl,
      available: false,
    },
  ];

  const filteredCertificates = certificates.filter((certificate) =>
    certificate.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services-page">

      {/* HEADER */}
      <div className="services-header">

        <p className="services-label">
          {language === "en"
            ? "MAHARASHTRA GOVERNMENT"
            : language === "mr"
            ? "महाराष्ट्र शासन"
            : "महाराष्ट्र सरकार"}
        </p>

        <h1>
          {t.governmentCertificates}
        </h1>

        <p className="services-subtitle">
          {t.applyTrack}
        </p>

        {/* SEARCH */}
        <div className="service-search">

          <span>🔎</span>

          <input
            type="text"
            placeholder={t.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      {/* RESULTS HEADER */}
      <div className="services-results-header">

        <div>

          <p className="category-label">
            {t.certificateServices}
          </p>

          <h2>
            {t.governmentCertificates}
          </h2>

          <p>
            {filteredCertificates.length}{" "}
            {language === "en"
              ? filteredCertificates.length === 1
                ? "certificate available"
                : "certificates available"
              : language === "mr"
              ? "प्रमाणपत्रे उपलब्ध"
              : "प्रमाण पत्र उपलब्ध"}
          </p>

        </div>

      </div>

      {/* CERTIFICATE LIST */}
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
                {language === "en"
                  ? "Certificate"
                  : language === "mr"
                  ? "प्रमाणपत्र"
                  : "प्रमाण पत्र"}
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
                {t.apply}
                <span>→</span>
              </button>

            ) : (

              <button
                className="service-button construction-button"
                disabled
              >
                🚧 {t.underConstruction}
              </button>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Certificates;