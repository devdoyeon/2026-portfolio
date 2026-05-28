import { personalInfo } from 'data/contentData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {personalInfo.nameEn} ·{' '}
          <a href="https://devdoyeon.site">devdoyeon.site</a>
        </p>
        <div className="footer__links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="footer__email">{personalInfo.email}</span>
        </div>
      </div>
    </footer>
  );
}
