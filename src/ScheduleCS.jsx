import CaseHero from "./CaseHero";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import TextSection from "./TextSection";
import ContentSection from "./ContentSection";
import QuoteSection from "./QuoteSection";
import Footer from "./Footer";

function ScheduleCS() {
  return (
    <PageContainer>
      <Navigation />
      <CaseHero
        title="FloSports Schedule & Scores"
        description="MileSplit Live helps athletes, coaches, and fans keep up with track & field meets in real-time. The product belongs to MileSplit, which is a track and cross country hub that publishes a variety of data and editorial content including meet results, rankings, and articles. \nMileSplit Live was doing well, but the company recognized the potential to improve the aesthetics and usability of the product. As an in-house designer, I was tasked to help realize this potential."
      />
      <TextSection
        title="Understanding the Problem"
        copy="I began the project by talking to current customers about how they used the product. These conversations revealed that the product was meeting their basic needs but was generally lacking depth.

      I created a regular project by talking to current customers about how they used the product. These conversations revealed that the product was meeting their basic needs but was generally lacking depth."
      />

      <ContentSection
        style="double"
        contentOne={{
          type: "image",
          source: "/ss-1.png",
          alt: "Image 1",
          caption: true,
          captionText: "Caption for Image 1",
        }}
        contentTwo={{
          type: "video",
          source: "/performance-comp.mp4",
          alt: "Video 1",
          caption: true,
          captionText: "Caption for Image 1",
        }}
      />

      <TextSection
        title="Understanding the Problem"
        copy="I began the project by talking to current customers about how they used the product. These conversations revealed that the product was meeting their basic needs but was generally lacking depth.

      I created a regular project by talking to current customers about how they used the product. These conversations revealed that the product was meeting their basic needs but was generally lacking depth."
      />

      <QuoteSection
        text="“Working with Jordan on the FloSports Schedule/Scores page was a great experience. Thanks to his focus on product discovery, we were able to discover and implement new features that significantly enhanced the user experience. He also brought a relentless work ethic to the project, ensuring that we met our deadlines and delivered high-quality work. Jordan was very collaborative, always open to feedback, and willing to work with the team to find solutions to any challenges we faced.”"
        name="Sammy Rice"
        title="Product Manager"
        image="/my-face.png"
        alt="Jordan's Face"
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ss-1.png",
          alt: "Image 1",
          caption: false,
          captionText: "Caption for Image 1",
        }}
      />

      <TextSection
        title="Understanding the Problem"
        copy="I began the project by talking to current customers about how they used the product. These conversations revealed that the product was meeting their basic needs but was generally lacking depth.

      I created a regular project by talking to current customers about how they used the product. These conversations revealed that the product was meeting their basic needs but was generally lacking depth."
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ss-1.png",
          alt: "Image 1",
          caption: true,
          captionText: "Caption for Image 1",
        }}
      />

      <Footer/>
    </PageContainer>
  );
}

export default ScheduleCS;
