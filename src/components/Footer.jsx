import { personalInfo } from 'data/contentData';
import CopyButton from 'components/CopyButton';

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
          <a href="/resume.pdf" download>
            이력서
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${personalInfo.email}`} className="footer__email-link">
            {personalInfo.email}
          </a>
          <CopyButton value={personalInfo.email} className="footer__copy">
            복사
          </CopyButton>
        </div>
      </div>
    </footer>
  );
}
