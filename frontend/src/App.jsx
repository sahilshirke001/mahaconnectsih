import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Services from "./pages/Services";

function Home() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          🏛️ MahaConnect
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <a href="#about">About</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="tagline">
            MAHARASHTRA DIGITAL SERVICES
          </p>

          <h1>
            One Platform.
            <br />
            <span>Many Government Services.</span>
          </h1>

          <p className="description">
            Discover, access and track Maharashtra government
            services from one simple platform.
          </p>

          <div className="hero-buttons">
            <Link to="/services">
              <button className="primary-btn">
                Explore Services →
              </button>
            </Link>

            <button className="secondary-btn">
              🤖 Ask AI Assistant
            </button>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="assistant-card">
          <div className="ai-icon">🤖</div>

          <h2>How can we help?</h2>

          <p>
            Ask our AI assistant about government services,
            schemes and applications.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="What government service do you need?"
            />

            <button>→</button>
          </div>
        </div>

      </section>

      {/* Services Preview */}
      <section className="services" id="services">

        <div className="section-heading">
          <p>EXPLORE</p>

          <h2>Government Services</h2>

          <span>
            Find the service you need without searching through
            multiple websites.
          </span>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="service-icon">🎓</div>

            <h3>Education</h3>

            <p>
              Scholarships, certificates and student services.
            </p>

            <Link to="/services">
              <button>Explore →</button>
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">📄</div>

            <h3>Certificates</h3>

            <p>
              Find and track important government certificates.
            </p>

            <Link to="/services">
              <button>Explore →</button>
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">🏥</div>

            <h3>Healthcare</h3>

            <p>
              Discover public healthcare services and schemes.
            </p>

            <Link to="/services">
              <button>Explore →</button>
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">🚗</div>

            <h3>Transport</h3>

            <p>
              Access transport-related government services.
            </p>

            <Link to="/services">
              <button>Explore →</button>
            </Link>
          </div>

        </div>

      </section>

      {/* Why MahaConnect */}
      <section className="why-section" id="about">

        <div>
          <p className="tagline">
            WHY MAHACONNECT?
          </p>

          <h2>
            Government services,
            <br />
            connected.
          </h2>
        </div>

        <div className="features">

          <div>
            <strong>🔗 Unified Services</strong>

            <p>
              Connect multiple government services through one platform.
            </p>
          </div>

          <div>
            <strong>🤖 AI Assistance</strong>

            <p>
              Find the right government service using natural language.
            </p>
          </div>

          <div>
            <strong>📊 Application Tracking</strong>

            <p>
              Track your applications from one dashboard.
            </p>
          </div>

          <div>
            <strong>🌐 Multilingual</strong>

            <p>
              Designed for English, Marathi and Hindi users.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer>
        <h3>🏛️ MahaConnect</h3>

        <p>
          A unified digital gateway for Maharashtra government services.
        </p>

        <small>
          SIH26129 Prototype
        </small>
      </footer>

    </div>
  );
}

function App() {
  return (
    
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<Services />}
        />

      </Routes>
    
  );
}

export default App;