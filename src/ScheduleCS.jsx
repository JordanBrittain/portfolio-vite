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
          captionText: "Verbatim quotes gathered from the testing process.",
        }}
      />

      <TextSection
        title="Final Designs - Browsing by Date"
        copy="I designed features that let customers seamlessly navigate through time, whether they’re interested in what’s happening tomorrow, or what’s happening next month."
      />

      <ContentSection
        style="double"
        contentOne={{
          type: "image",
          source: "/month-picker.png",
          alt: "The 'Month Picker' lets users navigate to events far in the future or past.",
          caption: true,
          captionText:
            "The 'Month Picker' lets users navigate to events far in the future or past.",
        }}
        contentTwo={{
          type: "video",
          source: "/schedule-vid.mp4",
          alt: "The 'Date Scroller' lets users quickly navigate to events in the near future or past without leaving the context of the schedule.",
          caption: true,
          captionText:
            "The 'Date Scroller' lets users quickly navigate to events in the near future or past without leaving the context of the schedule.",
        }}
      />

      <TextSection
        title="Event List"
        copy="I designed the list components to prioritize critical event information while also ensuring they were uncluttered and easy to scan."
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ss-event-comp.png",
          alt: "A few variations of the event component.",
          caption: true,
          captionText: "A few variations of the event component.",
        }}
      />

<QuoteSection
        text="“Working with Jordan on the FloSports Schedule/Scores page was a great experience. Thanks to his focus on product discovery, we were able to discover and implement new features that significantly enhanced the user experience. He also brought a relentless work ethic to the project, ensuring that we met our deadlines and delivered high-quality work. Jordan was very collaborative, always open to feedback, and willing to work with the team to find solutions to any challenges we faced.”"
        name="Jarryd Palek"
        title="Product Manager"
        image="/jarryd.jpeg"
        alt="Jordan's Face"
      />


      <TextSection
        title="Filtering and Searching"
        copy="We implemented filters and a search feature in order to help customers get to the specific event or subset of events they’re interested in."
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "video",
          source: "/schedule-filters.mp4",
          alt: "A demonstration of the filtering feature.",
          caption: true,
          captionText: "A demonstration of the filtering feature.",
        }}
      />

      <TextSection
        title="Vision for the Future"
        copy="Integrating scores into the schedule was not within the scope of the first phase of the project. However, we knew this was something our customers would love, and that we eventually wanted to do. So, I did some exploration to envision what that integration might look like."
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/scores.png",
          alt: "Exploration of how scores might be implemented into the schedule components.",
          caption: true,
          captionText: "Exploration of how scores might be implemented into the schedule components.",
        }}
      />


<TextSection
        title="Results"
        copy="We saw great feedback from the user testing sessions, followed by positive increases in a few key metrics after launching. More importantly, we laid the groundwork for future, high-impact improvements."
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/schedule-results.png",
          alt: "A few variations of the event component.",
          caption: false,
        }}
      />


     

      <Footer />
    </PageContainer>
  );
}

export default ScheduleCS;
