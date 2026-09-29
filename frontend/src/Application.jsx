import { useState } from "react";

function Application() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [reviewing, setReviewing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const handleReview = (e) => {
    e.preventDefault();

    if (!name || !mobile || !email || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setReviewing(true);
  };

  const handleSubmit = () => {
    const newId =
      "MH" + Math.floor(10000 + Math.random() * 90000);

    const newApplication = {
      id: newId,
      service: "Income Certificate",
      applicant: name,
      mobile: mobile,
      email: email,
      address: address,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      status: "Under Review",
    };

    const existingApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    existingApplications.push(newApplication);

    localStorage.setItem(
      "applications",
      JSON.stringify(existingApplications)
    );

    localStorage.setItem("userName", name);

    window.dispatchEvent(
      new Event("applicationsUpdated")
    );

    setApplicationId(newId);
    setSubmitted(true);
  };

  return (
    <div className="application-page">
      <div className="application-card">

        <div className="application-icon">📄</div>

        <h1>Income Certificate</h1>

        {!reviewing && !submitted && (
          <>
            <p>
              Fill in the details below to submit your application.
            </p>

            <form onSubmit={handleReview}>

              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />

              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Address</label>
              <textarea
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows="4"
              />

              <button type="submit">
                Review Application →
              </button>

            </form>
          </>
        )}

        {reviewing && !submitted && (
          <div className="application-review">

            <p>Please review your details before submitting.</p>

            <div className="review-box">

              <div className="review-row">
                <strong>Service</strong>
                <span>Income Certificate</span>
              </div>

              <div className="review-row">
                <strong>Full Name</strong>
                <span>{name}</span>
              </div>

              <div className="review-row">
                <strong>Mobile</strong>
                <span>{mobile}</span>
              </div>

              <div className="review-row">
                <strong>Email</strong>
                <span>{email}</span>
              </div>

              <div className="review-row">
                <strong>Address</strong>
                <span>{address}</span>
              </div>

            </div>

            <div className="review-buttons">

              <button
                type="button"
                className="back-button"
                onClick={() => setReviewing(false)}
              >
                ← Edit Details
              </button>

              <button
                type="button"
                onClick={handleSubmit}
              >
                Confirm & Submit ✓
              </button>

            </div>

          </div>
        )}

        {submitted && (
          <div className="application-success">

            <div>✅</div>

            <h2>Application Submitted!</h2>

            <p>
              Your application has been submitted successfully.
            </p>

            <strong>
              Application ID: {applicationId}
            </strong>

          </div>
        )}

      </div>
    </div>
  );
}

export default Application;