// 클릭 시 값을 클립보드에 복사하고 잠시 "복사됨" 피드백을 보여주는 버튼
import { useState, useRef, useEffect } from 'react';

export default function CopyButton({ value, className = '', children }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // 클립보드 API 미지원 환경 폴백
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      className={`copy-btn ${className}`.trim()}
      onClick={handleClick}
      aria-label={copied ? '복사됨' : `${value} 복사`}
    >
      {children}
      <span className={`copy-btn__feedback ${copied ? 'copy-btn__feedback--show' : ''}`.trim()}>
        복사됨
      </span>
    </button>
  );
}
