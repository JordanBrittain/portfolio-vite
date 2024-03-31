import CaseHero from "./CaseHero";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import TextSection from "./TextSection";
import ContentSection from "./ContentSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import HeaderSection from "./HeaderSection";

function MCCS() {
  return (
    <PageContainer>
      <ScrollToTop />
      <Navigation />
      <CaseHero title="How I made it cheaper to acquire customers by simplifying our onboarding process." />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mc-splash.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <TextSection
        title="The Product & Problem"
        copy={[
          "MileSplit is a vertical software product that simplifies hosting track & field meets. The first step in using the software is setting up a meet, which is a complex process that involves the configuration of dates, registration timelines, divisions, events, rules, and more.",
          "New customers relied on our customer success team to help them through this process. This solution quickly became unsustainable as the business experienced a period of rapid growth. ",
          "Our customer success team was swamped –  we needed to make the onboarding process easier for our customers.",
        ]}
      />

      <TextSection
        title="Digging In"
        copy={[
          "I had a series of conversations with our customer success team to understand why our customers couldn’t independently set up meets.",
        ]}
        chopped={true}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/mc-notes.png",
          alt: "N/A",
          caption: true,
          captionText:
            "I captured and organized notes from the conversations in FigJam.",
        }}
      />

      <TextSection
        title="The Main Issue"
        copy={[
          "Customers primarily struggled with creating divisions and events.",
          "Divisions categorize participants by skill level—such as Varsity, Junior Varsity, and Freshman—while events are competitions like the 100m dash and shot put.",
          "The complexity of setting up these components overwhelmed many customers, and the current product experience was not cutting it. We were throwing our customers into the deep end, and they were calling customer success for help.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mc-current-xp.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <TextSection
        title="Telling The Story"
        copy={[
          "I went and shared this story with the immediate team, adjacent stakeholders, and leadership. ",
          "The story of the first-time customer who struggled to set up their divisions and events because of our confusing software. The story of our customer success team that was swamped from the onslaught of tickets. The story of our astronomical customer acquisition costs that had no signs of lowering and was hurting the bottom line of our business.",
          "It resonated.",
          "The organization was eager to remedy the situation, and I had the support to embark on finding a solution.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mc-journey-map.png",
          alt: "N/A",
          caption: true,
          captionText:
            "One of the tools I used to tell the story – a user journey map.",
        }}
      />

      <TextSection
        title="Finding A Solution"
        copy={[
          "I explored solutions and vetted them along the way with the appropriate stakeholders. Eventually, I landed on a direction that felt promising. I created a quick prototype to do some task-based testing on with new customers, which led to valuable insights that influenced the final direction of the designs.",
        ]}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/mc-paper-solutions.png",
          alt: "N/A",
          caption: true,
          captionText:
            "I used old fashioned pencil and paper to rapidly thinking through solutions.",
        }}
      />

      <HeaderSection title="The Final Designs" />

      <TextSection
        title="Expanding The Onboarding"
        copy={[
          "Our software had a brief onboarding flow before spitting out customers into the full-fledged software. I chose to bring the process of creating divisions and events into that onboarding flow in the form of 5 simple steps.",
        ]}
        chopped={true}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mc-full-flow.png",
          alt: "N/A",
          caption: true,
          captionText:
            "The five steps for setting up divisions and events that were added to the onboarding flow.",
        }}
      />

      <TextSection
        title="Breaking Things Down"
        copy={[
          "Customers were intimidated by the complexity of the existing product, so I broke the process down into handful of simple steps.",
          "To keep the experience approachable, non-essential functionality was only revealed when asked for.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mc-create-divs.png",
          alt: "N/A",
          caption: true,
          captionText:
            "This is the step in which customers are asked to create the divisions in their meet.",
        }}
      />

      <ContentSection
        style="double"
        contentOne={{
          type: "image",
          source: "/mc-breadcrumb.png",
          alt: "N/A",
          caption: true,
          captionText:
            "This component was used in the header of the flow in order to give customers a sense of where they were in the process.",
        }}
        contentTwo={{
          type: "image",
          source: "/mc-add-div.png",
          alt: "N/A",
          caption: true,
          captionText:
            "UI that was not immediately necessary, such as the UI for adding a division, was only revealed when the customer indicated they needed it. This kept the initial state of the page simple and focused.",
        }}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mc-create-events.png",
          alt: "N/A",
          caption: true,
          captionText:
            "There is more complexity to events than just choosing which ones you want, but I abstracted that complexity away to unburden customers and keep the cognitive load minimal.",
        }}
      />

      <ContentSection
        style="double"
        contentOne={{
          type: "image",
          source: "/mc-event-copy.png",
          alt: "N/A",
          caption: true,
          captionText:
            "I used the language in the subheadings to reassure customers that there would be more control later.",
        }}
        contentTwo={{
          type: "image",
          source: "/mc-adv-event.png",
          alt: "N/A",
          caption: true,
          captionText:
            "There are customers that want more control. I catered to them while also protecting those who preferred simplicity by providing users the opportunity to opt into the complexity.",
        }}
      />

      <TextSection
        title="Giving Customers Power"
        copy={[
          "In the prior product experience, customers had to switch from page to page in order to edit advanced event settings. The new designs made this process much easier. All of the events and their settings were revealed on a single page, allowing the customer to edit them from a single view.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mc-advanced-page.png",
          alt: "N/A",
          caption: true,
          captionText:
            "The advanced event settings page where all of the events and their setting are revealed.",
        }}
      />

      <TextSection
        title="Eliminating Grunt Work"
        copy={[
          "The existing experience was monotonous – customers had to do tons of time-consuming creation and editing. To address this, I introduced a step where the customer could choose a template that would pre-populate the divisions and events in their meet, saving them a ton of time.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mc-templates.png",
          alt: "N/A",
          caption: true,
          captionText: "The step for choosing a template.",
        }}
      />

<div className="mb-14 lg:mb-20 2xl:mb-32">
      <TextSection
        title="The Results"
        copy={[
          "We didn’t have the infrastructure to quantitatively measure the results of the new design, but there was an obvious reduction in the demand on customer success, and an increase in the amount of organic onboarding.",
          "Our onboarding experience was much more intuitive, resulting in a lower customer acquisition cost that allowed us to expand into new markets with more economic efficiency. ",
        ]}
      />
      </div>

      <Footer />
    </PageContainer>
  );
}

export default MCCS;
