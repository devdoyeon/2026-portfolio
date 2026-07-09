import { useState, useEffect } from 'react';
import { personalInfo } from 'data/contentData';
import { HashTagList } from 'components/HashTag';
import CopyButton from 'components/CopyButton';
import FileIcon from 'components/FileIcon';

const PROFILE_IMAGE = '/images/profile.jpg';

// 코드 카드의 `key: "value",` 한 줄 — 값은 실제 클릭 가능한 링크로도 렌더(정보 접근성 유지)
function CodeRow({ k, value, href, external, comment, last, copyValue }) {
  const quoted = <>&quot;{value}&quot;</>;
  return (
    <li className="codecard__line codecard__line--prop">
      <span className="codecard__key">{k}</span>
      <span className="c-punc">: </span>
      {href ? (
        <a
          className="c-str c-link"
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
        >
          {quoted}
        </a>
      ) : (
        <span className="c-str">{quoted}</span>
      )}
      {!last && <span className="c-punc">,</span>}
      {comment && <span className="c-com">{'  // '}{comment}</span>}
      {copyValue && (
        <CopyButton value={copyValue} className="codecard__copy">
          복사
        </CopyButton>
      )}
    </li>
  );
}

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

          <div>
            <div className="codecard" aria-label={`${personalInfo.nameKo} 기본 정보`}>
              <div className="codecard__tab">
                <FileIcon ext="tsx" />
                <span className="codecard__tab-name">about.tsx</span>
                <span className="codecard__tab-dot" aria-hidden="true" />
              </div>
              <div className="codecard__body">
                <ol className="codecard__code">
                  <li className="codecard__line">
                    <span className="c-key">const</span>{' '}
                    <span className="c-var">doyeon</span>{' '}
                    <span className="c-punc">=</span>{' '}
                    <span className="c-punc">{'{'}</span>
                  </li>
                  <CodeRow k="name" value={personalInfo.nameKo} comment={personalInfo.nameEn} />
                  <CodeRow k="role" value={role.label} />
                  <CodeRow
                    k="email"
                    value={personalInfo.email}
                    href={`mailto:${personalInfo.email}`}
                    copyValue={personalInfo.email}
                  />
                  <CodeRow
                    k="phone"
                    value={personalInfo.phone}
                    href={`tel:${personalInfo.phone}`}
                  />
                  <CodeRow k="based" value={personalInfo.address} />
                  <CodeRow k="birth" value={personalInfo.birth} last />
                  <li className="codecard__line">
                    <span className="c-punc">{'}'}</span>
                    <span className="c-punc">;</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="about__quick-actions">
              <a href="/resume.pdf" download className="about__action about__action--primary">
                <span aria-hidden="true">▶</span> 이력서 다운로드
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="about__action"
              >
                GitHub
              </a>
              <a
                href={personalInfo.blog}
                target="_blank"
                rel="noreferrer"
                className="about__action"
              >
                Blog ↗
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
