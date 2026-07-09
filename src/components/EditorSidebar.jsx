// 데스크톱 전용 파일 탐색기 사이드바 — 섹션을 파일 트리로 노출하고 스크롤 위치에 맞춰 활성 파일 표시
import { getNavSections } from 'data/contentData';
import FileIcon from 'components/FileIcon';

// href 앵커라 no-JS에서도 브라우저 기본 스크롤로 동작한다. 활성 표시는 순수 장식.
export default function EditorSidebar({ roleId, activeId }) {
  const sections = getNavSections(roleId);

  return (
    <aside className="editor-sidebar" aria-label="파일 탐색기">
      <div className="editor-sidebar__head">
        <span className="editor-sidebar__head-label">Explorer</span>
      </div>
      <nav className="editor-sidebar__tree" aria-label="섹션 파일">
        <div className="editor-sidebar__folder">
          <span className="editor-sidebar__chevron" aria-hidden="true">⌄</span>
          <span className="editor-sidebar__folder-name">portfolio</span>
        </div>
        <ul className="editor-sidebar__files">
          {sections.map(({ id, file, ext, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`editor-sidebar__file ${
                  activeId === id ? 'is-active' : ''
                }`}
                aria-current={activeId === id ? 'true' : undefined}
              >
                <FileIcon ext={ext} />
                <span className="editor-sidebar__file-name">{file}</span>
                <span className="sr-only"> — {label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
