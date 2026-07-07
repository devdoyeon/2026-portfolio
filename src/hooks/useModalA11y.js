// 모달 접근성 훅 — body 스크롤 잠금, Escape 닫기, Tab 포커스 트랩, 닫힌 뒤 트리거로 포커스 복귀
import { useEffect, useRef } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function useModalA11y(onClose) {
  const panelRef = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;
    const prevActive = document.activeElement;
    document.body.style.overflow = 'hidden';

    const focusables = () =>
      panel ? [...panel.querySelectorAll(FOCUSABLE)] : [];

    // 열릴 때 첫 포커스 가능 요소(보통 닫기 버튼)로 이동
    const first = focusables()[0];
    (first ?? panel)?.focus();

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const items = focusables();
      if (!items.length) return;

      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
      // 모달을 연 트리거로 포커스 되돌리기
      if (prevActive && typeof prevActive.focus === 'function') prevActive.focus();
    };
  }, [onClose]);

  return panelRef;
}
