import { Link } from 'react-router-dom';
import { personalInfo, landingRoles } from 'data/contentData';
import Header from 'components/Header';
import Footer from 'components/Footer';

const accentMap = {
  ai: 'var(--accent-ai)',
  fullstack: 'var(--accent-fullstack)',
  devops: 'var(--accent-devops)',
  cloud: 'var(--accent-cloud)',
};

export default function LandingPage() {
  return (
    <div className="landing" data-role="landing">
      <Header />

      <main className="landing__main">
        <section className="landing__hero container">
          <p className="landing__greeting">안녕하세요,</p>
          <h1 className="landing__title">
            Software Engineer <span className="landing__name">{personalInfo.nameKo}</span>입니다.
          </h1>
          <p className="landing__subtitle">
            저는 <strong>AI · 풀스택 · 클라우드 · DevOps</strong> 영역에서 문제를 해결합니다.
            <br />
            어떤 영역의 포트폴리오를 살펴보시겠어요?
          </p>
        </section>

        <section className="landing__cards container">
          {landingRoles.map((role) => (
            <Link
              key={role.id}
              to={role.path}
              className={`landing__card landing__card--${role.id}`}
              style={{ '--card-accent': accentMap[role.id] }}
            >
              <span className="landing__card-label">{role.labelKo}</span>
              <span className="landing__card-label-en">{role.label}</span>
              <p className="landing__card-desc">{role.description}</p>
              <span className="landing__card-cta">포트폴리오 보기 →</span>
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
