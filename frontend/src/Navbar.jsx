import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

function Navbar() {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo">
        🏛️ <span>Maha</span>Connect
      </Link>

      {/* MENU */}
      <div className="nav-links">

        <Link to="/">
          {t.home}
        </Link>

        <Link to="/services">
          {t.services}
        </Link>

        <Link to="/tracking">
          {t.tracking}
        </Link>

        <Link to="/dashboard">
          {t.dashboard}
        </Link>

        <Link to="/#about">
  {t.about}
</Link>

        {/* LANGUAGE */}
        <select
          className="language-selector"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">
            🇬🇧 English
          </option>

          <option value="mr">
            🇮🇳 मराठी
          </option>

          <option value="hi">
            🇮🇳 हिंदी
          </option>
        </select>

        {/* LOGIN */}
        <Link
          to="/login"
          className="login-button"
        >
          {t.login}
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;