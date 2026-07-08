import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNavSections } from 'data/contentData';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header({ roleLabel, rolePath, roleId }) {
  const location = useLocation();
  const isPortfolio = rolePath && location.pathname === rolePath;
  const navSections = useMemo(() => getNavSections(roleId), [roleId]);
  const [activeId, setActiveId] = useState(null);

  // 스크롤 위치에 따라 현재 섹션의 nav 링크를 하이라이트(scrollspy)
  useEffect(() => {
    if (!isPortfolio) return;
    const ids = navSections.map(({ id }) => id);

    const onScroll = () => {
      // 헤더 아래(offset)를 지나 올라간 마지막 섹션을 현재로 본다 — 뷰포트 높이와 무관
      const offset = 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
        else break;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isPortfolio, navSections]);

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to={rolePath || '/'} className="header__logo">
          <span className="header__logo-accent">dev</span>doyeon
          {roleLabel && <span className="header__role-badge">{roleLabel}</span>}
        </Link>

        {isPortfolio && (
          <nav className="header__nav" aria-label="섹션 네비게이션">
            {navSections.map(({ id, label }) => {
              const active = activeId === id;
              return (
                <button
                  key={id}
                  type="button"
                  className={`header__nav-link ${active ? 'header__nav-link--active' : ''}`.trim()}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
