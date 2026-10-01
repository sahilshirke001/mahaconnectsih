import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function Tracking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [trackingId, setTrackingId] = useState("");
  const [application, setApplication] = useState(null);

  const [applications] = useState(() => {
    return JSON.parse(localStorage.getItem("applications")) || [];
  });

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

  const statuses = [
    "Submitted",
    "Under Review",
    "Processing",
    "Approved",
  ];

  return (
    <div className="tracking-page">

      <div className="tracking-card">

        {/* Header */}

        <div className="tracking-icon">
          📊
        </div>

        <p className="tracking-label">
          MAHARASHTRA GOVERNMENT
        </p>

        <h1>
          Track Income Certificate
        </h1>

        <p className="tracking-description">
          Enter your Application ID to check the current
          status of your Income Certificate application.
        </p>

        {/* Search */}

        <div className="tracking-input">

          <input
            type="text"
            placeholder="Example: MH12345"
            value={trackingId}
            onChange={(e) =>
              setTrackingId(e.target.value.toUpperCase())
            }
          />

          <button onClick={trackApplication}>
            Track →
          </button>

        </div>

        {/* Application Result */}

        {application && application !== "not-found" && (

          <div className="application-result">

            <div className="tracking-result-header">

              <div>
                <p className="result-label">
                  APPLICATION
                </p>

                <h2>
                  Income Certificate
                </h2>
              </div>

              <span className="current-status">
                {application.status}
              </span>

            </div>

            {/* Basic Details */}

            <div className="tracking-details-grid">

              <div>
                <span>Application ID</span>
                <strong>{application.id}</strong>
              </div>

              <div>
                <span>Applicant</span>
                <strong>{application.applicant}</strong>
              </div>

              <div>
                <span>Application Date</span>
                <strong>{application.date}</strong>
              </div>

              <div>
                <span>Service</span>
                <strong>{application.service}</strong>
              </div>

            </div>

            {/* Status Progress */}

            <div className="tracking-status-section">

              <p className="result-label">
                APPLICATION STATUS
              </p>

              <h3>
                Application Progress
              </h3>

              <div className="status-progress">

                {statuses.map((status, index) => {

                  const currentIndex =
                    statuses.indexOf(application.status);

                  return (
                    <div
                      key={status}
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

                        <p>{status}</p>

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
                <span>District</span>
                <strong>
                  {application.address?.split(",")[1]?.trim() ||
                    "Maharashtra"}
                </strong>
              </div>

              {application.income && (
                <div>
                  <span>Annual Family Income</span>
                  <strong>
                    ₹{application.income}
                  </strong>
                </div>
              )}

              {application.incomeSource && (
                <div>
                  <span>Income Source</span>
                  <strong>
                    {application.incomeSource}
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
                ← Back to Dashboard
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
              Application Not Found
            </h3>

            <p>
              We couldn't find an application with this ID.
              Please check the ID and try again.
            </p>

          </div>
        )}

        {/* Information */}

        <div className="tracking-info">

          <strong>
            💡 Where can I find my Application ID?
          </strong>

          <p>
            Your Application ID is generated after you
            successfully submit your Income Certificate
            application.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Tracking;