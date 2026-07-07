// vite-react-ssg 라우트 정의 — 각 경로를 정적 HTML로 프리렌더링
import LandingPage from 'pages/LandingPage';
import AiPage from 'pages/AiPage';
import CloudPage from 'pages/CloudPage';
import FullStackPage from 'pages/FullStackPage';
import DevOpsPage from 'pages/DevOpsPage';

export const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '/ai', element: <AiPage /> },
  { path: '/cloud', element: <CloudPage /> },
  { path: '/full-stack', element: <FullStackPage /> },
  { path: '/devops', element: <DevOpsPage /> },
];
