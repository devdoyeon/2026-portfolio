// 스크롤 진입 시 페이드·업으로 등장하는 래퍼 — delay로 순차 등장(stagger) 지원
import { useReveal } from 'hooks/useReveal';

export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  children,
  ...rest
}) {
  const [ref, shown] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'reveal--in' : ''} ${className}`.trim()}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
