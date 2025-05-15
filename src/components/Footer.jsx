import "./Footer.style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <section className="link-section-container">
        <div className="link-section">
          <img src="github.png" alt="github logo" className="favicon-logo" />
          <a
            href="https://github.com/Cpiggott-lab"
            target="_blank"
            className="link-name"
          >
            Visit my GitHub
          </a>
        </div>
        <div className="link-section">
          <img
            src="linkedin.png"
            alt="LinkedIn Logo"
            className="favicon-logo"
          />
          <a
            href="https://www.linkedin.com/in/christopher-piggott-3bbb54351/"
            target="_blank"
            className="link-name"
          >
            Lets Connect on LinkedIn
          </a>
        </div>
        <div className="link-section">
          <img
            src="profile-user.png"
            alt="About me logo"
            className="favicon-logo"
          />
          <Link to="/about" className="link-name">
            About Me
          </Link>
        </div>
      </section>
      <p>&copy; 2025 Tales & Tomes. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
