// 에디터 하단 상태바 — 브랜치(직무별)·Ln/Col(스크롤 기반)·언어·인코딩 표시. 순수 장식(aria-hidden).
import { useEffect, useState } from 'react';
import { getNavSections } from 'data/contentData';

export default function EditorStatusBar({ role, activeId }) {
  const sections = getNavSections(role.id);
  const active = sections.find((s) => s.id === activeId) ?? sections[0];
  const [pos, setPos] = useState({ ln: 1, col: 1 });

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      // 스크롤 진행률을 가짜 커서 위치(Ln/Col)로 환산 — IDE 감성용 장식
      const ln = Math.max(1, Math.round(ratio * 420));
      const col = Math.max(1, Math.round((window.scrollY % 80) / 2) + 1);
      setPos({ ln, col });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <footer className="editor-status" aria-hidden="true">
      <div className="editor-status__group editor-status__group--left">
        <span className="editor-status__item editor-status__branch">
          <span className="editor-status__ico" aria-hidden="true">⎇</span>
          {role.branch}
        </span>
        <span className="editor-status__item editor-status__sync">↻ 0 ↑ 0</span>
      </div>
      <div className="editor-status__group editor-status__group--right">
        <span className="editor-status__item">Ln {pos.ln}, Col {pos.col}</span>
        <span className="editor-status__item editor-status__opt">Spaces: 2</span>
        <span className="editor-status__item editor-status__opt">UTF-8</span>
        <span className="editor-status__item">{active.lang}</span>
        <span className="editor-status__item editor-status__role">
          <span className="editor-status__dot" aria-hidden="true" />
          {role.label}
        </span>
      </div>
    </footer>
  );
}
