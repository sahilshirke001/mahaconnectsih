import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

function ServiceDetails() {
  const { service } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const text = {
    en: {
      government: "MAHARASHTRA GOVERNMENT",
      back: "← Back to Certificates",
      about: "ABOUT THIS CERTIFICATE",
      usedFor: "What is it used for?",
      documentsTitle: "DOCUMENT CHECKLIST",
      requiredDocuments: "Required Documents",
      processTitle: "APPLICATION PROCESS",
      howItWorks: "How it works",
      available: "✓ Service Available",
      construction: "🚧 Under Construction",
      ready: "READY TO APPLY?",
      startIncome: "Start your Income Certificate application",
      complete:
        "Complete the application form and receive an Application ID for tracking.",
      apply: "Apply Now →",
      comingSoon: "COMING SOON",
      underConstruction: "This service is under construction",
      focusing:
        "We are currently focusing on making Income Certificate services fully functional.",
      viewCertificates: "View Certificates",
      notFound: "Service Not Found",
      notFoundText:
        "The requested certificate service could not be found.",
      certificates: {
        income: {
          title: "Income Certificate",
          description:
            "An official certificate used to verify the annual income of an individual or family.",
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
          title: "Caste Certificate",
          description:
            "A government certificate used to establish the caste status of an eligible applicant.",
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
          title: "Domicile Certificate",
          description:
            "A certificate related to proof of residence or domicile status in Maharashtra.",
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
          title: "Residence Certificate",
          description:
            "A government certificate related to residential status.",
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
          title: "Senior Citizen Certificate",
          description:
            "Certificate services designed for eligible senior citizens.",
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
          title: "Non-Creamy Layer Certificate",
          description:
            "A certificate service for eligible applicants requiring NCL documentation.",
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
      },
    },

    mr: {
      government: "महाराष्ट्र शासन",
      back: "← प्रमाणपत्रांकडे परत जा",
      about: "या प्रमाणपत्राबद्दल",
      usedFor: "याचा उपयोग कशासाठी होतो?",
      documentsTitle: "कागदपत्रांची यादी",
      requiredDocuments: "आवश्यक कागदपत्रे",
      processTitle: "अर्ज प्रक्रिया",
      howItWorks: "प्रक्रिया कशी आहे?",
      available: "✓ सेवा उपलब्ध",
      construction: "🚧 बांधकामाधीन",
      ready: "अर्ज करण्यास तयार आहात?",
      startIncome: "उत्पन्न प्रमाणपत्रासाठी अर्ज सुरू करा",
      complete:
        "अर्ज पूर्ण करा आणि अर्जाचा मागोवा घेण्यासाठी अर्ज क्रमांक मिळवा.",
      apply: "आता अर्ज करा →",
      comingSoon: "लवकरच उपलब्ध",
      underConstruction: "ही सेवा बांधकामाधीन आहे",
      focusing:
        "आम्ही सध्या उत्पन्न प्रमाणपत्र सेवा पूर्णपणे कार्यरत करण्यावर लक्ष केंद्रित करत आहोत.",
      viewCertificates: "प्रमाणपत्रे पहा",
      notFound: "सेवा सापडली नाही",
      notFoundText:
        "विनंती केलेली प्रमाणपत्र सेवा सापडली नाही.",
      certificates: {
        income: {
          title: "उत्पन्न प्रमाणपत्र",
          description:
            "व्यक्ती किंवा कुटुंबाचे वार्षिक उत्पन्न सिद्ध करण्यासाठी वापरले जाणारे अधिकृत प्रमाणपत्र.",
          purpose:
            "शिष्यवृत्ती, शुल्क सवलत, सरकारी योजना आणि इतर पात्र लाभांसाठी उत्पन्न प्रमाणपत्र आवश्यक असू शकते.",
          documents: [
            "ओळखपत्र",
            "पत्त्याचा पुरावा",
            "उत्पन्नाशी संबंधित कागदपत्रे",
            "स्वयंघोषणा / लागू घोषणा",
          ],
          process: [
            "अर्जदाराची माहिती भरा",
            "पत्ता आणि उत्पन्नाची माहिती द्या",
            "आवश्यक कागदपत्रे अपलोड करा",
            "अर्ज तपासा",
            "अर्ज सादर करा",
            "अर्ज क्रमांक मिळवा",
          ],
        },
        caste: {
          title: "जात प्रमाणपत्र",
          description:
            "पात्र अर्जदाराची जात निश्चित करण्यासाठी वापरले जाणारे शासकीय प्रमाणपत्र.",
          purpose:
            "MahaConnect भविष्यात जात प्रमाणपत्र सेवेसाठी मार्गदर्शक माहिती आणि अर्ज सहाय्य उपलब्ध करेल.",
          documents: [
            "ओळखपत्र",
            "पत्त्याचा पुरावा",
            "जात संबंधित कागदपत्रे",
            "इतर लागू कागदपत्रे",
          ],
          process: [
            "पात्रता तपासा",
            "आवश्यक कागदपत्रे तपासा",
            "अर्जदाराची माहिती भरा",
            "अर्ज सादर करा",
            "अर्जाची स्थिती तपासा",
          ],
        },
        domicile: {
          title: "अधिवास प्रमाणपत्र",
          description:
            "महाराष्ट्रातील रहिवास किंवा अधिवास स्थिती सिद्ध करण्याशी संबंधित प्रमाणपत्र.",
          purpose:
            "ही सेवा MahaConnect च्या भविष्यातील आवृत्तीत उपलब्ध केली जाईल.",
          documents: [
            "ओळखपत्र",
            "पत्त्याचा पुरावा",
            "रहिवासाशी संबंधित कागदपत्रे",
          ],
          process: [
            "पात्रता तपासा",
            "आवश्यक कागदपत्रे तयार करा",
            "अर्ज पूर्ण करा",
            "अर्ज सादर करा",
            "अर्जाची स्थिती तपासा",
          ],
        },
        residence: {
          title: "रहिवासी प्रमाणपत्र",
          description:
            "रहिवासी स्थितीशी संबंधित शासकीय प्रमाणपत्र.",
          purpose:
            "ही प्रमाणपत्र सेवा MahaConnect च्या भविष्यातील आवृत्तीत उपलब्ध केली जाईल.",
          documents: [
            "ओळखपत्र",
            "पत्त्याचा पुरावा",
            "लागू रहिवासी कागदपत्रे",
          ],
          process: [
            "पात्रता तपासा",
            "कागदपत्रे तयार करा",
            "अर्ज पूर्ण करा",
            "अर्ज सादर करा",
          ],
        },
        "senior-citizen": {
          title: "ज्येष्ठ नागरिक प्रमाणपत्र",
          description:
            "पात्र ज्येष्ठ नागरिकांसाठी प्रमाणपत्र सेवा.",
          purpose:
            "ही सेवा MahaConnect च्या भविष्यातील आवृत्तीत उपलब्ध केली जाईल.",
          documents: [
            "ओळखपत्र",
            "वयाचा पुरावा",
            "पत्त्याचा पुरावा",
          ],
          process: [
            "पात्रता तपासा",
            "कागदपत्रे तयार करा",
            "अर्ज पूर्ण करा",
            "अर्ज सादर करा",
          ],
        },
        "non-creamy-layer": {
          title: "नॉन-क्रीमी लेयर प्रमाणपत्र",
          description:
            "NCL कागदपत्रांची आवश्यकता असलेल्या पात्र अर्जदारांसाठी प्रमाणपत्र सेवा.",
          purpose:
            "ही सेवा MahaConnect च्या भविष्यातील आवृत्तीत विकसित केली जाईल.",
          documents: [
            "ओळखपत्र",
            "पत्त्याचा पुरावा",
            "उत्पन्नाशी संबंधित कागदपत्रे",
            "लागू सहाय्यक कागदपत्रे",
          ],
          process: [
            "पात्रता तपासा",
            "कागदपत्रे तयार करा",
            "अर्ज पूर्ण करा",
            "अर्ज सादर करा",
          ],
        },
      },
    },

    hi: {
      government: "महाराष्ट्र सरकार",
      back: "← प्रमाणपत्रों पर वापस जाएं",
      about: "इस प्रमाणपत्र के बारे में",
      usedFor: "इसका उपयोग किस लिए होता है?",
      documentsTitle: "दस्तावेज़ सूची",
      requiredDocuments: "आवश्यक दस्तावेज़",
      processTitle: "आवेदन प्रक्रिया",
      howItWorks: "यह कैसे काम करता है?",
      available: "✓ सेवा उपलब्ध",
      construction: "🚧 निर्माणाधीन",
      ready: "आवेदन करने के लिए तैयार?",
      startIncome: "आय प्रमाण पत्र का आवेदन शुरू करें",
      complete:
        "आवेदन पूरा करें और ट्रैकिंग के लिए आवेदन क्रमांक प्राप्त करें।",
      apply: "अभी आवेदन करें →",
      comingSoon: "जल्द आ रहा है",
      underConstruction: "यह सेवा निर्माणाधीन है",
      focusing:
        "हम वर्तमान में आय प्रमाण पत्र सेवा को पूरी तरह कार्यशील बनाने पर ध्यान दे रहे हैं।",
      viewCertificates: "प्रमाणपत्र देखें",
      notFound: "सेवा नहीं मिली",
      notFoundText:
        "अनुरोधित प्रमाणपत्र सेवा नहीं मिल सकी।",
      certificates: {
        income: {
          title: "आय प्रमाण पत्र",
          description:
            "व्यक्ति या परिवार की वार्षिक आय सत्यापित करने के लिए उपयोग किया जाने वाला आधिकारिक प्रमाणपत्र।",
          purpose:
            "छात्रवृत्ति, शुल्क रियायत, सरकारी योजनाओं और अन्य पात्र लाभों के लिए आय प्रमाण पत्र आवश्यक हो सकता है।",
          documents: [
            "पहचान प्रमाण",
            "पते का प्रमाण",
            "आय से संबंधित दस्तावेज़",
            "स्व-घोषणा / लागू घोषणा",
          ],
          process: [
            "आवेदक की जानकारी दर्ज करें",
            "पता और आय की जानकारी दें",
            "आवश्यक दस्तावेज़ अपलोड करें",
            "आवेदन की समीक्षा करें",
            "आवेदन जमा करें",
            "आवेदन क्रमांक प्राप्त करें",
          ],
        },
        caste: {
          title: "जाति प्रमाण पत्र",
          description:
            "पात्र आवेदक की जाति स्थिति स्थापित करने के लिए उपयोग किया जाने वाला सरकारी प्रमाणपत्र।",
          purpose:
            "MahaConnect भविष्य में जाति प्रमाण पत्र सेवाओं के लिए मार्गदर्शित जानकारी और आवेदन सहायता प्रदान करेगा।",
          documents: [
            "पहचान प्रमाण",
            "पते का प्रमाण",
            "जाति से संबंधित दस्तावेज़",
            "अन्य लागू दस्तावेज़",
          ],
          process: [
            "पात्रता जांचें",
            "आवश्यक दस्तावेज़ देखें",
            "आवेदक की जानकारी दर्ज करें",
            "आवेदन जमा करें",
            "आवेदन की स्थिति ट्रैक करें",
          ],
        },
        domicile: {
          title: "अधिवास प्रमाण पत्र",
          description:
            "महाराष्ट्र में निवास या अधिवास स्थिति के प्रमाण से संबंधित प्रमाणपत्र।",
          purpose:
            "यह सेवा MahaConnect के भविष्य के संस्करण में उपलब्ध होगी।",
          documents: [
            "पहचान प्रमाण",
            "पते का प्रमाण",
            "निवास से संबंधित दस्तावेज़",
          ],
          process: [
            "पात्रता जांचें",
            "आवश्यक दस्तावेज़ तैयार करें",
            "आवेदन पूरा करें",
            "आवेदन जमा करें",
            "आवेदन ट्रैक करें",
          ],
        },
        residence: {
          title: "निवास प्रमाण पत्र",
          description:
            "निवास स्थिति से संबंधित सरकारी प्रमाणपत्र।",
          purpose:
            "यह प्रमाणपत्र सेवा MahaConnect के भविष्य के संस्करण में जोड़ी जाएगी।",
          documents: [
            "पहचान प्रमाण",
            "पते का प्रमाण",
            "लागू निवास दस्तावेज़",
          ],
          process: [
            "पात्रता जांचें",
            "दस्तावेज़ तैयार करें",
            "आवेदन पूरा करें",
            "आवेदन जमा करें",
          ],
        },
        "senior-citizen": {
          title: "वरिष्ठ नागरिक प्रमाण पत्र",
          description:
            "पात्र वरिष्ठ नागरिकों के लिए प्रमाणपत्र सेवा।",
          purpose:
            "यह सेवा MahaConnect के भविष्य के संस्करण में उपलब्ध होगी।",
          documents: [
            "पहचान प्रमाण",
            "आयु प्रमाण",
            "पते का प्रमाण",
          ],
          process: [
            "पात्रता जांचें",
            "दस्तावेज़ तैयार करें",
            "आवेदन पूरा करें",
            "आवेदन जमा करें",
          ],
        },
        "non-creamy-layer": {
          title: "नॉन-क्रीमी लेयर प्रमाण पत्र",
          description:
            "NCL दस्तावेज़ की आवश्यकता वाले पात्र आवेदकों के लिए प्रमाणपत्र सेवा।",
          purpose:
            "यह सेवा MahaConnect के भविष्य के संस्करण में विकसित की जाएगी।",
          documents: [
            "पहचान प्रमाण",
            "पते का प्रमाण",
            "आय से संबंधित दस्तावेज़",
            "लागू सहायक दस्तावेज़",
          ],
          process: [
            "पात्रता जांचें",
            "दस्तावेज़ तैयार करें",
            "आवेदन पूरा करें",
          ],
        },
      },
    },
  };

  const t = text[language] || text.en;
  const data = t.certificates[service];

  if (!data) {
    return (
      <div className="details-page">
        <div className="details-card">
          <h1>{t.notFound}</h1>

          <p>{t.notFoundText}</p>

          <button
            className="primary-btn"
            onClick={() => navigate("/services")}
          >
            {t.viewCertificates}
          </button>
        </div>
      </div>
    );
  }

  const isAvailable = service === "income";

  return (
    <div className="details-page">

      <button
        className="details-back"
        onClick={() => navigate("/services")}
      >
        {t.back}
      </button>

      <div className="details-hero">

        <div className="details-icon">
          {service === "income"
            ? "💰"
            : service === "caste"
            ? "🏛️"
            : service === "domicile"
            ? "🏠"
            : service === "residence"
            ? "📍"
            : service === "senior-citizen"
            ? "👴"
            : "📄"}
        </div>

        <div>
          <p className="details-label">
            {t.government}
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
              ? t.available
              : t.construction}
          </span>
        </div>

      </div>

      <section className="details-section">

        <p className="details-label">
          {t.about}
        </p>

        <h2>{t.usedFor}</h2>

        <p>{data.purpose}</p>

      </section>

      <section className="details-section">

        <p className="details-label">
          {t.documentsTitle}
        </p>

        <h2>{t.requiredDocuments}</h2>

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

      <section className="details-section">

        <p className="details-label">
          {t.processTitle}
        </p>

        <h2>{t.howItWorks}</h2>

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

      <section className="details-action">

        {isAvailable ? (
          <>
            <div>
              <p className="details-label">
                {t.ready}
              </p>

              <h2>{t.startIncome}</h2>

              <p>{t.complete}</p>
            </div>

            <button
              className="primary-btn"
              onClick={() => navigate("/application")}
            >
              {t.apply}
            </button>
          </>
        ) : (
          <>
            <div>
              <p className="details-label">
                {t.comingSoon}
              </p>

              <h2>{t.underConstruction}</h2>

              <p>{t.focusing}</p>
            </div>

            <button
              className="secondary-details-btn"
              onClick={() => navigate("/services")}
            >
              {t.viewCertificates}
            </button>
          </>
        )}

      </section>

    </div>
  );
}

export default ServiceDetails;