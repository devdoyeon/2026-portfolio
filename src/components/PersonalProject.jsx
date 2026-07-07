import { useState, useMemo, useCallback } from 'react';
import { getPersonalProjectsForRole, personalProjectCategoryFilters } from 'data/contentData';
import { HashTagList } from 'components/HashTag';
import { useModalA11y } from 'hooks/useModalA11y';

const categoryModifier = {
  personal: 'personal',
  academy: 'academy',
};

function PersonalProjectModal({ project, onClose }) {
  const panelRef = useModalA11y(onClose);

  const githubLinks = Array.isArray(project.githubs) ? project.githubs : null;

  return (
    <div
      className="personal-project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="personal-project-modal-title"
      onClick={onClose}
    >
      <div
        className="personal-project-modal__panel"
        ref={panelRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="personal-project-modal__close"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>

        <div className="personal-project-modal__header">
          {project.category && (
            <span
              className={`personal-project__category personal-project__category--${
                categoryModifier[project.category] ?? 'default'
              }`}
            >
              {project.category === 'personal' ? '개인' : '학원'}
            </span>
          )}
          <span className="personal-project-modal__period">{project.period}</span>
        </div>

        <h3 id="personal-project-modal-title" className="personal-project-modal__title">
          {project.title}
        </h3>
        <p className="personal-project-modal__subtitle">{project.subtitle}</p>
        <p className="personal-project-modal__summary">{project.summary}</p>

        <HashTagList tags={project.tags} size="sm" className="personal-project-modal__tags" />

        {project.detailOverview?.map((paragraph, i) => (
          <p key={i} className="personal-project-modal__overview">
            {paragraph}
          </p>
        ))}

        {project.sections?.map((section) => (
          <div key={section.title} className="personal-project-modal__section">
            <h4 className="personal-project-modal__section-title">{section.title}</h4>
            <ul className="personal-project-modal__highlights">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {!project.sections?.length && project.highlights?.length > 0 && (
          <ul className="personal-project-modal__highlights">
            {project.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {(githubLinks?.length || project.github || project.url || project.docs) && (
          <div className="personal-project-modal__links" onClick={(e) => e.stopPropagation()}>
            {githubLinks?.length
              ? githubLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    {link.label}
                  </a>
                ))
              : project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                    GitHub
                  </a>
                )}
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer" className="btn">
                Live
              </a>
            )}
            {project.docs && (
              <a href={project.docs} target="_blank" rel="noreferrer" className="btn">
                Docs
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function PersonalProjectCard({ project, onOpen }) {
  const previewTags = project.tags.slice(0, 3);
  const extraTagCount = project.tags.length - previewTags.length;
  const cardSummary = project.cardSummary ?? project.summary;
  const leadHighlight = project.highlights?.[0];

  return (
    <article className="personal-project__card">
      <button
        type="button"
        className="personal-project__card-toggle"
        onClick={() => onOpen(project)}
        aria-haspopup="dialog"
      >
        <div className="personal-project__card-compact">
          <div className="personal-project__card-top">
            {project.category && (
              <span
                className={`personal-project__category personal-project__category--${
                  categoryModifier[project.category] ?? 'default'
                }`}
              >
                {project.category === 'personal' ? '개인' : '학원'}
              </span>
            )}
            <span className="personal-project__card-period">{project.period}</span>
          </div>

          <h4 className="personal-project__card-title" title={project.title}>
            {project.title}
          </h4>
          <p className="personal-project__card-subtitle">{project.subtitle}</p>
          <p className="personal-project__card-summary">{cardSummary}</p>

          {leadHighlight && (
            <p className="personal-project__card-highlight">{leadHighlight}</p>
          )}

          <div className="personal-project__tags-row">
            <HashTagList tags={previewTags} size="sm" />
            {extraTagCount > 0 && (
              <span className="personal-project__tag-more">+{extraTagCount}</span>
            )}
          </div>
          <span className="personal-project__expand-hint">상세 보기</span>
        </div>
      </button>
    </article>
  );
}

export default function PersonalProject({ roleId }) {
  const projects = getPersonalProjectsForRole(roleId);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [modalProject, setModalProject] = useState(null);

  const closeModal = useCallback(() => setModalProject(null), []);

  const filtered = useMemo(() => {
    if (categoryFilter === 'all') return projects;
    return projects.filter((p) => (p.category ?? 'personal') === categoryFilter);
  }, [projects, categoryFilter]);

  const counts = useMemo(() => {
    const map = { all: projects.length };
    personalProjectCategoryFilters.slice(1).forEach(({ id }) => {
      map[id] = projects.filter((p) => (p.category ?? 'personal') === id).length;
    });
    return map;
  }, [projects]);

  const handleFilter = (id) => {
    setCategoryFilter(id);
    setModalProject(null);
  };

  return (
    <section id="projects" className="section personal-project">
      <div className="container">
        <h2 className="section__title reveal">Personal Project</h2>
        <p className="personal-project__hint reveal">카드를 클릭하면 모달에서 상세 내용을 확인할 수 있습니다.</p>

        <div
          className="personal-project__filters"
          role="tablist"
          aria-label="개인 프로젝트 카테고리 필터"
        >
          {personalProjectCategoryFilters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={categoryFilter === id}
              className={`personal-project__filter ${categoryFilter === id ? 'personal-project__filter--active' : ''}`}
              onClick={() => handleFilter(id)}
            >
              {label}
              <span className="personal-project__filter-count">{counts[id] ?? 0}</span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="personal-project__empty">해당 카테고리의 프로젝트가 없습니다.</p>
        ) : (
          <div className="personal-project__grid reveal">
            {filtered.map((project) => (
              <PersonalProjectCard key={project.id} project={project} onOpen={setModalProject} />
            ))}
          </div>
        )}
      </div>

      {modalProject && <PersonalProjectModal project={modalProject} onClose={closeModal} />}
    </section>
  );
}
