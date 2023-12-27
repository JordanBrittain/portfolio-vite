import CaseHero from "./CaseHero";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import TextSection from "./TextSection";

function ScheduleCS() {
  return (
    <PageContainer>
      <Navigation />
      <CaseHero
        title="FloSports Schedule & Scores"
        description="MileSplit Live helps athletes, coaches, and fans keep up with track & field meets in real-time. The product belongs to MileSplit, which is a track and cross country hub that publishes a variety of data and editorial content including meet results, rankings, and articles. MileSplit Live was doing well, but the company recognized the potential to improve the aesthetics and usability of the product. As an in-house designer, I was tasked to help realize this potential."
      />
      <TextSection
        title="Understanding the Problem"
        copy="I began the project by talking to current customers about how they used the product. These conversations revealed that the product was meeting their basic needs but was generally lacking depth.

      I created a regular project by talking to current customers about how they used the product. These conversations revealed that the product was meeting their basic needs but was generally lacking depth."
      />
    </PageContainer>
  );
}

export default ScheduleCS;
