import { useEffect } from 'react';
import { roles, personalInfo } from 'data/contentData';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AboutMe from 'components/AboutMe';
import Career from 'components/Career';
import PersonalProject from 'components/PersonalProject';
import Education from 'components/Education';
import Skills from 'components/Skills';

export default function PortfolioPage({ roleId }) {
  const role = roles[roleId];

  useEffect(() => {
    if (role) {
      document.title = `${personalInfo.nameKo} | ${role.label} — devdoyeon.site`;
    }
  }, [role]);

  if (!role) return null;

  return (
    <div className="portfolio" data-role={roleId}>
      <Header roleLabel={role.labelKo} rolePath={role.path} />
      <main>
        <AboutMe role={role} />
        <Career roleId={roleId} />
        <PersonalProject roleId={roleId} />
        <Education />
        <Skills roleId={roleId} />
      </main>
      <Footer />
    </div>
  );
}
