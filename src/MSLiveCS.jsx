import CaseHero from "./CaseHero";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import TextSection from "./TextSection";
import ContentSection from "./ContentSection";
import QuoteSection from "./QuoteSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function MSLiveCS() {
  return (
    <PageContainer>
      <ScrollToTop />
      <Navigation />
      <CaseHero
        title="MileSplit Live Redesign"
        description={[
          "MileSplit Live helps athletes, coaches, and fans keep up with track & field meets in real-time. The product belongs to MileSplit, which is a track and cross country hub that publishes a variety of data and editorial content including meet results, rankings, and articles.",
          "MileSplit Live was doing well, but the company recognized the potential to improve the aesthetics and usability of the product. As an in-house designer, I was tasked to help realize this potential.",
        ]}
      />
      <TextSection
        title="Understanding the Problem"
        copy="I began the project by talking to current customers about how they used the product. These conversations revealed that the product was meeting their basic needs but was generally lacking depth."
      />

<ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ms-quotes.png",
          alt: "verbatim quotes gathered from user interviews",
          caption: true,
          captionText: "Verbatim quotes gathered from user interviews.",
        }}
      />

      <TextSection
        title="Final Designs - Improving Navigability"
        copy="Although the product contained a treasure trove of valuable data and content, customers were struggling to find and discover all that was offered. To address this challenge, we made improvements to the event list and filters, and designed a new search feature."
      />

<ContentSection
        style="double"
        contentOne={{
          type: "video",
          source: "/ms-schedule.mp4",
          alt: "The 'Month Picker' lets users navigate to events far in the future or past.",
          caption: true,
          captionText:
            "The 'Month Picker' lets users navigate to events far in the future or past.",
        }}
        contentTwo={{
          type: "image",
          source: "/ms-search.png",
          alt: "The 'Date Scroller' lets users quickly navigate to events in the near future or past without leaving the context of the schedule.",
          caption: true,
          captionText:
            "The 'Date Scroller' lets users quickly navigate to events in the near future or past without leaving the context of the schedule.",
        }}
      />

      <TextSection
        title="Final Designs - Browsing by Date"
        copy="We introduced features that let customers seamlessly navigate through time, whether they’re interested in what’s happening tomorrow, or what’s happening next month."
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
        name="Sammy Rice"
        title="Product Manager"
        image="/my-face.png"
        alt="Jordan's Face"
      />


      <TextSection
        title="Filtering and Searching"
        copy="We implemented filters and a search feature in order to help customers cut through the noise and get to the specific event or subset of events they’re interested in."
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

      <TextSection
        title="Vision for the Future"
        copy="Integrating scores into the schedule was not within the scope of the first phase of the project. However, we knew this was something our customers would love, and that we eventually wanted to do. So, I did some exploration to envision what that integration might look like."
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

export default MSLiveCS;
