import { useState } from "react";

function Application() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [income, setIncome] = useState("");
  const [incomeSource, setIncomeSource] = useState("");

  const [identityDocument, setIdentityDocument] = useState(null);
  const [addressDocument, setAddressDocument] = useState(null);
  const [incomeDocument, setIncomeDocument] = useState(null);

  const [reviewing, setReviewing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const handleReview = (e) => {
    e.preventDefault();

    if (
      !name ||
      !mobile ||
      !email ||
      !address ||
      !district ||
      !income ||
      !incomeSource
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!identityDocument || !addressDocument || !incomeDocument) {
      alert("Please upload all required documents.");
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
      address: `${address}, ${district}, Maharashtra`,
      income: income,
      incomeSource: incomeSource,
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

        <div className="application-icon">💰</div>

        <p className="application-label">
          MAHARASHTRA GOVERNMENT
        </p>

        <h1>Income Certificate</h1>

        {!reviewing && !submitted && (
          <>
            <p className="application-description">
              Complete the details below to apply for your
              Income Certificate.
            </p>

            <form onSubmit={handleReview}>

              {/* Applicant Details */}

              <h3 className="form-section-title">
                👤 Applicant Details
              </h3>

              <label>Full Name *</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Mobile Number *</label>

              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength="10"
              />

              <label>Email Address *</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Address Details */}

              <h3 className="form-section-title">
                🏠 Address Details
              </h3>

              <label>Address *</label>

              <textarea
                placeholder="Enter your complete address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows="3"
              />

              <label>District *</label>

              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value="">
                  Select your district
                </option>

                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Nashik">Nashik</option>
                <option value="Thane">Thane</option>
                <option value="Kolhapur">Kolhapur</option>
                <option value="Satara">Satara</option>
                <option value="Sangli">Sangli</option>
                <option value="Solapur">Solapur</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Ahmednagar">Ahmednagar</option>
              </select>

              {/* Income Details */}

              <h3 className="form-section-title">
                💰 Income Details
              </h3>

              <label>
                Annual Family Income (₹) *
              </label>

              <input
                type="number"
                placeholder="Enter annual family income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />

              <label>Primary Income Source *</label>

              <select
                value={incomeSource}
                onChange={(e) =>
                  setIncomeSource(e.target.value)
                }
              >
                <option value="">
                  Select income source
                </option>

                <option value="Salary">
                  Salary
                </option>

                <option value="Business">
                  Business
                </option>

                <option value="Agriculture">
                  Agriculture
                </option>

                <option value="Daily Wage">
                  Daily Wage
                </option>

                <option value="Pension">
                  Pension
                </option>

                <option value="Other">
                  Other
                </option>
              </select>

              {/* Documents */}

              <h3 className="form-section-title">
                📄 Required Documents
              </h3>

              <label>Identity Proof *</label>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  setIdentityDocument(e.target.files[0])
                }
              />

              <label>Address Proof *</label>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  setAddressDocument(e.target.files[0])
                }
              />

              <label>Income Supporting Document *</label>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  setIncomeDocument(e.target.files[0])
                }
              />

              <p className="document-note">
                Accepted formats: PDF, JPG, JPEG, PNG
              </p>

              <button type="submit">
                Review Application →
              </button>

            </form>
          </>
        )}

        {/* REVIEW */}

        {reviewing && !submitted && (
          <div className="application-review">

            <p>
              Please review your details before submitting.
            </p>

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
                <span>
                  {address}, {district}, Maharashtra
                </span>
              </div>

              <div className="review-row">
                <strong>Annual Income</strong>
                <span>₹{income}</span>
              </div>

              <div className="review-row">
                <strong>Income Source</strong>
                <span>{incomeSource}</span>
              </div>

              <div className="review-row">
                <strong>Identity Proof</strong>
                <span>
                  {identityDocument?.name}
                </span>
              </div>

              <div className="review-row">
                <strong>Address Proof</strong>
                <span>
                  {addressDocument?.name}
                </span>
              </div>

              <div className="review-row">
                <strong>Income Document</strong>
                <span>
                  {incomeDocument?.name}
                </span>
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

        {/* SUCCESS */}

        {submitted && (
  <div className="application-success">

    <div className="success-icon">✅</div>

    <h2>Application Submitted!</h2>

    <p>
      Your Income Certificate application has been
      submitted successfully.
    </p>

    <div className="application-id-box">
      <span>APPLICATION ID</span>
      <strong>{applicationId}</strong>
    </div>

    <p className="success-note">
      Keep this Application ID to track your application status.
    </p>

    <div className="success-actions">

      <button
        type="button"
        onClick={() =>
          window.location.href = `/tracking?id=${applicationId}`
        }
      >
        📊 Track Application →
      </button>

      <button
        type="button"
        className="secondary-success-btn"
        onClick={() =>
          window.location.href = "/dashboard"
        }
      >
        🏠 Go to Dashboard
      </button>

    </div>

  </div>
)}

      </div>
    </div>
  );
}

export default Application;

