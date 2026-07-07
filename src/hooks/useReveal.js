// 스크롤 진입 시 요소를 등장시키는 훅 — IntersectionObserver 기반, reduced-motion이면 즉시 표시
import { useEffect, useRef, useState } from 'react';

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );
}

// 문서 루트에 data-motion 플래그 설정 — JS가 켜지고 모션 허용일 때만 'on'.
// CSS는 [data-motion='on']에서만 요소를 숨겼다 등장시키므로, no-JS·크롤러·reduced-motion에선 항상 보인다.
export function useMotionFlag() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.motion = prefersReducedMotion() ? 'off' : 'on';
  }, []);
}

// 페이지 내 모든 .reveal 요소를 한 옵저버로 감지해 스크롤 진입 시 .reveal--in을 붙인다.
// className에 'reveal'만 추가하면 되어 컴포넌트별 훅 없이 대량 적용 가능.
export function useRevealAll(deps = []) {
  useEffect(() => {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return;
    const els = [...document.querySelectorAll('.reveal:not(.reveal--in)')];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, shown];
}
