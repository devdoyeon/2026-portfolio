import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import LandingPage from 'pages/LandingPage';
import AiPage from 'pages/AiPage';
import CloudPage from 'pages/CloudPage';
import FullStackPage from 'pages/FullStackPage';
import DevOpsPage from 'pages/DevOpsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ai" element={<AiPage />} />
        <Route path="/cloud" element={<CloudPage />} />
        <Route path="/full-stack" element={<FullStackPage />} />
        <Route path="/devops" element={<DevOpsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
