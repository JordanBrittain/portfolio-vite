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

      <CaseHero
        title="How I made it cheaper to acquire customers by simplifying our onboarding process."
        description={[
          "In early 2023, as FloSports was transitioning from Angular to React, we seized the opportunity to create a design system for our consumer-facing products – recognizing the significant productivity boosts it could offer to both design and engineering. My involvement began in the planning stages, and as the project progressed, I stepped into a lead role.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mc-splash.png",
          alt: "images of the onboarding xp",
          caption: false,
        }}
      />

      <TextSection
        title="The Product & Problem"
        copy={[
          "MileSplit is a vertical software product that simplifies hosting track & field meets. The first step in using the software is setting up a meet, which is a complex process that involves the configuration of dates, registration timelines, divisions, events, rules, and more.",
          "New customers relied on our customer success team to help them through this process. This solution quickly became unsustainable as the business experienced a period of rapid growth.",
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
          alt: "images of the onboarding xp",
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
          alt: "An image displaying the problems with the existing experience.",
          caption: false,
        }}
      />

      <TextSection
        title="Telling The Story"
        copy={[
          "I went and shared this story with the immediate team, adjacent stakeholders, and leadership.",
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
          alt: "One of the tools I used to tell the story – a user journey map.",
          caption: true,
          captionText: "One of the tools I used to tell the story – a user journey map.",
        }}
      />

<TextSection
        title="Finding A Solution"
        copy={[
          "I explored solutions and vetted them along the way with the appropriate stakeholders.",
          "Eventually, I landed on a direction that felt promising. I created a quick prototype to do some task-based testing on with new customers, which led to valuable insights that influenced the final direction of the designs.",
        ]}
      />

<ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/mc-paper-solutions.png",
          alt: "I used old fashioned pencil and paper to rapidly thinking through solutions.",
          caption: true,
          captionText: "I used old fashioned pencil and paper to rapidly thinking through solutions.",
        }}
      />

<HeaderSection
        title="The Final Designs"
      />

      <TextSection
        title="Expanding The Onboarding"
        copy={[
          "Our software had a brief onboarding flow before spitting out customers into the full-fledged software. I chose to bring the process of creating divisions and events into that onboarding flow in the form of 5 simple steps.",
        ]}
        chopped={true}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ds-tech.png",
          alt: "Logos of the technologies we used: Radix UI & Tailwind CSS",
          caption: true,
          captionText:
            "I captured and organized notes from the conversations in FigJam.",
        }}
      />

      <TextSection
        title="Figma Architecture"
        copy={[
          "Our goal was a design system spanning all platforms (iOS, Android, Web, etc.). We opted for a multi-file Figma system, starting with a 'Tokens' file for basic elements (colors, typography, icons), followed by a 'Core Components' file for universal components, and finally, platform-specific files.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ds-arch.png",
          alt: "The architecture of the Figma design system.",
          caption: true,
          captionText: "The architecture of the Figma design system.",
        }}
      />

      <TextSection
        title="Building The Tokens"
        copy={[
          "During this phase, we created design tokens (typography, colors, etc.) and integrated closely with the engineering team. Our collaboration involved aligning our design elements with the engineering team's Tailwind implementation and actively participating in their sprint planning. This effort was key to ensuring a unified language between design and engineering.",
        ]}
      />

      <ContentSection
        style="double"
        contentOne={{
          type: "image",
          source: "/ds-colors.png",
          alt: "Our color tokens in Figma.",
          caption: true,
          captionText: "Our color tokens in Figma.",
        }}
        contentTwo={{
          type: "image",
          source: "/ds-tailwind-config.png",
          alt: "The color token equivalent in the Tailwind config file.",
          caption: true,
          captionText:
            "The color token equivalent in the Tailwind config file.",
        }}
      />

      <TextSection
        title="Moving To Components"
        copy={[
          "After establishing the tokens, my focus shifted to designing the global components within the design system. To ensure easy adoption by all team members, I developed comprehensive documentation that was accessible and user-friendly for both designers and developers. This approach not only facilitated smoother integration of the system but also fostered a more collaborative environment across our teams.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ds-docs.png",
          alt: "The architecture of the Figma design system.",
          caption: true,
          captionText: "Documentation for the Toggle Group Item component.",
        }}
      />

      <TextSection
        title="Driving Alignment"
        copy={[
          "A critical goal was to achieve a high degree of alignment between the Figma and React components. This alignment was not just aesthetic, but extended to the deeper aspects of their naming conventions and properties. This approach ensured a smoother workflow between designers and developers and significantly reduced the risk of discrepancies during implementation phases.",
        ]}
      />

      <ContentSection
        style="double"
        contentOne={{
          type: "image",
          source: "/ds-figma-props.png",
          alt: "Our color tokens in Figma.",
          caption: true,
          captionText:
            "This is what the developer sees when inspecting a component in Figma.",
        }}
        contentTwo={{
          type: "image",
          source: "/ds-react-props.png",
          alt: "The color token equivalent in the Tailwind config file.",
          caption: true,
          captionText:
            "These are the props for the Button component in React. Note the similarities to the Figma component.",
        }}
      />

      <TextSection
        title="Getting In A Rhythm"
        copy={[
          "The project gained momentum, leading to the creation of numerous components and a robust system. Things were finally beginning to take shape, and we were able to start building out a few pages with our new system.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ds-rhythm.png",
          alt: "The architecture of the Figma design system.",
          caption: false,
        }}
      />

      <ContentSection
        style="double"
        contentOne={{
          type: "image",
          source: "/ds-comps.png",
          alt: "Our color tokens in Figma.",
          caption: false,
        }}
        contentTwo={{
          type: "image",
          source: "/ds-toggle-button.png",
          alt: "The color token equivalent in the Tailwind config file.",
          caption: false,
        }}
      />

      <div className="-mb-14 lg:-mb-20 2xl:-mb-32">
        <TextSection
          title="A Small Setback"
          copy={[
            "A couple months into the project, the business began facing pressing issues elsewhere, and reallocated engineering resources off of the design system project. This shift could have been a major roadblock, yet it turned out to be a testament to the resilience and utility of our new design system. Even without the complete engineering counterpart, the system brought significant improvements. It was not only more organized than its predecessor but also leveraged some of Figma's advanced features, like variable modes. These enhancements led to a noticeable uptick in our design team's efficiency.",
          ]}
        />
      </div>

      <TextSection
        title="The Encore"
        copy={[
          "I really enjoyed working on this project. The deeper I dove into these technologies, the more I realized that understanding them had the potential to magnify my impact as a designer. This led me to build my portfolio (this site) with React and Tailwind. Through this experience, I not only refined my existing skills but also gained hands-on experience with the languages and learned some more advanced concepts.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ds-nav-code.png",
          alt: "The architecture of the Figma design system.",
          caption: true,
          captionText:
            "Some of the code for the navigation component on this portfolio site.",
        }}
      />

      <div className="mb-14 lg:mb-20 2xl:mb-32">
        <TextSection
          title="Final Thoughts"
          copy={[
            "Despite being deprioritized, the project was a success. The design system provided immediate benefits and prepared us for future developments. It also deepened my understanding of aligning design with development, a valuable asset for future projects.",
          ]}
        />
      </div>

      <Footer />
    </PageContainer>
  );
}

export default MCCS;
