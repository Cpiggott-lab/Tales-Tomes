import "./Footer.style.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        <a
          href="https://github.com/Cpiggott-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Visit my GitHub
        </a>
      </p>
      <p>
        &copy; {new Date().getFullYear()} Tales & Tomes. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
