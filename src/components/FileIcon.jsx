// 확장자 색을 입힌 파일 아이콘 — 헤더 탭·사이드바·breadcrumb에서 공용으로 사용
import { extColors } from 'data/contentData';

export default function FileIcon({ ext, className = '' }) {
  const color = extColors[ext] ?? 'var(--text-secondary)';
  return (
    <svg
      className={`file-icon ${className}`}
      width="14"
      height="14"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={color}
        d="M9.5 1H3.75A1.75 1.75 0 0 0 2 2.75v10.5C2 14.216 2.784 15 3.75 15h8.5A1.75 1.75 0 0 0 14 13.25V5.5L9.5 1Zm0 1.5L12.5 5.5H9.5V2.5Z"
      />
    </svg>
  );
}
