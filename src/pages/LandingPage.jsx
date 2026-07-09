import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { personalInfo, landingRoles } from 'data/contentData';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Typewriter from 'components/Typewriter';
import { prefersReducedMotion, useMotionFlag } from 'hooks/useReveal';

const LANDING_TITLE = `${personalInfo.nameKo} | Software Engineer — devdoyeon.site`;
const LANDING_DESC =
  'AI · 풀스택 · 클라우드 · DevOps 포트폴리오. LLM 오케스트레이션·RAG·에이전트를 설계하는 AI 엔지니어 권도연입니다.';

const PROMPT = 'doyeon@portfolio:~$';
const BOOT_SEQUENCE = [
  { prompt: PROMPT, text: 'whoami', kind: 'cmd' },
  { text: '권도연 (Doyeon Kwon) · AI Engineer', kind: 'out' },
  { prompt: PROMPT, text: 'cat summary.txt', kind: 'cmd' },
  {
    text: 'LLM 오케스트레이션·RAG·에이전트를 설계하고 end-to-end로 구현합니다.',
    kind: 'out',
  },
  { prompt: PROMPT, text: 'ls ./roles', kind: 'cmd' },
];

const accentMap = {
  ai: 'var(--accent-ai)',
  fullstack: 'var(--accent-fullstack)',
  devops: 'var(--accent-devops)',
  cloud: 'var(--accent-cloud)',
};

export default function LandingPage() {
  useMotionFlag();
  const [bootDone, setBootDone] = useState(() => prefersReducedMotion());

  return (
    <div className="landing" data-role="landing">
      <Head>
        <title>{LANDING_TITLE}</title>
        <meta name="description" content={LANDING_DESC} />
        <link rel="canonical" href={personalInfo.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="devdoyeon.site" />
        <meta property="og:title" content={LANDING_TITLE} />
        <meta property="og:description" content={LANDING_DESC} />
        <meta property="og:url" content={personalInfo.siteUrl} />
        <meta property="og:image" content={`${personalInfo.siteUrl}/og/og-default.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={LANDING_TITLE} />
        <meta name="twitter:description" content={LANDING_DESC} />
        <meta name="twitter:image" content={`${personalInfo.siteUrl}/og/og-default.png`} />
      </Head>
      <Header />

      <main className="landing__main">
        <h1 className="sr-only">권도연 — AI Engineer 포트폴리오 (AI · 풀스택 · 클라우드 · DevOps)</h1>

        <section className="landing__hero container" aria-hidden="true">
          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dots">
                <i /><i /><i />
              </span>
              <span className="terminal__title">doyeon@portfolio — zsh</span>
            </div>
            <div className="terminal__body">
              <Typewriter
                sequence={BOOT_SEQUENCE}
                speed={26}
                linePause={170}
                startDelay={200}
                onDone={() => setBootDone(true)}
              />
            </div>
          </div>
        </section>

        <section
          className={`landing__cards container ${bootDone ? 'landing__cards--ready' : ''}`}
          aria-label="지원 직무별 포트폴리오"
        >
          {landingRoles.map((role, i) => (
            <Link
              key={role.id}
              to={role.path}
              className={`landing__card landing__card--${role.id}`}
              style={{ '--card-accent': accentMap[role.id], '--card-index': i }}
            >
              <span className="landing__card-dir">./roles/{role.id}</span>
              <span className="landing__card-label">{role.labelKo}</span>
              <span className="landing__card-label-en">{role.label}</span>
              <p className="landing__card-desc">{role.description}</p>
              <span className="landing__card-cta">open →</span>
            </Link>
          ))}
        </section>

        <section className="landing__contact container">
          <p>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            {' · '}
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
