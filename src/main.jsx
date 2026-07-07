// vite-react-ssg 엔트리 — 라우트를 정적 프리렌더링하고 브라우저에서 하이드레이트
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './style/fonts.scss';
import './App.scss';

export const createRoot = ViteReactSSG({ routes });
