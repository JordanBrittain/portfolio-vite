import CaseHero from "./CaseHero";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import TextSection from "./TextSection";
import ContentSection from "./ContentSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function DSCS() {
  return (
    <PageContainer>
      <ScrollToTop />
      <Navigation />
      
      <CaseHero
        title="How I helped our product team ship faster with a design system."
      />

<ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ds-rhythm.png",
          alt: "images of the onboarding xp",
          caption: false,
        }}
      />

<TextSection
          title="The Backstory"
          copy={[
            "In early 2023, as FloSports was transitioning from Angular to React, we seized the opportunity to create a design system for our consumer-facing products – recognizing the significant productivity boosts it could offer to both design and engineering. My involvement began in the planning stages, and as the project progressed, I stepped into a lead role.",
          ]}
        />

      
        <TextSection
          title="Why A Design System?"
          copy={[
            "For years, our design and engineering teams struggled with an outdated design system that was often the bottleneck in our process. We faced constant issues like design inconsistencies and lengthy, often difficult QA sessions. Our system was slowing us down, and we knew that our designs were useless if they couldn’t quickly move from Figma to the real product. Understanding that a robust design system is a crucial part of this process, our design and engineering teams set out to create a new, more effective design system.",
          ]}
          chopped={true}
        />
      





      <TextSection
        title="Setting Ourselves Up For Success"
        copy={[
          "Creating the system from scratch would have been inefficient. We decided to leverage open-source libraries to expedite the process. After thorough research, we chose Tailwind for styling and Radix UI for basic components. This combination struck a balance between efficiency and flexibility.",
        ]}
        chopped={true}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ds-tech.png",
          alt: "Logos of the technologies we used: Radix UI & Tailwind CSS",
          caption: false,
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

export default DSCS;
