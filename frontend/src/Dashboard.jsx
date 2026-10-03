import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

function Dashboard() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);

  const text = {
    en: {
      tagline: "MAHACONNECT DASHBOARD",
      welcome: "Welcome back",
      description:
        "Manage your Maharashtra government certificate applications from one place.",
      myApplications: "My Applications",
      totalApplications: "Total applications",
      pending: "Pending",
      inProgress: "Applications in progress",
      approved: "Approved",
      completed: "Completed applications",
      certificateServices: "CERTIFICATE SERVICES",
      trackApplication: "Track Application →",
      noApplications: "No applications yet",
      noApplicationsText:
        "You haven't submitted a government certificate application yet.",
      exploreCertificates: "Explore Certificates →",
      applicationId: "Application ID",
      quickActions: "Quick Actions",
      certificates: "Certificates",
      exploreServices: "Explore certificate services",
      checkStatus: "Check application status",
      aiAssistant: "AI Assistant",
      findServices: "Find government services",
    },

    mr: {
      tagline: "महाकनेक्ट डॅशबोर्ड",
      welcome: "पुन्हा स्वागत आहे",
      description:
        "तुमचे महाराष्ट्र शासनाचे प्रमाणपत्र अर्ज एका ठिकाणाहून व्यवस्थापित करा.",
      myApplications: "माझे अर्ज",
      totalApplications: "एकूण अर्ज",
      pending: "प्रलंबित",
      inProgress: "प्रक्रियेत असलेले अर्ज",
      approved: "मंजूर",
      completed: "पूर्ण झालेले अर्ज",
      certificateServices: "प्रमाणपत्र सेवा",
      trackApplication: "अर्जाचा मागोवा घ्या →",
      noApplications: "अद्याप कोणतेही अर्ज नाहीत",
      noApplicationsText:
        "तुम्ही अद्याप कोणताही शासकीय प्रमाणपत्र अर्ज सादर केलेला नाही.",
      exploreCertificates: "प्रमाणपत्रे पहा →",
      applicationId: "अर्ज क्रमांक",
      quickActions: "जलद कृती",
      certificates: "प्रमाणपत्रे",
      exploreServices: "प्रमाणपत्र सेवा पहा",
      checkStatus: "अर्जाची स्थिती तपासा",
      aiAssistant: "AI सहाय्यक",
      findServices: "शासकीय सेवा शोधा",
    },

    hi: {
      tagline: "महाकनेक्ट डैशबोर्ड",
      welcome: "वापसी पर स्वागत है",
      description:
        "अपने महाराष्ट्र सरकार के प्रमाणपत्र आवेदनों को एक ही स्थान से प्रबंधित करें।",
      myApplications: "मेरे आवेदन",
      totalApplications: "कुल आवेदन",
      pending: "लंबित",
      inProgress: "प्रक्रिया में आवेदन",
      approved: "स्वीकृत",
      completed: "पूर्ण आवेदन",
      certificateServices: "प्रमाणपत्र सेवाएं",
      trackApplication: "आवेदन ट्रैक करें →",
      noApplications: "अभी तक कोई आवेदन नहीं",
      noApplicationsText:
        "आपने अभी तक कोई सरकारी प्रमाणपत्र आवेदन जमा नहीं किया है।",
      exploreCertificates: "प्रमाणपत्र देखें →",
      applicationId: "आवेदन क्रमांक",
      quickActions: "त्वरित कार्य",
      certificates: "प्रमाणपत्र",
      exploreServices: "प्रमाणपत्र सेवाएं देखें",
      checkStatus: "आवेदन की स्थिति जांचें",
      aiAssistant: "AI सहायक",
      findServices: "सरकारी सेवाएं खोजें",
    },
  };

  const currentText = text[language];

  useEffect(() => {
    const loadApplications = () => {
      try {
        const savedApplications =
          localStorage.getItem("applications");

        if (savedApplications) {
          const parsedApplications =
            JSON.parse(savedApplications);

          if (Array.isArray(parsedApplications)) {
            setApplications(parsedApplications);
          }
        } else {
          setApplications([]);
        }
      } catch (error) {
        console.error(
          "Could not load applications:",
          error
        );
        setApplications([]);
      }
    };

    loadApplications();

    window.addEventListener(
      "applicationsUpdated",
      loadApplications
    );

    return () => {
      window.removeEventListener(
        "applicationsUpdated",
        loadApplications
      );
    };
  }, []);

  const userName =
    localStorage.getItem("userName") ||
    (applications.length > 0
      ? applications[applications.length - 1].applicant
      : language === "mr"
      ? "नागरिक"
      : language === "hi"
      ? "नागरिक"
      : "Citizen");

  const approvedCount = applications.filter(
    (app) => app.status === "Approved"
  ).length;

  const pendingCount = applications.filter(
    (app) =>
      app.status === "Submitted" ||
      app.status === "Under Review" ||
      app.status === "Processing"
  ).length;

  const getStatusText = (status) => {
    if (status === "Submitted") {
      return language === "mr"
        ? "सादर केले"
        : language === "hi"
        ? "जमा किया गया"
        : "Submitted";
    }

    if (status === "Under Review") {
      return language === "mr"
        ? "तपासणी सुरू आहे"
        : language === "hi"
        ? "जांच के अधीन"
        : "Under Review";
    }

    if (status === "Processing") {
      return language === "mr"
        ? "प्रक्रिया सुरू आहे"
        : language === "hi"
        ? "प्रक्रिया जारी है"
        : "Processing";
    }

    if (status === "Approved") {
      return language === "mr"
        ? "मंजूर"
        : language === "hi"
        ? "स्वीकृत"
        : "Approved";
    }

    return status;
  };

  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <div className="dashboard-header">

        <div>
          <p className="tagline">
            {currentText.tagline}
          </p>

          <h1>
            {currentText.welcome}, {userName}! 👋
          </h1>

          <p>
            {currentText.description}
          </p>
        </div>

        <div className="profile-card">
          👤
          <span>{userName}</span>
        </div>

      </div>


      {/* STATISTICS */}

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h3>
            📋 {currentText.myApplications}
          </h3>

          <p>
            {applications.length}
          </p>

          <span>
            {currentText.totalApplications}
          </span>

        </div>


        <div className="dashboard-card">

          <h3>
            ⏳ {currentText.pending}
          </h3>

          <p>
            {pendingCount}
          </p>

          <span>
            {currentText.inProgress}
          </span>

        </div>


        <div className="dashboard-card">

          <h3>
            ✅ {currentText.approved}
          </h3>

          <p>
            {approvedCount}
          </p>

          <span>
            {currentText.completed}
          </span>

        </div>

      </div>


      {/* APPLICATIONS */}

      <div className="dashboard-section">

        <div className="section-title">

          <div>
            <p className="dashboard-section-label">
              {currentText.certificateServices}
            </p>

            <h2>
              {currentText.myApplications}
            </h2>
          </div>

          {applications.length > 0 && (
            <Link to="/tracking">
              {currentText.trackApplication}
            </Link>
          )}

        </div>


        <div className="application-list">

          {applications.length === 0 ? (

            <div className="empty-dashboard">

              <div className="empty-icon">
                📄
              </div>

              <h3>
                {currentText.noApplications}
              </h3>

              <p>
                {currentText.noApplicationsText}
              </p>

              <Link to="/certificates">
                {currentText.exploreCertificates}
              </Link>

            </div>

          ) : (

            applications
              .slice()
              .reverse()
              .map((application) => (

                <div
                  className="dashboard-application"
                  key={application.id}
                  onClick={() =>
                    navigate(
                      `/tracking?id=${application.id}`
                    )
                  }
                >

                  <div className="dashboard-application-info">

                    <div className="dashboard-service-icon">
                      📄
                    </div>

                    <div>

                      <strong>
                        {language === "mr"
                          ? "उत्पन्न प्रमाणपत्र"
                          : language === "hi"
                          ? "आय प्रमाण पत्र"
                          : application.service}
                      </strong>

                      <span>
                        {currentText.applicationId}:{" "}
                        {application.id}
                      </span>

                      <small>
                        {application.date}
                      </small>

                    </div>

                  </div>


                  <span
                    className={`dashboard-status ${
                      application.status
                        .toLowerCase()
                        .replaceAll(" ", "-")
                    }`}
                  >
                    {getStatusText(application.status)}
                  </span>

                </div>

              ))

          )}

        </div>

      </div>


      {/* QUICK ACTIONS */}

      <div className="quick-actions">

        <h2>
          {currentText.quickActions}
        </h2>

        <div className="quick-action-grid">

          <Link to="/certificates">

            📄

            <strong>
              {currentText.certificates}
            </strong>

            <span>
              {currentText.exploreServices}
            </span>

          </Link>


          <Link to="/tracking">

            📊

            <strong>
              {currentText.trackApplication.replace(" →", "")}
            </strong>

            <span>
              {currentText.checkStatus}
            </span>

          </Link>


          <Link to="/ai-assistant">

            🤖

            <strong>
              {currentText.aiAssistant}
            </strong>

            <span>
              {currentText.findServices}
            </span>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;