import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import NewsletterSection from "./components/NewsletterSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import PrivacyModal from "./components/PrivacyModal";
import AllProjectsPage from "./components/AllProjectsPage";

export default function App() {
  const [activeView, setActiveView] = useState("intro"); // "intro" | "projects"
  const [selectedProject, setSelectedProject] = useState(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const goToProjects = () => {
    setActiveView("projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToIntro = () => {
    setActiveView("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToNewsletter = () => {
    const el = document.getElementById("newsletter");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      {/* Site Header with Floating Pill Navigation */}
      <Header
        activeView={activeView}
        onGoToProjects={goToProjects}
        onGoToIntro={goToIntro}
      />

      <main id="main-content">
        {activeView === "projects" ? (
          <AllProjectsPage onBackToIntro={goToIntro} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onExploreWork={goToProjects} />

            {/* 01 / The Approach & Philosophy */}
            <IntroSection />

            {/* 03 / Built in the Open & Projects */}
            <ProjectsSection
              onSelectProject={(project) => setSelectedProject(project)}
              onAllProjects={goToProjects}
            />

            {/* 05 / The Occasional Dispatch & Newsletter (#newsletter) */}
            <NewsletterSection onOpenPrivacy={() => setPrivacyOpen(true)} />

            {/* 06 / Foundations, Story & Principles */}
            <AboutSection onOpenContact={scrollToNewsletter} />
          </>
        )}
      </main>

      {/* Site Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenContact={scrollToNewsletter}
      />

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
