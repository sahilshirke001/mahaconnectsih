import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Tracking() {
  const [searchParams] = useSearchParams();

  const [trackingId, setTrackingId] = useState("");
  const [application, setApplication] = useState(null);

  const [applications] = useState(() => {
    return JSON.parse(localStorage.getItem("applications")) || [];
  });

  useEffect(() => {
    const id = searchParams.get("id");

    if (id) {
      setTrackingId(id);

      const foundApplication = applications.find(
        (app) => app.id === id
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

        <div className="tracking-icon">📊</div>

        <h1>Track Your Application</h1>

        <p>
          Enter your application ID to check the current status.
        </p>

        <div className="tracking-input">
          <input
            type="text"
            placeholder="Enter Application ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />

          <button onClick={trackApplication}>
            Track →
          </button>
        </div>

        {application && application !== "not-found" && (
          <div className="application-result">

            <h2>Application Details</h2>

            <p>
              <strong>Application ID:</strong>{" "}
              {application.id}
            </p>

            <p>
              <strong>Service:</strong>{" "}
              {application.service}
            </p>

            <p>
              <strong>Applicant:</strong>{" "}
              {application.applicant}
            </p>

            <p>
              <strong>Application Date:</strong>{" "}
              {application.date}
            </p>

            <div className="status">
              Status: {application.status}
            </div>

            {/* Status Progress */}
            <div className="status-progress">
              {statuses.map((status, index) => {
                const currentIndex = statuses.indexOf(
                  application.status
                );

                return (
                  <div
                    key={status}
                    className="status-wrapper"
                  >
                    <div
                      className={`progress-step ${
                        index <= currentIndex ? "active" : ""
                      }`}
                    >
                      <span>{index + 1}</span>
                      <p>{status}</p>
                    </div>

                    {index < statuses.length - 1 && (
                      <div
                        className={`progress-line ${
                          index < currentIndex
                            ? "active-line"
                            : ""
                        }`}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {application === "not-found" && (
          <div className="not-found">
            ❌ Application not found. Please check your Application ID.
          </div>
        )}

        <div className="demo-ids">
          <strong>
            Enter an Application ID generated after submitting an
            application.
          </strong>
        </div>

      </div>
    </div>
  );
}

export default Tracking;