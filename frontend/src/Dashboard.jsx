import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);

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

  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <div className="dashboard-header">

        <div>
          <p className="tagline">
            MAHACONNECT DASHBOARD
          </p>

          <h1>
            Welcome back, {userName}! 👋
          </h1>

          <p>
            Manage your Maharashtra government certificate
            applications from one place.
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
            📋 My Applications
          </h3>

          <p>
            {applications.length}
          </p>

          <span>
            Total applications
          </span>

        </div>


        <div className="dashboard-card">

          <h3>
            ⏳ Pending
          </h3>

          <p>
            {pendingCount}
          </p>

          <span>
            Applications in progress
          </span>

        </div>


        <div className="dashboard-card">

          <h3>
            ✅ Approved
          </h3>

          <p>
            {approvedCount}
          </p>

          <span>
            Completed applications
          </span>

        </div>

      </div>


      {/* APPLICATIONS */}

      <div className="dashboard-section">

        <div className="section-title">

          <div>
            <p className="dashboard-section-label">
              CERTIFICATE SERVICES
            </p>

            <h2>
              My Applications
            </h2>
          </div>

          {applications.length > 0 && (
            <Link to="/tracking">
              Track Application →
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
                No applications yet
              </h3>

              <p>
                You haven't submitted a government
                certificate application yet.
              </p>

              <Link to="/certificates">
                Explore Certificates →
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
                        {application.service}
                      </strong>

                      <span>
                        Application ID: {application.id}
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
                    {application.status}
                  </span>

                </div>

              ))

          )}

        </div>

      </div>


      {/* QUICK ACTIONS */}

      <div className="quick-actions">

        <h2>
          Quick Actions
        </h2>

        <div className="quick-action-grid">

          <Link to="/certificates">

            📄

            <strong>
              Certificates
            </strong>

            <span>
              Explore certificate services
            </span>

          </Link>


          <Link to="/tracking">

            📊

            <strong>
              Track Application
            </strong>

            <span>
              Check application status
            </span>

          </Link>


          <Link to="/ai-assistant">

            🤖

            <strong>
              AI Assistant
            </strong>

            <span>
              Find government services
            </span>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;