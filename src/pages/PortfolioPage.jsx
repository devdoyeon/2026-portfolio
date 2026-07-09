import { Head } from 'vite-react-ssg';
import { roles, personalInfo, getNavSections } from 'data/contentData';
import { useMotionFlag, useRevealAll } from 'hooks/useReveal';
import { useScrollSpy } from 'hooks/useScrollSpy';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AboutMe from 'components/AboutMe';
import Career from 'components/Career';
import PersonalProject from 'components/PersonalProject';
import Education from 'components/Education';
import Skills from 'components/Skills';
import EditorSidebar from 'components/EditorSidebar';
import EditorBreadcrumb from 'components/EditorBreadcrumb';
import EditorStatusBar from 'components/EditorStatusBar';

export default function PortfolioPage({ roleId }) {
  const role = roles[roleId];
  const sectionIds = getNavSections(roleId).map((s) => s.id);

  useMotionFlag();
  useRevealAll([roleId]);
  const activeId = useScrollSpy(sectionIds);

  if (!role) return null;

  const title = `${personalInfo.nameKo} | ${role.label} — devdoyeon.site`;
  const description = role.tagline;
  const url = `${personalInfo.siteUrl}${role.path}`;
  const image = `${personalInfo.siteUrl}/og/og-${roleId}.png`;

  return (
    <div className="portfolio portfolio--editor" data-role={roleId}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="devdoyeon.site" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <Header
        roleLabel={role.label}
        rolePath={role.path}
        roleId={roleId}
        activeId={activeId}
      />
      <EditorSidebar roleId={roleId} activeId={activeId} />
      <main>
        <EditorBreadcrumb role={role} activeId={activeId} />
        <AboutMe role={role} />
        {roleId === 'ai' ? (
          <>
            <PersonalProject roleId={roleId} />
            <Career roleId={roleId} />
          </>
        ) : (
          <>
            <Career roleId={roleId} />
            <PersonalProject roleId={roleId} />
          </>
        )}
        <Education />
        <Skills roleId={roleId} />
      </main>
      <Footer />
      <EditorStatusBar role={role} activeId={activeId} />
    </div>
  );
}
