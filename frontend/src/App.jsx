import "./App.css";
import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import {
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import Navbar from "./Navbar";

import Certificates from "./pages/Certificates";
import Login from "./pages/Login";
import ServiceDetails from "./pages/ServiceDetails";

import AIAssistant from "./AIAssistant";
import Tracking from "./Tracking";
import Dashboard from "./Dashboard";
import Application from "./Application";


// ======================================================
// HOME PAGE
// ======================================================

function Home() {
  const { language, t } = useLanguage();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // ======================================================
  // HOME PAGE TRANSLATIONS
  // ======================================================

  const homeText = {
    en: {
      badge: "🇮🇳 Maharashtra Digital Services",
      tagline: "ONE PLATFORM • MANY SERVICES",
      title1: "Government services,",
      title2: "simplified for everyone.",
      description:
        "Discover, apply and track Maharashtra government certificate services from one simple platform.",
      explore: "Explore Services →",
      askAI: "🤖 Ask AI Assistant",
      searchPlaceholder: "What government service do you need?",
      search: "Search",

      assistantOnline: "● Online",
      assistantTitle: "MahaConnect Assistant",
      assistantDescription:
        "Need help finding a government service? Our assistant can guide you.",
      education: "🎓 Education",
      certificates: "📄 Certificates",
      healthcare: "🏥 Healthcare",
      transport: "🚗 Transport",
      askAssistant: "Ask Assistant →",

      quickActions: "QUICK ACTIONS",
      whatDo: "What do you want to do?",
      quickDescription:
        "Access the most important features in one click.",

      findService: "Find a Service",
      findServiceDesc:
        "Search government services and schemes.",

      applyOnline: "Apply Online",
      applyOnlineDesc:
        "Submit your government service application.",

      trackApplication: "Track Application",
      trackApplicationDesc:
        "Check your application status anytime.",

      askAssistantTitle: "Ask Assistant",
      askAssistantDesc:
        "Get guidance about available services.",

      serviceCategories: "Service Categories",
      unifiedPlatform: "Unified Platform",
      digitalAccess: "Digital Access",
      applicationTracking: "Application Tracking",

      exploreServicesTitle: "EXPLORE SERVICES",
      everything: "Everything you need,",
      onePlace: "in one place.",
      serviceDescription:
        "Find government services without searching through multiple websites and platforms.",

      educationTitle: "Education",
      educationDescription:
        "Scholarships, certificates and student services.",

      certificatesTitle: "Certificates",
      certificatesDescription:
        "Find important government certificates and application services.",

      healthcareTitle: "Healthcare",
      healthcareDescription:
        "Discover public healthcare services and government schemes.",

      transportTitle: "Transport",
      transportDescription:
        "Access transport-related government services.",

      underConstruction: "🚧 Under Construction",
      viewAll: "View All Government Services →",

      trackingTag: "APPLICATION TRACKING",
      trackingTitle:
        "Know exactly where your application stands.",
      trackingDescription:
        "Enter your Application ID and follow your government application through every stage.",

      application: "Application",
      submitted: "Submitted",
      applicationReceived: "Application received",

      underReview: "Under Review",
      currentlyReviewed: "Currently being reviewed",

      processing: "Processing",
      waitingApproval: "Waiting for approval",

      track: "Track Application →",

      why: "WHY MAHACONNECT?",
      connected: "Government services,",
      connected2: "connected.",

      whyDescription:
        "MahaConnect brings service discovery, applications and tracking together in one citizen-focused platform.",

      explorePlatform: "Explore Platform →",

      unifiedServices: "Unified Services",
      unifiedServicesDesc:
        "Access multiple government services through one platform.",

      aiAssistance: "AI Assistance",
      aiAssistanceDesc:
        "Get guidance while finding the right service.",

      applicationTrackingFeature: "Application Tracking",
      applicationTrackingDesc:
        "Track applications using a unique Application ID.",

      multilingual: "Multilingual Ready",
      multilingualDesc:
        "Designed with future English, Marathi and Hindi support in mind.",

      gateway:
        "A unified digital gateway for Maharashtra government services.",

      platform: "Platform",
      services: "Services",
      tracking: "Tracking",
      dashboard: "Dashboard",

      support: "Support",
      aiAssistant: "AI Assistant",
      login: "Login",

      prototype: "SIH26129 Prototype • MahaConnect",
      digitalServices: "Maharashtra Digital Services",
    },

    // ==================================================
    // MARATHI
    // ==================================================

    mr: {
      badge: "🇮🇳 महाराष्ट्र डिजिटल सेवा",
      tagline: "एक प्लॅटफॉर्म • अनेक सेवा",
      title1: "शासकीय सेवा,",
      title2: "प्रत्येकासाठी सोप्या.",

      description:
        "महाराष्ट्र शासनाच्या प्रमाणपत्र सेवा एका सोप्या प्लॅटफॉर्मवर शोधा, अर्ज करा आणि अर्जाचा मागोवा घ्या.",

      explore: "सेवा पहा →",
      askAI: "🤖 AI सहाय्यकाला विचारा",

      searchPlaceholder:
        "तुम्हाला कोणती शासकीय सेवा हवी आहे?",
      search: "शोधा",

      assistantOnline: "● ऑनलाइन",
      assistantTitle: "MahaConnect सहाय्यक",

      assistantDescription:
        "शासकीय सेवा शोधण्यासाठी मदत हवी आहे? आमचा सहाय्यक तुम्हाला मार्गदर्शन करू शकतो.",

      education: "🎓 शिक्षण",
      certificates: "📄 प्रमाणपत्रे",
      healthcare: "🏥 आरोग्यसेवा",
      transport: "🚗 परिवहन",

      askAssistant: "सहाय्यकाला विचारा →",

      quickActions: "जलद कृती",
      whatDo: "तुम्हाला काय करायचे आहे?",
      quickDescription:
        "महत्त्वाच्या सुविधा एका क्लिकवर मिळवा.",

      findService: "सेवा शोधा",
      findServiceDesc:
        "शासकीय सेवा आणि योजना शोधा.",

      applyOnline: "ऑनलाइन अर्ज करा",
      applyOnlineDesc:
        "तुमचा शासकीय सेवा अर्ज सादर करा.",

      trackApplication: "अर्जाचा मागोवा घ्या",
      trackApplicationDesc:
        "तुमच्या अर्जाची स्थिती कधीही तपासा.",

      askAssistantTitle: "सहाय्यकाला विचारा",
      askAssistantDesc:
        "उपलब्ध सेवांबद्दल मार्गदर्शन मिळवा.",

      serviceCategories: "सेवा श्रेणी",
      unifiedPlatform: "एकत्रित प्लॅटफॉर्म",
      digitalAccess: "डिजिटल प्रवेश",
      applicationTracking: "अर्जाचा मागोवा",

      exploreServicesTitle: "सेवा शोधा",
      everything: "तुम्हाला आवश्यक सर्व काही,",
      onePlace: "एका ठिकाणी.",

      serviceDescription:
        "अनेक वेबसाइट आणि प्लॅटफॉर्म शोधण्याऐवजी शासकीय सेवा सहज शोधा.",

      educationTitle: "शिक्षण",
      educationDescription:
        "शिष्यवृत्ती, प्रमाणपत्रे आणि विद्यार्थी सेवा.",

      certificatesTitle: "प्रमाणपत्रे",
      certificatesDescription:
        "महत्त्वाची शासकीय प्रमाणपत्रे आणि अर्ज सेवा शोधा.",

      healthcareTitle: "आरोग्यसेवा",
      healthcareDescription:
        "सार्वजनिक आरोग्य सेवा आणि शासकीय योजना शोधा.",

      transportTitle: "परिवहन",
      transportDescription:
        "परिवहनाशी संबंधित शासकीय सेवा मिळवा.",

      underConstruction: "🚧 बांधकामाधीन",

      viewAll: "सर्व शासकीय सेवा पहा →",

      trackingTag: "अर्जाचा मागोवा",

      trackingTitle:
        "तुमचा अर्ज सध्या कुठे आहे हे जाणून घ्या.",

      trackingDescription:
        "तुमचा अर्ज क्रमांक टाका आणि प्रत्येक टप्प्यावर अर्जाचा मागोवा घ्या.",

      application: "अर्ज",
      submitted: "सादर",
      applicationReceived: "अर्ज प्राप्त झाला",

      underReview: "तपासणी सुरू",
      currentlyReviewed: "सध्या तपासणी सुरू आहे",

      processing: "प्रक्रियेत",
      waitingApproval: "मंजुरीची प्रतीक्षा",

      track: "अर्जाचा मागोवा घ्या →",

      why: "MAHACONNECT का?",
      connected: "शासकीय सेवा,",
      connected2: "एकत्रित.",

      whyDescription:
        "MahaConnect सेवा शोध, अर्ज आणि अर्जाचा मागोवा एका नागरिक-केंद्रित प्लॅटफॉर्मवर आणते.",

      explorePlatform: "प्लॅटफॉर्म पहा →",

      unifiedServices: "एकत्रित सेवा",
      unifiedServicesDesc:
        "एका प्लॅटफॉर्मद्वारे अनेक शासकीय सेवांचा वापर करा.",

      aiAssistance: "AI सहाय्य",
      aiAssistanceDesc:
        "योग्य सेवा शोधताना मार्गदर्शन मिळवा.",

      applicationTrackingFeature: "अर्जाचा मागोवा",
      applicationTrackingDesc:
        "अद्वितीय अर्ज क्रमांक वापरून अर्जाचा मागोवा घ्या.",

      multilingual: "बहुभाषिक सुविधा",
      multilingualDesc:
        "भविष्यात इंग्रजी, मराठी आणि हिंदी भाषांना समर्थन देण्यासाठी तयार.",

      gateway:
        "महाराष्ट्र शासनाच्या सेवांसाठी एकत्रित डिजिटल प्रवेशद्वार.",

      platform: "प्लॅटफॉर्म",
      services: "सेवा",
      tracking: "मागोवा",
      dashboard: "डॅशबोर्ड",

      support: "मदत",
      aiAssistant: "AI सहाय्यक",
      login: "लॉगिन",

      prototype: "SIH26129 प्रोटोटाइप • MahaConnect",
      digitalServices: "महाराष्ट्र डिजिटल सेवा",
    },

    // ==================================================
    // HINDI
    // ==================================================

    hi: {
      badge: "🇮🇳 महाराष्ट्र डिजिटल सेवाएं",
      tagline: "एक प्लेटफॉर्म • कई सेवाएं",
      title1: "सरकारी सेवाएं,",
      title2: "हर किसी के लिए आसान।",

      description:
        "महाराष्ट्र सरकार की प्रमाणपत्र सेवाओं को एक ही सरल प्लेटफॉर्म से खोजें, आवेदन करें और ट्रैक करें।",

      explore: "सेवाएं देखें →",
      askAI: "🤖 AI सहायक से पूछें",

      searchPlaceholder:
        "आपको कौन सी सरकारी सेवा चाहिए?",
      search: "खोजें",

      assistantOnline: "● ऑनलाइन",
      assistantTitle: "MahaConnect सहायक",

      assistantDescription:
        "सरकारी सेवा खोजने में मदद चाहिए? हमारा सहायक आपका मार्गदर्शन कर सकता है।",

      education: "🎓 शिक्षा",
      certificates: "📄 प्रमाणपत्र",
      healthcare: "🏥 स्वास्थ्य सेवा",
      transport: "🚗 परिवहन",

      askAssistant: "सहायक से पूछें →",

      quickActions: "त्वरित कार्य",
      whatDo: "आप क्या करना चाहते हैं?",
      quickDescription:
        "महत्वपूर्ण सुविधाओं को एक क्लिक में प्राप्त करें।",

      findService: "सेवा खोजें",
      findServiceDesc:
        "सरकारी सेवाएं और योजनाएं खोजें।",

      applyOnline: "ऑनलाइन आवेदन करें",
      applyOnlineDesc:
        "अपना सरकारी सेवा आवेदन जमा करें।",

      trackApplication: "आवेदन ट्रैक करें",
      trackApplicationDesc:
        "अपने आवेदन की स्थिति कभी भी जांचें।",

      askAssistantTitle: "सहायक से पूछें",
      askAssistantDesc:
        "उपलब्ध सेवाओं के बारे में मार्गदर्शन प्राप्त करें।",

      serviceCategories: "सेवा श्रेणियां",
      unifiedPlatform: "एकीकृत प्लेटफॉर्म",
      digitalAccess: "डिजिटल पहुंच",
      applicationTracking: "आवेदन ट्रैकिंग",

      exploreServicesTitle: "सेवाएं देखें",
      everything: "आपको जो कुछ चाहिए,",
      onePlace: "एक ही जगह पर।",

      serviceDescription:
        "कई वेबसाइट और प्लेटफॉर्म खोजने के बजाय सरकारी सेवाएं आसानी से खोजें।",

      educationTitle: "शिक्षा",
      educationDescription:
        "छात्रवृत्ति, प्रमाणपत्र और छात्र सेवाएं।",

      certificatesTitle: "प्रमाणपत्र",
      certificatesDescription:
        "महत्वपूर्ण सरकारी प्रमाणपत्र और आवेदन सेवाएं खोजें।",

      healthcareTitle: "स्वास्थ्य सेवा",
      healthcareDescription:
        "सार्वजनिक स्वास्थ्य सेवाएं और सरकारी योजनाएं खोजें।",

      transportTitle: "परिवहन",
      transportDescription:
        "परिवहन से संबंधित सरकारी सेवाएं प्राप्त करें।",

      underConstruction: "🚧 निर्माणाधीन",

      viewAll: "सभी सरकारी सेवाएं देखें →",

      trackingTag: "आवेदन ट्रैकिंग",

      trackingTitle:
        "जानें कि आपका आवेदन किस स्थिति में है।",

      trackingDescription:
        "अपना आवेदन क्रमांक दर्ज करें और हर चरण में अपने आवेदन को ट्रैक करें।",

      application: "आवेदन",
      submitted: "जमा किया गया",
      applicationReceived: "आवेदन प्राप्त हुआ",

      underReview: "जांच के अधीन",
      currentlyReviewed:
        "वर्तमान में जांच की जा रही है",

      processing: "प्रक्रिया में",
      waitingApproval: "मंजूरी की प्रतीक्षा",

      track: "आवेदन ट्रैक करें →",

      why: "MAHACONNECT क्यों?",
      connected: "सरकारी सेवाएं,",
      connected2: "एक साथ.",

      whyDescription:
        "MahaConnect सेवा खोज, आवेदन और ट्रैकिंग को एक नागरिक-केंद्रित प्लेटफॉर्म पर लाता है।",

      explorePlatform: "प्लेटफॉर्म देखें →",

      unifiedServices: "एकीकृत सेवाएं",
      unifiedServicesDesc:
        "एक ही प्लेटफॉर्म के माध्यम से कई सरकारी सेवाओं का उपयोग करें।",

      aiAssistance: "AI सहायता",
      aiAssistanceDesc:
        "सही सेवा खोजने में मार्गदर्शन प्राप्त करें।",

      applicationTrackingFeature: "आवेदन ट्रैकिंग",
      applicationTrackingDesc:
        "एक अद्वितीय आवेदन क्रमांक का उपयोग करके आवेदन ट्रैक करें।",

      multilingual: "बहुभाषी सुविधा",
      multilingualDesc:
        "भविष्य में अंग्रेजी, मराठी और हिंदी समर्थन को ध्यान में रखकर बनाया गया है।",

      gateway:
        "महाराष्ट्र सरकार की सेवाओं के लिए एकीकृत डिजिटल प्रवेशद्वार।",

      platform: "प्लेटफॉर्म",
      services: "सेवाएं",
      tracking: "ट्रैकिंग",
      dashboard: "डैशबोर्ड",

      support: "सहायता",
      aiAssistant: "AI सहायक",
      login: "लॉगिन",

      prototype: "SIH26129 प्रोटोटाइप • MahaConnect",
      digitalServices: "महाराष्ट्र डिजिटल सेवाएं",
    },
  };

  const h = homeText[language] || homeText.en;

  // ======================================================
  // SEARCH
  // ======================================================

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(
        `/services?search=${encodeURIComponent(
          search.trim()
        )}`
      );
    } else {
      navigate("/services");
    }
  };

  return (
    <div className="app">

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            {h.badge}
          </div>

          <p className="tagline">
            {h.tagline}
          </p>

          <h1>
            {h.title1}
            <br />
            <span>{h.title2}</span>
          </h1>

          <p className="description">
            {h.description}
          </p>

          <div className="hero-buttons">

            <Link
              to="/services"
              className="primary-btn"
            >
              {h.explore}
            </Link>

            <Link
              to="/ai-assistant"
              className="secondary-btn"
            >
              {h.askAI}
            </Link>

          </div>

          {/* SEARCH */}

          <form
            className="hero-search"
            onSubmit={handleSearch}
          >

            <span>🔎</span>

            <input
              type="text"
              placeholder={h.searchPlaceholder}
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            <button type="submit">
              {h.search}
            </button>

          </form>

        </div>

        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="hero-glow"></div>

          <div className="assistant-card">

            <div className="assistant-card-top">

              <div className="ai-icon">
                🤖
              </div>

              <div>

                <span className="online-dot">
                  {h.assistantOnline}
                </span>

                <h2>
                  {h.assistantTitle}
                </h2>

              </div>

            </div>

            <p>
              {h.assistantDescription}
            </p>

            <div className="assistant-suggestions">

              <span>{h.education}</span>
              <span>{h.certificates}</span>
              <span>{h.healthcare}</span>
              <span>{h.transport}</span>

            </div>

            <Link
              to="/ai-assistant"
              className="assistant-link"
            >
              {h.askAssistant}
            </Link>

          </div>

        </div>

      </section>


      {/* ================= QUICK ACTIONS ================= */}

      <section className="quick-section">

        <div className="quick-section-header">

          <div>

            <p className="tagline">
              {h.quickActions}
            </p>

            <h2>
              {h.whatDo}
            </h2>

          </div>

          <p>
            {h.quickDescription}
          </p>

        </div>


        <div className="quick-home-grid">

          <Link
            to="/services"
            className="quick-home-card"
          >

            <div className="quick-icon blue">
              🔎
            </div>

            <div>

              <h3>
                {h.findService}
              </h3>

              <p>
                {h.findServiceDesc}
              </p>

            </div>

            <span>→</span>

          </Link>


          <Link
            to="/application"
            className="quick-home-card"
          >

            <div className="quick-icon green">
              📄
            </div>

            <div>

              <h3>
                {h.applyOnline}
              </h3>

              <p>
                {h.applyOnlineDesc}
              </p>

            </div>

            <span>→</span>

          </Link>


          <Link
            to="/tracking"
            className="quick-home-card"
          >

            <div className="quick-icon purple">
              📊
            </div>

            <div>

              <h3>
                {h.trackApplication}
              </h3>

              <p>
                {h.trackApplicationDesc}
              </p>

            </div>

            <span>→</span>

          </Link>


          <Link
            to="/ai-assistant"
            className="quick-home-card"
          >

            <div className="quick-icon orange">
              🤖
            </div>

            <div>

              <h3>
                {h.askAssistantTitle}
              </h3>

              <p>
                {h.askAssistantDesc}
              </p>

            </div>

            <span>→</span>

          </Link>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="stat-item">
          <strong>6+</strong>
          <span>{h.serviceCategories}</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <strong>1</strong>
          <span>{h.unifiedPlatform}</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <strong>24/7</strong>
          <span>{h.digitalAccess}</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <strong>1 ID</strong>
          <span>{h.applicationTracking}</span>
        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        className="services"
        id="services"
      >

        <div className="section-heading">

          <p>
            {h.exploreServicesTitle}
          </p>

          <h2>
            {h.everything}
            <br />
            {h.onePlace}
          </h2>

          <span>
            {h.serviceDescription}
          </span>

        </div>


        <div className="service-grid">

          {/* EDUCATION */}

          <div className="service-card">

            <div className="service-icon">
              🎓
            </div>

            <h3>
              {h.educationTitle}
            </h3>

            <p>
              {h.educationDescription}
            </p>

            <button
              disabled
              className="home-construction-btn"
            >
              {h.underConstruction}
            </button>

          </div>


          {/* CERTIFICATES */}

          <div className="service-card">

            <div className="service-icon">
              📄
            </div>

            <h3>
              {h.certificatesTitle}
            </h3>

            <p>
              {h.certificatesDescription}
            </p>

            <Link to="/certificates">
              <button>
                {h.explore}
              </button>
            </Link>

          </div>


          {/* HEALTHCARE */}

          <div className="service-card">

            <div className="service-icon">
              🏥
            </div>

            <h3>
              {h.healthcareTitle}
            </h3>

            <p>
              {h.healthcareDescription}
            </p>

            <button
              disabled
              className="home-construction-btn"
            >
              {h.underConstruction}
            </button>

          </div>


          {/* TRANSPORT */}

          <div className="service-card">

            <div className="service-icon">
              🚗
            </div>

            <h3>
              {h.transportTitle}
            </h3>

            <p>
              {h.transportDescription}
            </p>

            <button
              disabled
              className="home-construction-btn"
            >
              {h.underConstruction}
            </button>

          </div>

        </div>


        <div className="view-all-services">

          <Link to="/services">
            {h.viewAll}
          </Link>

        </div>

      </section>


      {/* ================= TRACKING ================= */}

      <section className="tracking-preview">

        <div className="tracking-preview-content">

          <p className="tagline">
            {h.trackingTag}
          </p>

          <h2>
            {h.trackingTitle}
          </h2>

          <p>
            {h.trackingDescription}
          </p>

          <Link
            to="/tracking"
            className="primary-btn"
          >
            {h.track}
          </Link>

        </div>


        <div className="tracking-visual">

          <div className="tracking-mini-card">

            <div className="tracking-mini-header">

              <span>
                {h.application}
              </span>

              <strong>
                MH48291
              </strong>

            </div>


            <div className="mini-status active">

              <span>✓</span>

              <div>

                <strong>
                  {h.submitted}
                </strong>

                <small>
                  {h.applicationReceived}
                </small>

              </div>

            </div>


            <div className="mini-line active-line"></div>


            <div className="mini-status active">

              <span>✓</span>

              <div>

                <strong>
                  {h.underReview}
                </strong>

                <small>
                  {h.currentlyReviewed}
                </small>

              </div>

            </div>


            <div className="mini-line"></div>


            <div className="mini-status">

              <span>3</span>

              <div>

                <strong>
                  {h.processing}
                </strong>

                <small>
                  {h.waitingApproval}
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY MAHACONNECT ================= */}

      <section
        className="why-section"
        id="about"
      >

        <div>

          <p className="tagline">
            {h.why}
          </p>

          <h2>
            {h.connected}
            <br />
            {h.connected2}
          </h2>

          <p className="why-description">
            {h.whyDescription}
          </p>

          <Link
            to="/services"
            className="primary-btn"
          >
            {h.explorePlatform}
          </Link>

        </div>


        <div className="features">

          <div className="feature-item">

            <div>🔗</div>

            <section>

              <strong>
                {h.unifiedServices}
              </strong>

              <p>
                {h.unifiedServicesDesc}
              </p>

            </section>

          </div>


          <div className="feature-item">

            <div>🤖</div>

            <section>

              <strong>
                {h.aiAssistance}
              </strong>

              <p>
                {h.aiAssistanceDesc}
              </p>

            </section>

          </div>


          <div className="feature-item">

            <div>📊</div>

            <section>

              <strong>
                {h.applicationTrackingFeature}
              </strong>

              <p>
                {h.applicationTrackingDesc}
              </p>

            </section>

          </div>


          <div className="feature-item">

            <div>🌐</div>

            <section>

              <strong>
                {h.multilingual}
              </strong>

              <p>
                {h.multilingualDesc}
              </p>

            </section>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-main">

          <div>

            <h3>
              🏛️ MahaConnect
            </h3>

            <p>
              {h.gateway}
            </p>

          </div>


          <div className="footer-links">

            <div>

              <strong>
                {h.platform}
              </strong>

              <Link to="/services">
                {h.services}
              </Link>

              <Link to="/tracking">
                {h.tracking}
              </Link>

              <Link to="/dashboard">
                {h.dashboard}
              </Link>

            </div>


            <div>

              <strong>
                {h.support}
              </strong>

              <Link to="/ai-assistant">
                {h.aiAssistant}
              </Link>

              <Link to="/login">
                {h.login}
              </Link>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <small>
            {h.prototype}
          </small>

          <small>
            {h.digitalServices}
          </small>

        </div>

      </footer>

    </div>
  );
}
function ScrollToHash() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  return null;
}


// ======================================================
// APP ROUTES + GLOBAL NAVBAR
// ======================================================

function App() {
  return (
    <>
      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* ALL PAGES */}
      <Routes>

        <Route
          path="/certificates"
          element={<Certificates />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/services"
          element={<Certificates />}
        />

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

      </Routes>
    </>
  );
}

export default App;