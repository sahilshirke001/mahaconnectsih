import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
  // Store applications
  const [applications, setApplications] = useState([]);

  // Load applications from localStorage
  useEffect(() => {
    const loadApplications = () => {
      try {
        const savedApplications = localStorage.getItem("applications");

        if (savedApplications) {
          const parsedApplications = JSON.parse(savedApplications);

          if (Array.isArray(parsedApplications)) {
            setApplications(parsedApplications);
          }
        }
      } catch (error) {
        console.error("Could not load applications:", error);
      }
    };

    // Load when dashboard opens
    loadApplications();

    // Update dashboard when a new application is submitted
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

  // Get latest applicant name
  const userName =
  localStorage.getItem("userName") ||
  (applications.length > 0
    ? applications[applications.length - 1].applicant
    : "Demo User");

  // Count approved applications
  const approvedCount = applications.filter(
    (app) => app.status === "Approved"
  ).length;

  // Count pending applications
  const pendingCount = applications.filter(
    (app) =>
      app.status === "Submitted" ||
      app.status === "Under Review" ||
      app.status === "Processing"
  ).length;

  return (
    <div className="dashboard-page">

      {/* ================= HEADER ================= */}

      <div className="dashboard-header">

        <div>
          <p className="tagline">
            MAHACONNECT DASHBOARD
          </p>

          <h1>
            Welcome back, {userName}! 👋
          </h1>

          <p>
            Manage your government services and applications
            from one place.
          </p>
        </div>

        <div className="profile-card">
          👤
          <span>{userName}</span>
        </div>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>📋 My Applications</h3>

          <p>{applications.length}</p>

          <span>
            Total applications
          </span>
        </div>


        <div className="dashboard-card">
          <h3>⏳ Under Review</h3>

          <p>{pendingCount}</p>

          <span>
            Applications pending
          </span>
        </div>


        <div className="dashboard-card">
          <h3>✅ Approved</h3>

          <p>{approvedCount}</p>

          <span>
            Completed applications
          </span>
        </div>

      </div>


      {/* ================= APPLICATIONS ================= */}

      <div className="dashboard-section">

        <div className="section-title">

          <h2>
            My Applications
          </h2>

          <Link to="/tracking">
            Track All →
          </Link>

        </div>


        <div className="application-list">

          {applications.length === 0 ? (

            <div className="empty-dashboard">

              <h3>
                📄 No applications yet
              </h3>

              <p>
                You haven't submitted any applications yet.
              </p>

              <Link to="/services">
                Find Services →
              </Link>

            </div>

          ) : (

            applications.map((application) => (

              <div
  className="dashboard-application"
  key={application.id}
  onClick={() => navigate(`/tracking?id=${application.id}`)}
  style={{ cursor: "pointer" }}
>

                <div>

                  <strong>
                    {application.service}
                  </strong>

                  <span>
                    {application.id}
                  </span>

                </div>

                <span className="dashboard-status">
                  {application.status}
                </span>

              </div>

            ))

          )}

        </div>

      </div>


      {/* ================= QUICK ACTIONS ================= */}

      <div className="quick-actions">

        <h2>
          Quick Actions
        </h2>

        <div className="quick-action-grid">

          <Link to="/services">
            🔎
            <strong>
              Find Services
            </strong>
          </Link>


          <Link to="/tracking">
            📊
            <strong>
              Track Application
            </strong>
          </Link>


          <Link to="/ai-assistant">
            🤖
            <strong>
              Ask AI Assistant
            </strong>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;