import Navigation from "./Navigation.jsx";
import PageContainer from "./PageContainer";
import HeroSection from "./HeroSection";
import SectionHeader from "./SectionHeader";
import CaseStudyTile from "./CaseStudyTile";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop.jsx";

function App() {
  return (
    <PageContainer>
      <ScrollToTop />

      <Navigation />
      <HeroSection />

      <div className="px-site w-full flex flex-col pb-32 lg:pb-40">
        <CaseStudyTile
          imgSrc="/mc-thumb.png"
          title="How I made it cheaper to acquire customers by simplifying our onboarding process."
          target="meet-creation-cs"
        />

        <CaseStudyTile
          imgSrc="/ia-thumb.png"
          title="How I increased customer LTV by improving our product’s architecture."
          target="schedule-cs"
        />

        <CaseStudyTile
          imgSrc="/ds-thumb.png"
          title="How I helped our product team ship faster with a design system."
          target="design-system-cs"
        />
      </div>

      <Footer />
    </PageContainer>
  );
}

export default App;
