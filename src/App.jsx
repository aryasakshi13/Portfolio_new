import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import PrivacyModal from "./components/PrivacyModal";
import AllProjectsPage from "./components/AllProjectsPage";
import AboutPage from "./components/AboutPage";

export default function App() {
  const [activeView, setActiveView] = useState("intro"); // "intro" | "projects" | "about"
  const [selectedProject, setSelectedProject] = useState(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const goTo = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToProjects = () => goTo("projects");
  const goToIntro    = () => goTo("intro");
  const goToAbout    = () => goTo("about");

  const scrollToNewsletter = () => {
    const el = document.getElementById("newsletter");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <Header
        activeView={activeView}
        onGoToProjects={goToProjects}
        onGoToIntro={goToIntro}
        onGoToAbout={goToAbout}
      />

      <main id="main-content">
        {activeView === "projects" ? (
          <AllProjectsPage onBackToIntro={goToIntro} />

        ) : activeView === "about" ? (
          <AboutPage
            onBackToIntro={goToIntro}
            onOpenPrivacy={() => setPrivacyOpen(true)}
          />

        ) : (
          <>
            {/* Hero */}
            <Hero onExploreWork={goToProjects} />

            {/* 01 / Approach */}
            <IntroSection onGoToAbout={goToAbout} />

            {/* 03 / Projects */}
            <ProjectsSection
              onSelectProject={(p) => setSelectedProject(p)}
              onAllProjects={goToProjects}
            />

            {/* Newsletter */}
            <NewsletterSection onOpenPrivacy={() => setPrivacyOpen(true)} />
          </>
        )}
      </main>

      {/* Footer only on intro view */}
      {activeView === "intro" && (
        <Footer
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onOpenContact={scrollToNewsletter}
        />
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {privacyOpen && (
        <PrivacyModal onClose={() => setPrivacyOpen(false)} />
      )}
    </div>
  );
}
