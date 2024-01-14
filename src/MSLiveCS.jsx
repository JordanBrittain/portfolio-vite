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
        copy="Although the product contained a treasure trove of valuable data and content, customers were struggling to find and discover all that was offered. To address this challenge, I made improvements to the event list and filters, and designed a new search feature."
      />

<ContentSection
        style="double"
        contentOne={{
          type: "video",
          source: "/ms-schedule.mp4",
          alt: "I redesigned the event list to be easier to scan and filter.",
          caption: true,
          captionText:
            "I redesigned the event list to be easier to scan and filter.",
        }}
        contentTwo={{
          type: "image",
          source: "/ms-search.png",
          alt: "The 'Date Scroller' lets users quickly navigate to events in the near future or past without leaving the context of the schedule.",
          caption: true,
          captionText:
            "Searching lets users quickly get to the team, athlete, or event they're looking for.",
        }}
      />

      <TextSection
        title="Showcasing Rankings and Records"
        copy="In track and cross country, rankings and records are essential for keeping participants and fans up-to-date with the latest in the sport. I catered to this interest by designing ways to make rankings and records information more accessible and engaging."
      />

      
<ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ms-rankings.png",
          alt: "A selection of components used to showcase rankings & records.",
          caption: true,
          captionText: "A selection of components used to showcase rankings & records.",
        }}
      />
  

<QuoteSection
        text="“I worked with Jordan on a ground-up product redesign and he was awesome to work with. His design style is incredibly collaborative and flexible, always listening to external users and internal SMEs, he found a way to build a design that appealed to all of them. It's hard to do a product redesign that can satisfy engineering requirements, product KPIs, and overall business goals but Jordan has proven time and time again he is up to the task as a product designer.“"
        name="Sammy Rice"
        title="Product Manager"
        image="/sammy.jpeg"
        alt="Jordan's Face"
      />


<TextSection
        title="Optimizing Scan-ability"
        copy="Finish times, splits, marks, heights, and distances are the core offering of the product. To ensure these results were presented in the most engaging and consumable way possible, I redesigned the tables in the product to be more visually appealing and scannable."
      />

<ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ms-table.png",
          alt: "A component presenting the results of a 1600 meter event.",
          caption: true,
          captionText: "A component presenting the results of a 1600 meter event.",
        }}
      />

<TextSection
        title="Integrating Athlete Profiles"
        copy="Athletes are the heart of the sport, and behind each record and finishing time is a story. To provide a more comprehensive experience, we introduced athlete profiles to the product, enabling customers to delve into these stories."
      />

<ContentSection
        style="double"
        contentOne={{
          type: "image",
          source: "/ms-athlete-prof.png",
          alt: "An athlete's profile features essential information such as the events they're participating in, and their state and national rankings.",
          caption: true,
          captionText:
            "An athlete's profile features essential information such as the events they're participating in, and their state and national rankings.",
        }}
        contentTwo={{
          type: "image",
          source: "/ms-performance.png",
          alt: "Users can also dig into how an athlete has performed in the past.",
          caption: true,
          captionText:
            "Users can also dig into how an athlete has performed in the past.",
        }}
      />


      <TextSection
        title="Results"
        copy="We launched this redesign alongside efforts from multiple teams at MileSplit, including engineering, rights acquisition, and others. As a result, we saw a significant increase across several metrics."
      />

<ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ms-results.png",
          alt: "The results.",
          caption: false,
        }}
      />

      


     

      <Footer />
    </PageContainer>
  );
}

export default MSLiveCS;
