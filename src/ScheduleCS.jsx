import CaseHero from "./CaseHero";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import TextSection from "./TextSection";
import ContentSection from "./ContentSection";
import QuoteSection from "./QuoteSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function ScheduleCS() {
  return (
    <PageContainer>
      <ScrollToTop />
      <Navigation />
      <CaseHero
        title="FloSports Schedule & Scores"
        description={[
          "FloSports provides coverage and live streams for a wide range of sports, which can be accessed on various platforms including iOS and Android.",
          "The apps feature a schedule that allows customers to stay informed about upcoming events, games, and matches for their favorite sports. The schedule was sufficient in the early days of the business, but FloSports was introducing thousands of new events to their offering and planned on eventually providing additional features such as live scores.",
          "I was tasked with redesigning the schedule to support the influx of new events and accommodate future improvements.",
        ]}
      />
      <TextSection
        title="Exploring the Possibilities"
        copy="I began the project by conducting a high-level exploration of potential solutions. Following this exploration, I vetted the ideas with stakeholders and converged on a direction that we felt was promising."
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/wireframes.png",
          alt: "A selection of low-fidelity wireframes I used to explore the solution space",
          caption: true,
          captionText:
            "A selection of low-fidelity wireframes I used to explore the solution space.",
        }}
      />

      <TextSection
        title="Validating the Designs"
        copy="After settling on a direction, I proceeded to create a prototype and user-test the designs. The testing went great and we were able to catch and address some issues before moving to the development stage."
      />

<ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/schedule-quotes.png",
          alt: "verbatim quotes gathered from the testing process",
          caption: true,
          captionText:
            "Verbatim quotes gathered from the testing process.",
        }}
      />

<TextSection
        title="Final Designs - Browsing by Date"
        copy="We introduced features that let customers seamlessly navigate through time, whether they’re interested in what’s happening tomorrow, or what’s happening next month."
      />

      <ContentSection
        style="double"
        contentOne={{
          type: "image",
          source: "/month-picker.png",
          alt: "Image 1",
          caption: true,
          captionText: "Caption for Image 1",
        }}
        contentTwo={{
          type: "video",
          source: "/schedule-vid.mp4",
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

      <Footer />
    </PageContainer>
  );
}

export default ScheduleCS;
