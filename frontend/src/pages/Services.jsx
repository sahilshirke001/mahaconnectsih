import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    {
      icon: "🎓",
      id: "education",
      title: "Education",
      description:
        "Scholarships, certificates and student support services.",
      category: "Education",
      popular: true,
      tags: ["scholarship", "student", "certificate", "college"],
    },
    {
      icon: "🏥",
      id: "healthcare",
      title: "Healthcare",
      description:
        "Government healthcare schemes and public health services.",
      category: "Healthcare",
      popular: true,
      tags: ["health", "hospital", "scheme", "medical"],
    },
    {
      icon: "📄",
      id: "certificates",
      title: "Certificates",
      description:
        "Apply for important government certificates and documents.",
      category: "Certificates",
      popular: true,
      tags: ["income", "caste", "domicile", "birth"],
    },
    {
      icon: "🚗",
      id: "transport",
      title: "Transport",
      description:
        "Access driving licence, vehicle and transport services.",
      category: "Transport",
      popular: true,
      tags: ["driving", "licence", "vehicle", "rto"],
    },
    {
      icon: "🏠",
      id: "housing",
      title: "Housing",
      description:
        "Explore government housing schemes and assistance programs.",
      category: "Housing",
      popular: false,
      tags: ["home", "housing", "house", "scheme"],
    },
    {
      icon: "💼",
      id: "employment",
      title: "Employment",
      description:
        "Find employment schemes and skill development opportunities.",
      category: "Employment",
      popular: false,
      tags: ["job", "employment", "skill", "training"],
    },
  ];

  const categories = [
    "All",
    "Education",
    "Healthcare",
    "Certificates",
    "Transport",
    "Housing",
    "Employment",
  ];

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Read search text coming from homepage
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchFromUrl = params.get("search");

    if (searchFromUrl) {
      setSearch(searchFromUrl);
    }
  }, [location.search]);

  const filteredServices = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "All" ||
        service.category === activeCategory;

      const matchesSearch =
        !searchText ||
        service.title.toLowerCase().includes(searchText) ||
        service.description.toLowerCase().includes(searchText) ||
        service.category.toLowerCase().includes(searchText) ||
        service.tags.some((tag) =>
          tag.toLowerCase().includes(searchText)
        );

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const viewService = (service) => {
    navigate(`/services/${service.id}`);
  };

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
    navigate("/services");
  };

  return (
    <div className="services-page">

      {/* ================= HEADER ================= */}

      <div className="services-header">

        <div className="services-label">
          MAHARASHTRA GOVERNMENT
        </div>

        <h1>
          Find the service
          <br />
          <span>you need.</span>
        </h1>

        <p className="services-subtitle">
          Discover Maharashtra government services,
          schemes and citizen support from one platform.
        </p>

        {/* SEARCH */}

        <div className="service-search">
          <span>🔎</span>

          <input
            type="text"
            placeholder="Search services, schemes or certificates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
              type="button"
            >
              ✕
            </button>
          )}
        </div>

      </div>


      {/* ================= QUICK INFO ================= */}

      <div className="services-info-bar">

        <div>
          <strong>🔎 Easy Discovery</strong>
          <span>Find services quickly</span>
        </div>

        <div>
          <strong>📄 Simple Applications</strong>
          <span>Apply through one platform</span>
        </div>

        <div>
          <strong>📊 Application Tracking</strong>
          <span>Track with your Application ID</span>
        </div>

      </div>


      {/* ================= CATEGORY FILTER ================= */}

      <div className="category-section">

        <div>
          <p className="category-label">
            BROWSE BY CATEGORY
          </p>

          <h2>Government Services</h2>
        </div>

        <div className="category-buttons">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "active-category"
                  : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category === "All" ? "All Services" : category}
            </button>
          ))}

        </div>

      </div>


      {/* ================= RESULTS ================= */}

      <div className="services-results-header">

        <div>
          <h2>
            {activeCategory === "All"
              ? "Available Services"
              : `${activeCategory} Services`}
          </h2>

          <p>
            {filteredServices.length} service
            {filteredServices.length !== 1 ? "s" : ""} available
          </p>
        </div>

        {(search || activeCategory !== "All") && (
          <button
            className="clear-filters"
            onClick={clearFilters}
          >
            Clear filters ✕
          </button>
        )}

      </div>


      {/* ================= SERVICE CARDS ================= */}

      <div className="service-list">

        {filteredServices.length > 0 ? (

          filteredServices.map((service) => (

            <div
              className="service-card modern-service-card"
              key={service.id}
            >

              {/* Popular badge */}

              {service.popular && (
                <div className="popular-badge">
                  ⭐ Popular
                </div>
              )}


              <div className="service-card-top">

                <div className="service-icon">
                  {service.icon}
                </div>

                <span className="service-category">
                  {service.category}
                </span>

              </div>


              <h2>{service.title}</h2>

              <p>{service.description}</p>


              {/* Tags */}

              <div className="service-tags">

                {service.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>


              <button
                className="service-button"
                onClick={() => viewService(service)}
              >
                Explore Service
                <span>→</span>
              </button>

            </div>

          ))

        ) : (

          <div className="no-results modern-no-results">

            <div className="no-results-icon">
              🔎
            </div>

            <h2>No services found</h2>

            <p>
              We couldn't find a service matching
              "{search}".
            </p>

            <button onClick={clearFilters}>
              View All Services
            </button>

          </div>

        )}

      </div>


      {/* ================= BOTTOM CTA ================= */}

      <section className="services-cta">

        <div>

          <span>🤖 NEED HELP?</span>

          <h2>
            Not sure which service you need?
          </h2>

          <p>
            Ask MahaConnect Assistant and get guidance
            about available government services.
          </p>

        </div>

        <button
          onClick={() => navigate("/ai-assistant")}
        >
          Ask AI Assistant →
        </button>

      </section>

    </div>
  );
}

export default Services;