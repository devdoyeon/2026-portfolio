import { useState, useEffect } from 'react';
import { personalInfo } from 'data/contentData';
import { HashTagList } from 'components/HashTag';
import CopyButton from 'components/CopyButton';

const PROFILE_IMAGE = '/images/profile.jpg';

export default function AboutMe({ role }) {
  const [hasProfilePhoto, setHasProfilePhoto] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasProfilePhoto(true);
    img.onerror = () => setHasProfilePhoto(false);
    img.src = PROFILE_IMAGE;
  }, []);
  const headlineLines = role.headline.split('\n');

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section__title">About Me</h2>

        <div className="about__top">
          <div className="about__photo-wrap">
            {hasProfilePhoto ? (
              <img
                src={PROFILE_IMAGE}
                alt={`${personalInfo.nameKo} 프로필 사진`}
                className="about__photo"
              />
            ) : (
              <div className="about__photo-placeholder" aria-label="프로필 사진 영역">
                <span className="about__photo-icon" aria-hidden="true">
                  👩🏻‍💻
                </span>
                <span className="about__photo-hint">증명사진 예정</span>
              </div>
            )}
          </div>

          <div className="about__info">
            <h1 className="about__name-ko">{personalInfo.nameKo}</h1>
            <p className="about__name-en">{personalInfo.nameEn}</p>

            <h3 className="about__contact-title">Contact</h3>
            <ul className="about__contact-list">
              <li>
                <strong>Email</strong>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                <CopyButton value={personalInfo.email} className="about__contact-copy">
                  복사
                </CopyButton>
              </li>
              <li>
                <strong>Phone</strong>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </li>
              <li>
                <strong>Address</strong> {personalInfo.address}
              </li>
              <li>
                <strong>Birth</strong> {personalInfo.birth}
              </li>
            </ul>
          </div>

          <div className="about__aside">
            <div className="about__links">
              <a
                href="/resume.pdf"
                download
                className="about__link-card about__link-card--primary"
              >
                <span className="about__link-icon" aria-hidden="true">
                  📄
                </span>
                <span className="about__link-text">
                  <strong>이력서 다운로드</strong>
                  <span className="about__link-sub">PDF</span>
                </span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="about__link-card"
              >
                <span className="about__link-icon" aria-hidden="true">
                  👩🏻‍💻
                </span>
                <span className="about__link-text">
                  <strong>GitHub</strong>
                  <span className="about__link-sub">{personalInfo.github.replace('https://', '')}</span>
                </span>
              </a>
              <a
                href={personalInfo.blog}
                target="_blank"
                rel="noreferrer"
                className="about__link-card"
              >
                <span className="about__link-icon" aria-hidden="true">
                  📝
                </span>
                <span className="about__link-text">
                  <strong>Engineering Blog</strong>
                  <span className="about__link-sub">Notion</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="about__motto">
          <p className="about__prompt">
            <span className="about__prompt-sign">$</span> ./introduce --role {role.id}
          </p>

          <blockquote className="about__quote">
            {role.quote ?? personalInfo.quote}
          </blockquote>

          <div className="about__motto-body">
            <p className="about__headline">
              {headlineLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headlineLines.length - 1 && <br />}
                </span>
              ))}
              <span className="about__caret" aria-hidden="true" />
            </p>

            <p className="about__tagline">{role.tagline}</p>

            <HashTagList
              tags={role.hashtags ?? role.skillHighlight}
              size="lg"
              className="about__hashtags"
            />
          </div>
        </div>

        <div className="about__bio reveal">
          {role.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {role.strengths?.length > 0 && (
          <div className="about__strengths reveal">
            <h3 className="about__section-heading">핵심 역량</h3>
            <div className="about__strengths-grid">
              {role.strengths.map((item) => (
                <article key={item.title} className="about__strength-card">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {role.starCases?.length > 0 && (
          <div className="about__cases reveal">
            <h3 className="about__section-heading">문제 해결 사례</h3>
            <div className="about__cases-list">
              {role.starCases.map((c) => (
                <article key={c.title} className="about__case-card">
                  <h4>{c.title}</h4>
                  <dl>
                    <div>
                      <dt>상황</dt>
                      <dd>{c.situation}</dd>
                    </div>
                    <div>
                      <dt>과제</dt>
                      <dd>{c.task}</dd>
                    </div>
                    <div>
                      <dt>해결</dt>
                      <dd>{c.action}</dd>
                    </div>
                    <div>
                      <dt>결과</dt>
                      <dd className="about__case-result">{c.result}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        )}

        {role.goals?.length > 0 && (
          <div className="about__goals reveal">
            <h3 className="about__section-heading">입사 후 포부</h3>
            <ul>
              {role.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
