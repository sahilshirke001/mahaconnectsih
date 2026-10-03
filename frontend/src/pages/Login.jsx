import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

function Login() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const text = {
    en: {
      welcome: "Welcome Back",
      description: "Login to your MahaConnect account",
      email: "Email",
      emailPlaceholder: "Enter your email",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      login: "Login →",
      loginError: "Please enter email and password.",
      loginSuccess: "Login successful!",
      note:
        "Don't have an account? Registration will be added soon.",
    },

    mr: {
      welcome: "पुन्हा स्वागत आहे",
      description: "तुमच्या महाकनेक्ट खात्यात लॉगिन करा",
      email: "ईमेल",
      emailPlaceholder: "तुमचा ईमेल टाका",
      password: "पासवर्ड",
      passwordPlaceholder: "तुमचा पासवर्ड टाका",
      login: "लॉगिन →",
      loginError: "कृपया ईमेल आणि पासवर्ड टाका.",
      loginSuccess: "लॉगिन यशस्वी झाले!",
      note:
        "तुमचे खाते नाही? नोंदणीची सुविधा लवकरच उपलब्ध होईल.",
    },

    hi: {
      welcome: "वापसी पर स्वागत है",
      description: "अपने महाकनेक्ट खाते में लॉगिन करें",
      email: "ईमेल",
      emailPlaceholder: "अपना ईमेल दर्ज करें",
      password: "पासवर्ड",
      passwordPlaceholder: "अपना पासवर्ड दर्ज करें",
      login: "लॉगिन →",
      loginError: "कृपया ईमेल और पासवर्ड दर्ज करें।",
      loginSuccess: "लॉगिन सफल हुआ!",
      note:
        "आपका खाता नहीं है? पंजीकरण की सुविधा जल्द ही उपलब्ध होगी।",
    },
  };

  const t = text[language] || text.en;

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert(t.loginError);
      return;
    }

    alert(t.loginSuccess);
    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* LOGO */}
        <div className="login-logo">
          🏛️
        </div>

        {/* TITLE */}
        <h1>{t.welcome}</h1>

        <p>{t.description}</p>

        {/* LOGIN FORM */}
        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <label>{t.email}</label>

          <input
            type="email"
            placeholder={t.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD */}
          <label>{t.password}</label>

          <input
            type="password"
            placeholder={t.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* LOGIN BUTTON */}
          <button type="submit">
            {t.login}
          </button>

        </form>

        {/* REGISTRATION NOTE */}
        <p className="login-note">
          {t.note}
        </p>

      </div>

    </div>
  );
}

export default Login;