import Navigation from "./Navigation.jsx";
import PageContainer from "./PageContainer";
import HeroSection from "./HeroSection";
import CaseStudyTile from "./CaseStudyTile";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop.jsx";
import About from "./About.jsx";

function App() {
  return (
    <PageContainer>
      <ScrollToTop />

      <Navigation />
      <HeroSection />

      <div className="px-site w-full flex flex-col pb-32 lg:pb-40">
        <CaseStudyTile
          imgSrc="/mc-thumb.png"
          title="Making it cheaper to acquire customers by simplifying an onboarding process."
          overline="Onboarding Flow"
          target="meet-creation-cs"
        />

        <CaseStudyTile
          imgSrc="/ia-thumb.png"
          title="Increasing customer LTV through intuitive information architecture."
          overline="Information Architecture"
          target="information-architecture-cs"
        />

        <CaseStudyTile
          imgSrc="/ds-thumb.png"
          title="Increasing product team velocity with a design system."
          overline="Design System"
          target="design-system-cs"
        />
      </div>

<About/>

      <Footer />
    </PageContainer>
  );
}

export default App;
