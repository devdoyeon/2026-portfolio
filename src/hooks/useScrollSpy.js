// 현재 화면에 보이는 섹션 id를 추적하는 훅 — 헤더 탭·사이드바·breadcrumb·상태바의 활성 표시에 공용으로 쓰인다.
import { useEffect, useState } from 'react';

// ids: 감시할 섹션 id 배열(문서 순서). 헤더 아래 오프셋을 지나 올라간 마지막 섹션을 현재로 본다 — 뷰포트 높이와 무관하게 정확.
export function useScrollSpy(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    if (!ids.length) return;

    const onScroll = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|')]);

  return activeId;
}
