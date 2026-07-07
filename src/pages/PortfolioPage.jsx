import { Head } from 'vite-react-ssg';
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

  if (!role) return null;

  const title = `${personalInfo.nameKo} | ${role.label} — devdoyeon.site`;
  const description = role.tagline;
  const url = `${personalInfo.siteUrl}${role.path}`;

  return (
    <div className="portfolio" data-role={roleId}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="devdoyeon.site" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
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
