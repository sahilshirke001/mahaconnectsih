import { useState } from "react";
import { useLanguage } from "./LanguageContext";

function Application() {
  const { t, language } = useLanguage();

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

  // Extra translations needed only on this page
  const text = {
    en: {
      government: "MAHARASHTRA GOVERNMENT",
      description:
        "Complete the details below to apply for your Income Certificate.",

      applicantDetails: "Applicant Details",
      addressDetails: "Address Details",
      incomeDetails: "Income Details",
      requiredDocuments: "Required Documents",

      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",

      mobileNumber: "Mobile Number",
      mobilePlaceholder: "10-digit mobile number",

      emailAddress: "Email Address",
      emailPlaceholder: "Enter your email",

      address: "Address",
      addressPlaceholder: "Enter your complete address",

      district: "District",
      selectDistrict: "Select your district",

      annualIncome: "Annual Family Income",
      incomePlaceholder: "Enter annual family income",

      incomeSource: "Primary Income Source",
      selectIncomeSource: "Select income source",

      salary: "Salary",
      business: "Business",
      agriculture: "Agriculture",
      dailyWage: "Daily Wage",
      pension: "Pension",
      other: "Other",

      identityProof: "Identity Proof",
      addressProof: "Address Proof",
      incomeDocument: "Income Supporting Document",

      acceptedFormats: "Accepted formats: PDF, JPG, JPEG, PNG",
      reviewApplication: "Review Application →",

      reviewMessage: "Please review your details before submitting.",
      service: "Service",
      mobile: "Mobile",
      email: "Email",
      annualIncomeReview: "Annual Income",
      incomeSourceReview: "Income Source",

      editDetails: "← Edit Details",
      confirmSubmit: "Confirm & Submit ✓",

      applicationSubmitted: "Application Submitted!",
      submittedSuccessfully:
        "Your Income Certificate application has been submitted successfully.",
      applicationId: "APPLICATION ID",
      successNote:
        "Keep this Application ID to track your application status.",
      trackApplication: "📊 Track Application →",
      dashboard: "🏠 Go to Dashboard",

      fillRequired: "Please fill in all required fields.",
      validMobile: "Please enter a valid 10-digit mobile number.",
      uploadDocuments: "Please upload all required documents.",

      certificate: "Income Certificate",
      maharashtra: "Maharashtra",
    },

    mr: {
      government: "महाराष्ट्र शासन",
      description:
        "तुमच्या उत्पन्न प्रमाणपत्रासाठी अर्ज करण्यासाठी खालील माहिती भरा.",

      applicantDetails: "अर्जदाराची माहिती",
      addressDetails: "पत्त्याची माहिती",
      incomeDetails: "उत्पन्नाची माहिती",
      requiredDocuments: "आवश्यक कागदपत्रे",

      fullName: "पूर्ण नाव",
      fullNamePlaceholder: "तुमचे पूर्ण नाव टाका",

      mobileNumber: "मोबाईल क्रमांक",
      mobilePlaceholder: "१० अंकी मोबाईल क्रमांक",

      emailAddress: "ईमेल पत्ता",
      emailPlaceholder: "तुमचा ईमेल टाका",

      address: "पत्ता",
      addressPlaceholder: "तुमचा संपूर्ण पत्ता टाका",

      district: "जिल्हा",
      selectDistrict: "तुमचा जिल्हा निवडा",

      annualIncome: "वार्षिक कौटुंबिक उत्पन्न",
      incomePlaceholder: "वार्षिक कौटुंबिक उत्पन्न टाका",

      incomeSource: "उत्पन्नाचा मुख्य स्रोत",
      selectIncomeSource: "उत्पन्नाचा स्रोत निवडा",

      salary: "पगार",
      business: "व्यवसाय",
      agriculture: "शेती",
      dailyWage: "रोजंदारी",
      pension: "पेन्शन",
      other: "इतर",

      identityProof: "ओळखपत्र",
      addressProof: "पत्त्याचा पुरावा",
      incomeDocument: "उत्पन्नाचा पुरावा",

      acceptedFormats: "स्वीकार्य फॉरमॅट: PDF, JPG, JPEG, PNG",
      reviewApplication: "अर्ज तपासा →",

      reviewMessage: "सबमिट करण्यापूर्वी तुमची माहिती तपासा.",
      service: "सेवा",
      mobile: "मोबाईल",
      email: "ईमेल",
      annualIncomeReview: "वार्षिक उत्पन्न",
      incomeSourceReview: "उत्पन्नाचा स्रोत",

      editDetails: "← माहिती बदला",
      confirmSubmit: "पुष्टी करा आणि सबमिट करा ✓",

      applicationSubmitted: "अर्ज यशस्वीरित्या सादर झाला!",
      submittedSuccessfully:
        "तुमचा उत्पन्न प्रमाणपत्राचा अर्ज यशस्वीरित्या सादर झाला आहे.",
      applicationId: "अर्ज क्रमांक",
      successNote:
        "तुमच्या अर्जाची स्थिती पाहण्यासाठी हा अर्ज क्रमांक जतन करा.",
      trackApplication: "📊 अर्जाचा मागोवा घ्या →",
      dashboard: "🏠 डॅशबोर्डवर जा",

      fillRequired: "कृपया सर्व आवश्यक माहिती भरा.",
      validMobile: "कृपया वैध १० अंकी मोबाईल क्रमांक टाका.",
      uploadDocuments: "कृपया सर्व आवश्यक कागदपत्रे अपलोड करा.",

      certificate: "उत्पन्न प्रमाणपत्र",
      maharashtra: "महाराष्ट्र",
    },

    hi: {
      government: "महाराष्ट्र सरकार",
      description:
        "अपने आय प्रमाण पत्र के लिए आवेदन करने हेतु नीचे दी गई जानकारी भरें।",

      applicantDetails: "आवेदक की जानकारी",
      addressDetails: "पते की जानकारी",
      incomeDetails: "आय की जानकारी",
      requiredDocuments: "आवश्यक दस्तावेज़",

      fullName: "पूरा नाम",
      fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",

      mobileNumber: "मोबाइल नंबर",
      mobilePlaceholder: "10 अंकों का मोबाइल नंबर",

      emailAddress: "ईमेल पता",
      emailPlaceholder: "अपना ईमेल दर्ज करें",

      address: "पता",
      addressPlaceholder: "अपना पूरा पता दर्ज करें",

      district: "जिला",
      selectDistrict: "अपना जिला चुनें",

      annualIncome: "वार्षिक पारिवारिक आय",
      incomePlaceholder: "वार्षिक पारिवारिक आय दर्ज करें",

      incomeSource: "आय का मुख्य स्रोत",
      selectIncomeSource: "आय का स्रोत चुनें",

      salary: "वेतन",
      business: "व्यवसाय",
      agriculture: "कृषि",
      dailyWage: "दैनिक मजदूरी",
      pension: "पेंशन",
      other: "अन्य",

      identityProof: "पहचान प्रमाण",
      addressProof: "पते का प्रमाण",
      incomeDocument: "आय का प्रमाण",

      acceptedFormats: "स्वीकृत फॉर्मेट: PDF, JPG, JPEG, PNG",
      reviewApplication: "आवेदन की समीक्षा करें →",

      reviewMessage: "सबमिट करने से पहले अपनी जानकारी जांचें।",
      service: "सेवा",
      mobile: "मोबाइल",
      email: "ईमेल",
      annualIncomeReview: "वार्षिक आय",
      incomeSourceReview: "आय का स्रोत",

      editDetails: "← जानकारी बदलें",
      confirmSubmit: "पुष्टि करें और जमा करें ✓",

      applicationSubmitted: "आवेदन सफलतापूर्वक जमा हुआ!",
      submittedSuccessfully:
        "आपका आय प्रमाण पत्र आवेदन सफलतापूर्वक जमा हो गया है।",
      applicationId: "आवेदन क्रमांक",
      successNote:
        "अपने आवेदन की स्थिति देखने के लिए इस आवेदन क्रमांक को सुरक्षित रखें।",
      trackApplication: "📊 आवेदन ट्रैक करें →",
      dashboard: "🏠 डैशबोर्ड पर जाएं",

      fillRequired: "कृपया सभी आवश्यक जानकारी भरें।",
      validMobile: "कृपया वैध 10 अंकों का मोबाइल नंबर दर्ज करें।",
      uploadDocuments: "कृपया सभी आवश्यक दस्तावेज़ अपलोड करें।",

      certificate: "आय प्रमाण पत्र",
      maharashtra: "महाराष्ट्र",
    },
  };

  const currentText = text[language];

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
      alert(currentText.fillRequired);
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert(currentText.validMobile);
      return;
    }

    if (!identityDocument || !addressDocument || !incomeDocument) {
      alert(currentText.uploadDocuments);
      return;
    }

    setReviewing(true);
  };

  const handleSubmit = () => {
    const newId = "MH" + Math.floor(10000 + Math.random() * 90000);

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

    window.dispatchEvent(new Event("applicationsUpdated"));

    setApplicationId(newId);
    setSubmitted(true);
  };

  return (
    <div className="application-page">
      <div className="application-card">

        <div className="application-icon">💰</div>

        <p className="application-label">
          {currentText.government}
        </p>

        <h1>{t.incomeCertificate}</h1>

        {/* FORM */}
        {!reviewing && !submitted && (
          <>
            <p className="application-description">
              {currentText.description}
            </p>

            <form onSubmit={handleReview}>

              {/* APPLICANT DETAILS */}
              <h3 className="form-section-title">
                👤 {currentText.applicantDetails}
              </h3>

              <label>
                {currentText.fullName} *
              </label>

              <input
                type="text"
                placeholder={currentText.fullNamePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>
                {currentText.mobileNumber} *
              </label>

              <input
                type="tel"
                placeholder={currentText.mobilePlaceholder}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength="10"
              />

              <label>
                {currentText.emailAddress} *
              </label>

              <input
                type="email"
                placeholder={currentText.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* ADDRESS DETAILS */}
              <h3 className="form-section-title">
                🏠 {currentText.addressDetails}
              </h3>

              <label>
                {currentText.address} *
              </label>

              <textarea
                placeholder={currentText.addressPlaceholder}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows="3"
              />

              <label>
                {currentText.district} *
              </label>

              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value="">
                  {currentText.selectDistrict}
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

              {/* INCOME DETAILS */}
              <h3 className="form-section-title">
                💰 {currentText.incomeDetails}
              </h3>

              <label>
                {currentText.annualIncome} (₹) *
              </label>

              <input
                type="number"
                placeholder={currentText.incomePlaceholder}
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />

              <label>
                {currentText.incomeSource} *
              </label>

              <select
                value={incomeSource}
                onChange={(e) => setIncomeSource(e.target.value)}
              >
                <option value="">
                  {currentText.selectIncomeSource}
                </option>

                <option value="Salary">
                  {currentText.salary}
                </option>

                <option value="Business">
                  {currentText.business}
                </option>

                <option value="Agriculture">
                  {currentText.agriculture}
                </option>

                <option value="Daily Wage">
                  {currentText.dailyWage}
                </option>

                <option value="Pension">
                  {currentText.pension}
                </option>

                <option value="Other">
                  {currentText.other}
                </option>
              </select>

              {/* DOCUMENTS */}
              <h3 className="form-section-title">
                📄 {currentText.requiredDocuments}
              </h3>

              <label>
                {currentText.identityProof} *
              </label>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  setIdentityDocument(e.target.files[0])
                }
              />

              <label>
                {currentText.addressProof} *
              </label>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  setAddressDocument(e.target.files[0])
                }
              />

              <label>
                {currentText.incomeDocument} *
              </label>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  setIncomeDocument(e.target.files[0])
                }
              />

              <p className="document-note">
                {currentText.acceptedFormats}
              </p>

              <button type="submit">
                {currentText.reviewApplication}
              </button>

            </form>
          </>
        )}

        {/* REVIEW */}
        {reviewing && !submitted && (
          <div className="application-review">

            <p>
              {currentText.reviewMessage}
            </p>

            <div className="review-box">

              <div className="review-row">
                <strong>{currentText.service}</strong>
                <span>{currentText.certificate}</span>
              </div>

              <div className="review-row">
                <strong>{currentText.fullName}</strong>
                <span>{name}</span>
              </div>

              <div className="review-row">
                <strong>{currentText.mobile}</strong>
                <span>{mobile}</span>
              </div>

              <div className="review-row">
                <strong>{currentText.email}</strong>
                <span>{email}</span>
              </div>

              <div className="review-row">
                <strong>{currentText.address}</strong>
                <span>
                  {address}, {district}, {currentText.maharashtra}
                </span>
              </div>

              <div className="review-row">
                <strong>{currentText.annualIncomeReview}</strong>
                <span>₹{income}</span>
              </div>

              <div className="review-row">
                <strong>{currentText.incomeSourceReview}</strong>
                <span>{incomeSource}</span>
              </div>

              <div className="review-row">
                <strong>{currentText.identityProof}</strong>
                <span>{identityDocument?.name}</span>
              </div>

              <div className="review-row">
                <strong>{currentText.addressProof}</strong>
                <span>{addressDocument?.name}</span>
              </div>

              <div className="review-row">
                <strong>{currentText.incomeDocument}</strong>
                <span>{incomeDocument?.name}</span>
              </div>

            </div>

            <div className="review-buttons">

              <button
                type="button"
                className="back-button"
                onClick={() => setReviewing(false)}
              >
                {currentText.editDetails}
              </button>

              <button
                type="button"
                onClick={handleSubmit}
              >
                {currentText.confirmSubmit}
              </button>

            </div>

          </div>
        )}

        {/* SUCCESS */}
        {submitted && (
          <div className="application-success">

            <div className="success-icon">✅</div>

            <h2>
              {currentText.applicationSubmitted}
            </h2>

            <p>
              {currentText.submittedSuccessfully}
            </p>

            <div className="application-id-box">
              <span>{currentText.applicationId}</span>
              <strong>{applicationId}</strong>
            </div>

            <p className="success-note">
              {currentText.successNote}
            </p>

            <div className="success-actions">

              <button
                type="button"
                onClick={() =>
                  (window.location.href =
                    `/tracking?id=${applicationId}`)
                }
              >
                {currentText.trackApplication}
              </button>

              <button
                type="button"
                className="secondary-success-btn"
                onClick={() =>
                  (window.location.href = "/dashboard")
                }
              >
                {currentText.dashboard}
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Application;