import { useNavigate } from "react-router-dom";

function AIAssistant() {
  const navigate = useNavigate();

  return (
    <div className="ai-page">

      <div className="ai-card">

        {/* HEADER */}

        <div className="ai-header">

          <div className="ai-icon">
            🤖
          </div>

          <div>
            <span className="ai-status">
              ● Online
            </span>

            <h1>
              MahaConnect Assistant
            </h1>
          </div>

        </div>


        {/* DESCRIPTION */}

        <p className="ai-description">
          Hello! 👋 I can help you find Maharashtra
          government certificate services.
        </p>


        {/* SERVICE OPTIONS */}

        <div className="ai-options">

          {/* Education */}

          <button
            className="ai-construction-btn"
            disabled
          >
            <span>🎓 Education</span>
            <small>
              🚧 Under Construction
            </small>
          </button>


          {/* Certificates */}

          <button
            onClick={() => navigate("/certificates")}
          >
            <span>📄 Certificates</span>
            <small>
              Explore certificate services →
            </small>
          </button>


          {/* Healthcare */}

          <button
            className="ai-construction-btn"
            disabled
          >
            <span>🏥 Healthcare</span>
            <small>
              🚧 Under Construction
            </small>
          </button>


          {/* Transport */}

          <button
            className="ai-construction-btn"
            disabled
          >
            <span>🚗 Transport</span>
            <small>
              🚧 Under Construction
            </small>
          </button>

        </div>


        {/* CERTIFICATE ACTION */}

        <div className="ai-help-box">

          <strong>
            💡 Looking for a certificate?
          </strong>

          <p>
            Explore Income Certificate and other
            certificate services available on MahaConnect.
          </p>

          <button
            className="ask-assistant"
            onClick={() => navigate("/certificates")}
          >
            Explore Certificates →
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;