import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

function Tracking() {
  const { language, t } = useLanguage();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [trackingId, setTrackingId] = useState("");
  const [application, setApplication] = useState(null);

  const [applications] = useState(() => {
    return JSON.parse(localStorage.getItem("applications")) || [];
  });

  const text = {
    en: {
      government: "MAHARASHTRA GOVERNMENT",
      title: "Track Income Certificate",
      description:
        "Enter your Application ID to check the current status of your Income Certificate application.",
      placeholder: "Example: MH12345",
      track: "Track →",

      application: "APPLICATION",
      certificate: "Income Certificate",
      applicationId: "Application ID",
      applicant: "Applicant",
      applicationDate: "Application Date",
      service: "Service",

      applicationStatus: "APPLICATION STATUS",
      progress: "Application Progress",

      submitted: "Submitted",
      underReview: "Under Review",
      processing: "Processing",
      approved: "Approved",

      district: "District",
      income: "Annual Family Income",
      incomeSource: "Income Source",

      backDashboard: "← Back to Dashboard",

      notFound: "Application Not Found",
      notFoundDescription:
        "We couldn't find an application with this ID. Please check the ID and try again.",

      whereId: "💡 Where can I find my Application ID?",
      idInfo:
        "Your Application ID is generated after you successfully submit your Income Certificate application.",
      maharashtra: "Maharashtra",
    },

    mr: {
      government: "महाराष्ट्र शासन",
      title: "उत्पन्न प्रमाणपत्राचा मागोवा घ्या",
      description:
        "तुमच्या उत्पन्न प्रमाणपत्राच्या अर्जाची सध्याची स्थिती पाहण्यासाठी अर्ज क्रमांक टाका.",
      placeholder: "उदाहरण: MH12345",
      track: "मागोवा घ्या →",

      application: "अर्ज",
      certificate: "उत्पन्न प्रमाणपत्र",
      applicationId: "अर्ज क्रमांक",
      applicant: "अर्जदार",
      applicationDate: "अर्जाची तारीख",
      service: "सेवा",

      applicationStatus: "अर्जाची स्थिती",
      progress: "अर्जाची प्रगती",

      submitted: "सादर केले",
      underReview: "तपासणी सुरू आहे",
      processing: "प्रक्रिया सुरू आहे",
      approved: "मंजूर",

      district: "जिल्हा",
      income: "वार्षिक कौटुंबिक उत्पन्न",
      incomeSource: "उत्पन्नाचा स्रोत",

      backDashboard: "← डॅशबोर्डवर परत जा",

      notFound: "अर्ज सापडला नाही",
      notFoundDescription:
        "या क्रमांकाचा अर्ज सापडला नाही. कृपया अर्ज क्रमांक तपासा आणि पुन्हा प्रयत्न करा.",

      whereId: "💡 माझा अर्ज क्रमांक कुठे मिळेल?",
      idInfo:
        "तुमचा उत्पन्न प्रमाणपत्राचा अर्ज यशस्वीरित्या सादर केल्यानंतर अर्ज क्रमांक तयार केला जातो.",
      maharashtra: "महाराष्ट्र",
    },

    hi: {
      government: "महाराष्ट्र सरकार",
      title: "आय प्रमाण पत्र ट्रैक करें",
      description:
        "अपने आय प्रमाण पत्र आवेदन की वर्तमान स्थिति देखने के लिए आवेदन क्रमांक दर्ज करें।",
      placeholder: "उदाहरण: MH12345",
      track: "ट्रैक करें →",

      application: "आवेदन",
      certificate: "आय प्रमाण पत्र",
      applicationId: "आवेदन क्रमांक",
      applicant: "आवेदक",
      applicationDate: "आवेदन की तारीख",
      service: "सेवा",

      applicationStatus: "आवेदन की स्थिति",
      progress: "आवेदन की प्रगति",

      submitted: "जमा किया गया",
      underReview: "जांच के अधीन",
      processing: "प्रक्रिया जारी है",
      approved: "स्वीकृत",

      district: "जिला",
      income: "वार्षिक पारिवारिक आय",
      incomeSource: "आय का स्रोत",

      backDashboard: "← डैशबोर्ड पर वापस जाएं",

      notFound: "आवेदन नहीं मिला",
      notFoundDescription:
        "इस क्रमांक वाला कोई आवेदन नहीं मिला। कृपया क्रमांक जांचें और फिर प्रयास करें।",

      whereId: "💡 मेरा आवेदन क्रमांक कहां मिलेगा?",
      idInfo:
        "आपका आय प्रमाण पत्र आवेदन सफलतापूर्वक जमा करने के बाद आवेदन क्रमांक बनाया जाता है।",
      maharashtra: "महाराष्ट्र",
    },
  };

  const currentText = text[language];

  const statuses = [
    {
      value: "Submitted",
      label: currentText.submitted,
    },
    {
      value: "Under Review",
      label: currentText.underReview,
    },
    {
      value: "Processing",
      label: currentText.processing,
    },
    {
      value: "Approved",
      label: currentText.approved,
    },
  ];

  useEffect(() => {
    const id = searchParams.get("id");

    if (id) {
      const upperId = id.toUpperCase();

      setTrackingId(upperId);

      const foundApplication = applications.find(
        (app) => app.id === upperId
      );

      if (foundApplication) {
        setApplication(foundApplication);
      }
    }
  }, [searchParams, applications]);

  const trackApplication = () => {
    const id = trackingId.trim().toUpperCase();

    const foundApplication = applications.find(
      (app) => app.id === id
    );

    if (foundApplication) {
      setApplication(foundApplication);
    } else {
      setApplication("not-found");
    }
  };

  return (
    <div className="tracking-page">

      <div className="tracking-card">

        {/* Header */}

        <div className="tracking-icon">
          📊
        </div>

        <p className="tracking-label">
          {currentText.government}
        </p>

        <h1>
          {currentText.title}
        </h1>

        <p className="tracking-description">
          {currentText.description}
        </p>

        {/* Search */}

        <div className="tracking-input">

          <input
            type="text"
            placeholder={currentText.placeholder}
            value={trackingId}
            onChange={(e) =>
              setTrackingId(e.target.value.toUpperCase())
            }
          />

          <button onClick={trackApplication}>
            {currentText.track}
          </button>

        </div>

        {/* Application Result */}

        {application && application !== "not-found" && (

          <div className="application-result">

            <div className="tracking-result-header">

              <div>
                <p className="result-label">
                  {currentText.application}
                </p>

                <h2>
                  {currentText.certificate}
                </h2>
              </div>

              <span className="current-status">
                {application.status === "Submitted"
                  ? currentText.submitted
                  : application.status === "Under Review"
                  ? currentText.underReview
                  : application.status === "Processing"
                  ? currentText.processing
                  : application.status === "Approved"
                  ? currentText.approved
                  : application.status}
              </span>

            </div>

            {/* Basic Details */}

            <div className="tracking-details-grid">

              <div>
                <span>{currentText.applicationId}</span>
                <strong>{application.id}</strong>
              </div>

              <div>
                <span>{currentText.applicant}</span>
                <strong>{application.applicant}</strong>
              </div>

              <div>
                <span>{currentText.applicationDate}</span>
                <strong>{application.date}</strong>
              </div>

              <div>
                <span>{currentText.service}</span>
                <strong>{currentText.certificate}</strong>
              </div>

            </div>

            {/* Status Progress */}

            <div className="tracking-status-section">

              <p className="result-label">
                {currentText.applicationStatus}
              </p>

              <h3>
                {currentText.progress}
              </h3>

              <div className="status-progress">

                {statuses.map((status, index) => {

                  const currentIndex = statuses.findIndex(
                    (item) =>
                      item.value === application.status
                  );

                  return (
                    <div
                      key={status.value}
                      className="status-wrapper"
                    >

                      <div
                        className={`progress-step ${
                          index <= currentIndex
                            ? "active"
                            : ""
                        }`}
                      >

                        <span>
                          {index <= currentIndex
                            ? "✓"
                            : index + 1}
                        </span>

                        <p>{status.label}</p>

                      </div>

                      {index < statuses.length - 1 && (

                        <div
                          className={`progress-line ${
                            index < currentIndex
                              ? "active-line"
                              : ""
                          }`}
                        />

                      )}

                    </div>
                  );
                })}

              </div>

            </div>

            {/* Extra Details */}

            <div className="tracking-extra">

              <div>
                <span>{currentText.district}</span>

                <strong>
                  {application.address?.split(",")[1]?.trim() ||
                    currentText.maharashtra}
                </strong>
              </div>

              {application.income && (
                <div>
                  <span>{currentText.income}</span>

                  <strong>
                    ₹{application.income}
                  </strong>
                </div>
              )}

              {application.incomeSource && (
                <div>
                  <span>{currentText.incomeSource}</span>

                  <strong>
                    {application.incomeSource === "Salary"
                      ? language === "mr"
                        ? "पगार"
                        : language === "hi"
                        ? "वेतन"
                        : "Salary"
                      : application.incomeSource === "Business"
                      ? language === "mr"
                        ? "व्यवसाय"
                        : language === "hi"
                        ? "व्यवसाय"
                        : "Business"
                      : application.incomeSource === "Agriculture"
                      ? language === "mr"
                        ? "शेती"
                        : language === "hi"
                        ? "कृषि"
                        : "Agriculture"
                      : application.incomeSource === "Daily Wage"
                      ? language === "mr"
                        ? "रोजंदारी"
                        : language === "hi"
                        ? "दैनिक मजदूरी"
                        : "Daily Wage"
                      : application.incomeSource === "Pension"
                      ? language === "mr"
                        ? "पेन्शन"
                        : language === "hi"
                        ? "पेंशन"
                        : "Pension"
                      : language === "mr"
                      ? "इतर"
                      : language === "hi"
                      ? "अन्य"
                      : "Other"}
                  </strong>
                </div>
              )}

            </div>

            {/* Actions */}

            <div className="tracking-actions">

              <button
                className="secondary-details-btn"
                onClick={() => navigate("/dashboard")}
              >
                {currentText.backDashboard}
              </button>

            </div>

          </div>
        )}

        {/* Not Found */}

        {application === "not-found" && (

          <div className="not-found">

            <div className="not-found-icon">
              🔎
            </div>

            <h3>
              {currentText.notFound}
            </h3>

            <p>
              {currentText.notFoundDescription}
            </p>

          </div>
        )}

        {/* Information */}

        <div className="tracking-info">

          <strong>
            {currentText.whereId}
          </strong>

          <p>
            {currentText.idInfo}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Tracking;