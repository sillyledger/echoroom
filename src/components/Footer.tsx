export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="footer-logo">Echo Room</span>
        <span className="footer-note">
          © {new Date().getFullYear()} Echo Room. One voice, no script.
        </span>
      </div>
      <nav className="footer-links" aria-label="Footer">
        <a href="/episodes">Episodes</a>
        <a href="/about">About</a>
        <a href="/#listen">Listen</a>
      </nav>
    </footer>
  );
}
