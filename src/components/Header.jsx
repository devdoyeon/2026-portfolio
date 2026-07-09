import { Link, useLocation } from 'react-router-dom';
import { getNavSections } from 'data/contentData';
import FileIcon from 'components/FileIcon';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header({ roleLabel, rolePath, roleId, activeId }) {
  const location = useLocation();
  const isPortfolio = rolePath && location.pathname === rolePath;
  const navSections = isPortfolio ? getNavSections(roleId) : [];

  return (
    <header className={`header ${isPortfolio ? 'header--editor' : ''}`.trim()}>
      <div className="header__inner container">
        <Link to={rolePath || '/'} className="header__logo">
          <span className="header__logo-accent">dev</span>doyeon
          {roleLabel && <span className="header__role-badge">{roleLabel}</span>}
        </Link>

        {isPortfolio && (
          <nav className="header__tabs" aria-label="섹션 네비게이션">
            {navSections.map(({ id, file, ext, label }) => {
              const active = activeId === id;
              return (
                <button
                  key={id}
                  type="button"
                  className={`header__tab ${active ? 'is-active' : ''}`.trim()}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => scrollToSection(id)}
                >
                  <FileIcon ext={ext} />
                  <span className="header__tab-name">{file}</span>
                  <span className="sr-only"> — {label}</span>
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
