// 터미널 타이핑 효과 — 여러 줄을 순차로 타이핑. SSR·reduced-motion이면 즉시 완성, 완료 시 onDone 호출
import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from 'hooks/useReveal';

export default function Typewriter({
  sequence,
  speed = 40,
  linePause = 260,
  startDelay = 250,
  onDone,
  className = '',
}) {
  const total = sequence.length;
  const reduced = prefersReducedMotion();
  const [done, setDone] = useState(reduced);
  const [activeLine, setActiveLine] = useState(reduced ? total : 0);
  const [typed, setTyped] = useState(() =>
    reduced ? sequence.map((l) => l.text.length) : sequence.map(() => 0)
  );
  const timers = useRef([]);

  useEffect(() => {
    if (reduced) {
      onDone?.();
      return;
    }
    let cancelled = false;
    const push = (fn, ms) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const typeLine = (li) => {
      if (cancelled) return;
      setActiveLine(li);
      const text = sequence[li].text;
      let ci = 0;
      const step = () => {
        if (cancelled) return;
        ci += 1;
        setTyped((prev) => {
          const next = [...prev];
          next[li] = ci;
          return next;
        });
        if (ci < text.length) push(step, speed);
        else if (li + 1 < total) push(() => typeLine(li + 1), linePause);
        else push(() => { setDone(true); onDone?.(); }, linePause);
      };
      push(step, speed);
    };

    push(() => typeLine(0), startDelay);
    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fullText = sequence
    .map((l) => (l.prompt ? `${l.prompt} ` : '') + l.text)
    .join('\n');

  return (
    <div className={`typewriter ${className}`.trim()}>
      <span className="sr-only">{fullText}</span>
      <div aria-hidden="true">
        {sequence.map((line, li) => {
          if (!done && li > activeLine) return null;
          const visible = done || li < activeLine ? line.text.length : typed[li];
          const isActive = !done && li === activeLine;
          return (
            <div
              key={li}
              className={`typewriter__line typewriter__line--${line.kind || 'cmd'}`}
            >
              {line.prompt && <span className="typewriter__prompt">{line.prompt}</span>}
              <span className="typewriter__text">{line.text.slice(0, visible)}</span>
              {isActive && <span className="typewriter__cursor" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
