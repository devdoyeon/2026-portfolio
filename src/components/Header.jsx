import { Link, useLocation } from 'react-router-dom';
import { navSections } from 'data/contentData';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header({ roleLabel, rolePath }) {
  const location = useLocation();
  const isPortfolio = rolePath && location.pathname === rolePath;

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to={rolePath || '/'} className="header__logo">
          <span className="header__logo-accent">dev</span>doyeon
          {roleLabel && <span className="header__role-badge">{roleLabel}</span>}
        </Link>

        {isPortfolio && (
          <nav className="header__nav" aria-label="섹션 네비게이션">
            {navSections.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className="header__nav-link"
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </nav>
        )}

        
      </div>
    </header>
  );
}
