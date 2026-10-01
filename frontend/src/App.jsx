import "./App.css";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Certificates from "./pages/Certificates";

import Login from "./pages/Login";

import ServiceDetails from "./pages/ServiceDetails";
import AIAssistant from "./AIAssistant";
import Tracking from "./Tracking";
import Dashboard from "./Dashboard";
import Application from "./Application";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/services?search=${encodeURIComponent(search.trim())}`);
    } else {
      navigate("/services");
    }
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <Link to="/" className="logo">
          🏛️ <span>Maha</span>Connect
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/tracking">Track Application</Link>
          <Link to="/dashboard">Dashboard</Link>
          <a href="#about">About</a>

          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            🇮🇳 Maharashtra Digital Services
          </div>

          <p className="tagline">
            ONE PLATFORM • MANY SERVICES
          </p>

          <h1>
            Government services,
            <br />
            <span>simplified for everyone.</span>
          </h1>

          <p className="description">
            Discover, apply and track Maharashtra government
certificate services from one simple platform.
          </p>

          <div className="hero-buttons">

            <Link to="/services" className="primary-btn">
              Explore Services →
            </Link>

            <Link to="/ai-assistant" className="secondary-btn">
              🤖 Ask AI Assistant
            </Link>

          </div>


          {/* Search */}

          <form className="hero-search" onSubmit={handleSearch}>

            <span>🔎</span>

            <input
              type="text"
              placeholder="What government service do you need?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit">
              Search
            </button>

          </form>

        </div>


        {/* Hero visual */}

        <div className="hero-visual">

          <div className="hero-glow"></div>

          <div className="assistant-card">

            <div className="assistant-card-top">
              <div className="ai-icon">🤖</div>

              <div>
                <span className="online-dot">● Online</span>
                <h2>MahaConnect Assistant</h2>
              </div>
            </div>

            <p>
              Need help finding a government service?
              Our assistant can guide you.
            </p>

            <div className="assistant-suggestions">
              <span>🎓 Education</span>
              <span>📄 Certificates</span>
              <span>🏥 Healthcare</span>
              <span>🚗 Transport</span>
            </div>

            <Link
              to="/ai-assistant"
              className="assistant-link"
            >
              Ask Assistant →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= QUICK ACTIONS ================= */}

      <section className="quick-section">

        <div className="quick-section-header">
          <div>
            <p className="tagline">QUICK ACTIONS</p>
            <h2>What do you want to do?</h2>
          </div>

          <p>
            Access the most important features in one click.
          </p>
        </div>


        <div className="quick-home-grid">

          <Link to="/services" className="quick-home-card">
            <div className="quick-icon blue">🔎</div>
            <div>
              <h3>Find a Service</h3>
              <p>Search government services and schemes.</p>
            </div>
            <span>→</span>
          </Link>


          <Link to="/application" className="quick-home-card">
            <div className="quick-icon green">📄</div>
            <div>
              <h3>Apply Online</h3>
              <p>Submit your government service application.</p>
            </div>
            <span>→</span>
          </Link>


          <Link to="/tracking" className="quick-home-card">
            <div className="quick-icon purple">📊</div>
            <div>
              <h3>Track Application</h3>
              <p>Check your application status anytime.</p>
            </div>
            <span>→</span>
          </Link>


          <Link to="/ai-assistant" className="quick-home-card">
            <div className="quick-icon orange">🤖</div>
            <div>
              <h3>Ask Assistant</h3>
              <p>Get guidance about available services.</p>
            </div>
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="stat-item">
          <strong>6+</strong>
          <span>Service Categories</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <strong>1</strong>
          <span>Unified Platform</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <strong>24/7</strong>
          <span>Digital Access</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <strong>1 ID</strong>
          <span>Application Tracking</span>
        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="services" id="services">

        <div className="section-heading">

          <p>EXPLORE SERVICES</p>

          <h2>
            Everything you need,
            <br />
            in one place.
          </h2>

          <span>
            Find government services without searching through
            multiple websites and platforms.
          </span>

        </div>


        <div className="service-grid">

          {/* Education */}

          <div className="service-card">

            <div className="service-icon">🎓</div>

            <h3>Education</h3>

            <p>
              Scholarships, certificates and student services.
            </p>

            <button disabled className="home-construction-btn">
  🚧 Under Construction
</button>
          </div>


          {/* Certificates */}

          <div className="service-card">

            <div className="service-icon">📄</div>

            <h3>Certificates</h3>

            <p>
              Find important government certificates and
              application services.
            </p>

           <Link to="/certificates">
  <button>Explore →</button>
</Link>
          </div>


          {/* Healthcare */}

          <div className="service-card">

            <div className="service-icon">🏥</div>

            <h3>Healthcare</h3>

            <p>
              Discover public healthcare services and
              government schemes.
            </p>

            <button disabled className="home-construction-btn">
  🚧 Under Construction
</button>

          </div>


          {/* Transport */}

          <div className="service-card">

            <div className="service-icon">🚗</div>

            <h3>Transport</h3>

            <p>
              Access transport-related government services.
            </p>

            <button disabled className="home-construction-btn">
  🚧 Under Construction
</button>

          </div>

        </div>


        <div className="view-all-services">
          <Link to="/services">
            View All Government Services →
          </Link>
        </div>

      </section>


      {/* ================= TRACKING ================= */}

      <section className="tracking-preview">

        <div className="tracking-preview-content">

          <p className="tagline">
            APPLICATION TRACKING
          </p>

          <h2>
            Know exactly where your application stands.
          </h2>

          <p>
            Enter your Application ID and follow your
            government application through every stage.
          </p>

          <Link to="/tracking" className="primary-btn">
            Track Application →
          </Link>

        </div>


        <div className="tracking-visual">

          <div className="tracking-mini-card">

            <div className="tracking-mini-header">
              <span>Application</span>
              <strong>MH48291</strong>
            </div>

            <div className="mini-status active">
              <span>✓</span>
              <div>
                <strong>Submitted</strong>
                <small>Application received</small>
              </div>
            </div>

            <div className="mini-line active-line"></div>

            <div className="mini-status active">
              <span>✓</span>
              <div>
                <strong>Under Review</strong>
                <small>Currently being reviewed</small>
              </div>
            </div>

            <div className="mini-line"></div>

            <div className="mini-status">
              <span>3</span>
              <div>
                <strong>Processing</strong>
                <small>Waiting for approval</small>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY MAHACONNECT ================= */}

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

          <p className="why-description">
            MahaConnect brings service discovery, applications
            and tracking together in one citizen-focused platform.
          </p>

          <Link to="/services" className="primary-btn">
            Explore Platform →
          </Link>

        </div>


        <div className="features">

          <div className="feature-item">
            <div>🔗</div>
            <section>
              <strong>Unified Services</strong>
              <p>
                Access multiple government services through
                one platform.
              </p>
            </section>
          </div>


          <div className="feature-item">
            <div>🤖</div>
            <section>
              <strong>AI Assistance</strong>
              <p>
                Get guidance while finding the right service.
              </p>
            </section>
          </div>


          <div className="feature-item">
            <div>📊</div>
            <section>
              <strong>Application Tracking</strong>
              <p>
                Track applications using a unique Application ID.
              </p>
            </section>
          </div>


          <div className="feature-item">
            <div>🌐</div>
            <section>
              <strong>Multilingual Ready</strong>
              <p>
                Designed with future English, Marathi and
                Hindi support in mind.
              </p>
            </section>
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-main">

          <div>
            <h3>🏛️ MahaConnect</h3>

            <p>
              A unified digital gateway for Maharashtra
              government services.
            </p>
          </div>

          <div className="footer-links">

            <div>
              <strong>Platform</strong>
              <Link to="/services">Services</Link>
              <Link to="/tracking">Tracking</Link>
              <Link to="/dashboard">Dashboard</Link>
            </div>

            <div>
              <strong>Support</strong>
              <Link to="/ai-assistant">AI Assistant</Link>
              <Link to="/login">Login</Link>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <small>
            SIH26129 Prototype • MahaConnect
          </small>

          <small>
            Maharashtra Digital Services
          </small>
        </div>

      </footer>

    </div>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/certificates" element={<Certificates />} />

      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Certificates />} />

      <Route
        path="/ai-assistant"
        element={<AIAssistant />}
      />

      <Route
        path="/tracking"
        element={<Tracking />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/application"
        element={<Application />}
      />

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/services/:service"
        element={<ServiceDetails />}
      />

      <Route
        path="/services"
        element={<Services />}
      />

    </Routes>
  );
}

export default App;