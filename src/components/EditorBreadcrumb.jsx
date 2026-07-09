// 에디터 breadcrumb — 헤더 아래 얇은 경로 표시줄. 스크롤 위치의 활성 파일까지 경로로 보여준다(장식).
import { getNavSections } from 'data/contentData';
import FileIcon from 'components/FileIcon';

export default function EditorBreadcrumb({ role, activeId }) {
  const sections = getNavSections(role.id);
  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <div className="editor-crumb" aria-hidden="true">
      <div className="container editor-crumb__inner">
        <span className="editor-crumb__seg">portfolio</span>
        <span className="editor-crumb__sep">›</span>
        <span className="editor-crumb__seg">{role.id}</span>
        <span className="editor-crumb__sep">›</span>
        <span className="editor-crumb__seg editor-crumb__seg--file">
          <FileIcon ext={active.ext} />
          {active.file}
        </span>
      </div>
    </div>
  );
}
