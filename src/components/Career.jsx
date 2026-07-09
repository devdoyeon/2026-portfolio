import { useState, useMemo, useCallback } from 'react';
import { getCareerForRole, careerWorkTypeFilters } from 'data/contentData';
import { HashTagList } from 'components/HashTag';
import StatChips from 'components/StatChips';
import { useModalA11y } from 'hooks/useModalA11y';

const workTypeModifier = {
  Develop: 'develop',
  Maintain: 'maintain',
  'Develop & Maintain': 'both',
  OUTBOUND: 'outbound',
};

function CareerProjectModal({ project, onClose }) {
  const panelRef = useModalA11y(onClose);

  return (
    <div
      className="career-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="career-modal-title"
      onClick={onClose}
    >
      <div
        className="career-modal__panel"
        ref={panelRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="career-modal__close"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>

        <div className="career-modal__header">
          {project.workType && (
            <span
              className={`career__work-type career__work-type--${workTypeModifier[project.workType] ?? 'default'}`}
            >
              {project.workType}
            </span>
          )}
          <span className="career-modal__period">{project.period}</span>
        </div>

        <h3 id="career-modal-title" className="career-modal__title">
          {project.title}
        </h3>
        <p className="career-modal__org">{project.org}</p>
        <p className="career-modal__summary">{project.summary}</p>

        <HashTagList tags={project.tags} size="sm" className="career-modal__tags" />

        {project.detailOverview?.map((paragraph, i) => (
          <p key={i} className="career-modal__overview">
            {paragraph}
          </p>
        ))}

        {project.sections?.map((section) => (
          <div key={section.title} className="career-modal__section">
            <h4 className="career-modal__section-title">{section.title}</h4>
            <ul className="career-modal__highlights">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {!project.sections?.length && project.highlights?.length > 0 && (
          <ul className="career-modal__highlights">
            {project.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {(project.github || project.url) && (
          <div className="career-modal__links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                GitHub
              </a>
            )}
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer" className="btn">
                URL
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function CareerProjectCard({ project, onOpen }) {
  const previewTags = project.tags.slice(0, 4);
  const extraTagCount = project.tags.length - previewTags.length;

  return (
    <article className="career__card">
      <button
        type="button"
        className="career__card-toggle"
        onClick={() => onOpen(project)}
        aria-haspopup="dialog"
      >
        <div className="career__card-compact">
          <div className="career__card-top">
            {project.workType && (
              <span
                className={`career__work-type career__work-type--${workTypeModifier[project.workType] ?? 'default'}`}
              >
                {project.workType}
              </span>
            )}
            <span className="career__card-period">{project.period}</span>
          </div>
          <h4 className="career__card-title" title={project.title}>
            {project.title}
          </h4>
          <p className="career__card-org">{project.org}</p>
          <p className="career__card-summary">{project.summary}</p>
          <div className="career__tags-row">
            <HashTagList tags={previewTags} size="sm" />
            {extraTagCount > 0 && (
              <span className="career__tag-more">+{extraTagCount}</span>
            )}
          </div>
          <span className="career__expand-hint">상세 보기</span>
        </div>
      </button>
    </article>
  );
}

export default function Career({ roleId }) {
  const { company, projects } = getCareerForRole(roleId);
  const [workFilter, setWorkFilter] = useState('all');
  const [modalProject, setModalProject] = useState(null);

  const closeModal = useCallback(() => setModalProject(null), []);

  const filtered = useMemo(() => {
    if (workFilter === 'all') return projects;
    return projects.filter((p) => p.workType === workFilter);
  }, [projects, workFilter]);

  const counts = useMemo(() => {
    const map = { all: projects.length };
    careerWorkTypeFilters.slice(1).forEach(({ id }) => {
      map[id] = projects.filter((p) => p.workType === id).length;
    });
    return map;
  }, [projects]);

  const handleFilter = (id) => {
    setWorkFilter(id);
    setModalProject(null);
  };

  return (
    <section id="career" className="section career">
      <div className="container">
        <h2 className="section__title reveal">Career</h2>

        <article className="career__company reveal">
          <div className="career__company-header">
            <h3>
              {company.name} <span aria-hidden="true">{company.emoji}</span>
            </h3>
            <span className="career__role keyword">{company.role}</span>
            <span className="career__period">{company.period}</span>
          </div>
          <p className="career__company-desc">{company.description}</p>
          <StatChips
            className="career__stats"
            stats={[
              { value: `${projects.length}개`, label: '참여 프로젝트' },
              { value: '1년 2개월', label: '팀장 재직' },
            ]}
          />
        </article>

        <div className="career__projects-header reveal">
          <h3 className="career__subtitle">주요 프로젝트</h3>
          <p className="career__hint">카드를 클릭하면 모달에서 상세 업무 내용을 확인할 수 있습니다.</p>
        </div>

        <div className="career__filters" role="tablist" aria-label="프로젝트 유형 필터">
          {careerWorkTypeFilters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={workFilter === id}
              className={`career__filter ${workFilter === id ? 'career__filter--active' : ''}`}
              onClick={() => handleFilter(id)}
            >
              {label}
              <span className="career__filter-count">{counts[id] ?? 0}</span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="career__empty">해당 유형의 프로젝트가 없습니다.</p>
        ) : (
          <div className="career__grid reveal">
            {filtered.map((project) => (
              <CareerProjectCard
                key={project.id}
                project={project}
                onOpen={setModalProject}
              />
            ))}
          </div>
        )}
      </div>

      {modalProject && (
        <CareerProjectModal project={modalProject} onClose={closeModal} />
      )}
    </section>
  );
}
