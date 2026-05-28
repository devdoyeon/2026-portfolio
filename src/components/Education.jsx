import { education } from 'data/contentData';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section__title">Education</h2>

        <ul className="education__list">
          {education.map((item, i) => (
            <li key={i} className="education__item">
              <span className="education__date">{item.date}</span>
              <div className="education__content">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
