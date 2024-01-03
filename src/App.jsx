import Navigation from "./Navigation.jsx";
import PageContainer from "./PageContainer";
import HeroSection from "./HeroSection";
import SectionHeader from "./SectionHeader";
import CaseStudyTile from "./CaseStudyTile";
import Footer from "./Footer";

function App() {
  return (
    <PageContainer>
      <div className="h-[640px] lg:h-screen flex flex-col">
        <Navigation />
        <HeroSection />
      </div>

      <SectionHeader title="Featured Work" />

      <div className="px-site w-full grid grid-cols-1 gap-x-14 gap-y-16 lg:grid-cols-2 lg:gap-y-20 lg:gap-16 pb-32 lg:pb-40">
        <CaseStudyTile
          imgSrc="/ss-1.png"
          title="FloSports Schedule & Scores"
          subtext="Redesigning a feature to support an evolving business."
          target="schedule-cs"
        />

        <CaseStudyTile
          imgSrc="/ms-live-cs.png"
          title="MileSplit Live Redesign"
          subtext="Redesigning a product to increase engagement."
        />
      </div>

      <Footer />
    </PageContainer>
  );
}

export default App;
