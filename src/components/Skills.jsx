import { getSkillsForRole } from 'data/contentData';
import HashTag, { HashTagList } from 'components/HashTag';

export default function Skills({ roleId }) {
  const { ordered, highlight } = getSkillsForRole(roleId);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section__title">Skills</h2>

        <HashTagList tags={highlight} size="lg" className="skills__highlight" />

        <div className="skills__grid">
          {Object.entries(ordered).map(([category, items]) => (
            <div key={category} className="skills__category">
              <h3 className="skills__category-title">{category}</h3>
              <div className="hashtag-list skills__list">
                {items.map((skill) => {
                  const isHighlighted =
                    highlight.includes(skill) ||
                    highlight.some((h) => skill.includes(h) || h.includes(skill));

                  return (
                    <HashTag
                      key={skill}
                      label={skill}
                      size="sm"
                      className={isHighlighted ? 'hashtag--focus' : ''}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
