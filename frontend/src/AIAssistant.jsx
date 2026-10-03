import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

function AIAssistant() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const text = {
    en: {
      online: "Online",
      title: "MahaConnect Assistant",

      description:
        "Hello! 👋 I can help you find Maharashtra government certificate services.",

      education: "Education",
      certificates: "Certificates",
      healthcare: "Healthcare",
      transport: "Transport",

      underConstruction: "🚧 Under Construction",
      exploreCertificates: "Explore certificate services →",

      lookingFor: "💡 Looking for a certificate?",

      helpText:
        "Explore Income Certificate and other certificate services available on MahaConnect.",

      explore: "Explore Certificates →",
    },

    mr: {
      online: "ऑनलाइन",
      title: "महाकनेक्ट सहाय्यक",

      description:
        "नमस्कार! 👋 महाराष्ट्र शासनाच्या प्रमाणपत्र सेवा शोधण्यात मी तुमची मदत करू शकतो.",

      education: "शिक्षण",
      certificates: "प्रमाणपत्रे",
      healthcare: "आरोग्यसेवा",
      transport: "वाहतूक",

      underConstruction: "🚧 बांधकामाधीन",
      exploreCertificates: "प्रमाणपत्र सेवा पहा →",

      lookingFor: "💡 प्रमाणपत्र हवे आहे?",

      helpText:
        "महाकनेक्टवर उपलब्ध उत्पन्न प्रमाणपत्र आणि इतर प्रमाणपत्र सेवा पहा.",

      explore: "प्रमाणपत्रे पहा →",
    },

    hi: {
      online: "ऑनलाइन",
      title: "महाकनेक्ट सहायक",

      description:
        "नमस्ते! 👋 मैं महाराष्ट्र सरकार की प्रमाणपत्र सेवाएं खोजने में आपकी मदद कर सकता हूं।",

      education: "शिक्षा",
      certificates: "प्रमाणपत्र",
      healthcare: "स्वास्थ्य सेवा",
      transport: "परिवहन",

      underConstruction: "🚧 निर्माणाधीन",
      exploreCertificates: "प्रमाणपत्र सेवाएं देखें →",

      lookingFor: "💡 प्रमाणपत्र चाहिए?",

      helpText:
        "महाकनेक्ट पर उपलब्ध आय प्रमाण पत्र और अन्य प्रमाणपत्र सेवाएं देखें।",

      explore: "प्रमाणपत्र देखें →",
    },
  };

  const t = text[language] || text.en;

  return (
    <div className="ai-page">

      {/* AI CARD */}
      <div className="ai-card">

        {/* HEADER */}
        <div className="ai-header">

          <div className="ai-icon">
            🤖
          </div>

          <div>
            <span className="ai-status">
              ● {t.online}
            </span>

            <h1>
              {t.title}
            </h1>
          </div>

        </div>


        {/* DESCRIPTION */}
        <p className="ai-description">
          {t.description}
        </p>


        {/* SERVICE OPTIONS */}
        <div className="ai-options">

          {/* EDUCATION */}
          <button
            className="ai-construction-btn"
            disabled
          >
            <span>
              🎓 {t.education}
            </span>

            <small>
              {t.underConstruction}
            </small>
          </button>


          {/* CERTIFICATES */}
          <button
            onClick={() => navigate("/certificates")}
          >
            <span>
              📄 {t.certificates}
            </span>

            <small>
              {t.exploreCertificates}
            </small>
          </button>


          {/* HEALTHCARE */}
          <button
            className="ai-construction-btn"
            disabled
          >
            <span>
              🏥 {t.healthcare}
            </span>

            <small>
              {t.underConstruction}
            </small>
          </button>


          {/* TRANSPORT */}
          <button
            className="ai-construction-btn"
            disabled
          >
            <span>
              🚗 {t.transport}
            </span>

            <small>
              {t.underConstruction}
            </small>
          </button>

        </div>


        {/* CERTIFICATE HELP BOX */}
        <div className="ai-help-box">

          <strong>
            {t.lookingFor}
          </strong>

          <p>
            {t.helpText}
          </p>

          <button
            className="ask-assistant"
            onClick={() => navigate("/certificates")}
          >
            {t.explore}
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;