import "./Footer.style.css";
import { Link } from "react-router-dom";
import githubLogo from "../../Assets/github.png";
import linkedinLogo from "../../Assets/linkedin.png";
function Footer() {
  return (
    <footer className="footer">
      <section className="link-section-container">
        <div className="link-section">
          <img src={githubLogo} alt="github logo" className="favicon-logo" />
          <Link
            href="https://github.com/Cpiggott-lab"
            target="_blank"
            className="link-name"
          >
            Visit my GitHub
          </Link>
        </div>
        <div className="link-section">
          <img
            src={linkedinLogo}
            alt="LinkedIn Logo"
            className="favicon-logo"
          />
          <Link
            href="https://www.linkedin.com/in/christopher-piggott-3bbb54351/"
            target="_blank"
            className="link-name"
          >
            Lets Connect on LinkedIn
          </Link>
        </div>
      </section>
      <p>&copy; 2025 Tales & Tomes. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
