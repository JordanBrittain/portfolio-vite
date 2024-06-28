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
      <CaseHero title="Increasing customer LTV through intuitive information architecture." />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ia-splash.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <TextSection
        title="The Product"
        copy={[
          "MileSplit is a vertical software product for people who host track & field meets. The software offers a wide array of features that aid in meet-related tasks like managing events, collecting sign ups, and taking payments. ",
          "Typically, the more features a customer adopts, the more value they get out of the product. This leads to better retention and more money for the business, as some features like payment collection are monetized. ",
          "Helping customers discover and adopt new features was a major lever for the business, and we were not fully leveraging this opportunity. The information architecture of the product was unintuitive, and interaction patterns were inconsistent across different features. This made it hard for customers to discover and adopt functionality within the product.",
          "We needed to make it easier for our customers to fully utilize our platform, and I led the charge on solving this problem.",
        ]}
      />

      <TextSection
        title="Recognizing The Problem"
        copy={[
          "Our existing product was a maze. Despite working on the product for years, I would still occasionally come across pages I'd never seen before. Functionality wasn't where customers expected it to be, and there was nothing to indicate their location within the product. Additionally, the presentation of functionality varied drastically, often without any apparent reason.",
          "This poor user experience had tangible consequences. We would release features our customers had eagerly requested, only to witness extremely slow adoption rates. When we inquired if our customers were aware of these features, including those that had been available for years, responses ranged from unawareness to confusion.",
          "The problem was clear—our customers struggled to find and use the features they needed.",
        ]}
        chopped={true}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ia-existing-1.png",
          alt: "N/A",
          caption: true,
          captionText:
            "This is just one of several lengthy pages of endless form fields from the existing product. It’s no wonder why customers were glossing over functionality.",
        }}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ia-existing-2.png",
          alt: "N/A",
          caption: true,
          captionText:
            "Another page from the existing product. How would a customer know where they were in the architecture? Would they be able to find their way back to this page?",
        }}
      />

      <TextSection
        title="Why The Problem Was Worth Solving"
        copy={[
          "MileSplit's success, similar to other vertical software, lies in providing a comprehensive suite of solutions to the customer. MileSplit's revenue directly correlates with how extensively customers engage with monetized features such as payment collection. We also recognized that the more features a customer utilizes–regardless of monetization–the more likely they are to stick around. So, increasing our customers ability to find and adopt functionality within the product has a direct impact on their life time value.",
          "Additionally, the business was planning on transitioning the product off of its outdated front-end stack and onto React, necessitating that the front-end of the product be rebuilt. This made it an opportune time to make some architectural changes.",
        ]}
      />

      <TextSection
        title="Getting A Lay Of The Land"
        copy={[
          "Even though I had been working on this product for quite some time, there were still areas that were unfamiliar to me, and I didn't have a solid grasp on all the functionality and data it offered—nobody really did.",
          "So, to gain a bird's-eye view of the product and everything it offered, I conducted a breakdown of the product's information architecture. It was a lot to take in: a complex, 42-page system that offered tons of information and functionality. However, this exercise provided me and the rest of the team with a better understanding of what we were dealing with and became a valuable asset for us to reference throughout the project's duration.",
        ]}
        chopped={true}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ia-breakdown.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ia-close.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <TextSection
        title="Knowing What To Prioritize"
        copy={[
          "To maintain a manageable project scope, it was essential to identify which features and functionalities were most critical to our customers. Ideally, product metrics would have guided this decision-making process, but such data was not available. So, I leveraged previous research I'd done on our customer base to gain insights into their primary 'jobs to be done' regarding our software and the specific features and functionalities that facilitated these tasks.",
        ]}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ia-arch.png",
          alt: "N/A",
          caption: true,
          captionText:
            "These are some archetype documents I used to understand which features & functionality I should prioritize; they are an artifact of a previous research project I conducted. ",
        }}
      />

      <TextSection
        title="Where Should Things Go?"
        copy={[
          "This part was a bit trickier. I had a grasp on the existing product, its architecture, and the features/functionality most important to our customers. However, the precise issues with the current architecture remained unclear. How did it deviate from our customers' expectations? What should the ideal architecture look like?",
          "To uncover these insights, I conducted a card-sorting exercise. I enlisted the help of internal stakeholders for this exercise, aiming to understand their perspective on how they conceptualized the info and functionality of the product.",
        ]}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ia-card-sort.png",
          alt: "N/A",
          caption: true,
          captionText: "A screenshot from the card sorting exercise.",
        }}
      />

      <TextSection
        title="Bringing Everyone Along For The Ride"
        copy={[
          "Given the project's scope, the number of stakeholders involved, and the significant investment of resources, it was critical to work transparently and collaboratively.",
          "This was achieved through conventional means such as meetings and Slack messages, complemented by a particularly effective method—blog posts. These posts, published on our internal documentation tool, served as comprehensive status updates. The beauty of these posts is that it allowed team members to stay informed at their convenience, and ensured that discussions and decisions were well-documented for future reference. Unlike ephemeral conversations in meetings or Slack, this approach preserved valuable insights, preventing them from disappearing into the ether.",
        ]}
      />

      <TextSection
        title="Socializing The Process & Roadmap"
        copy={[
          "In addition to the blog posts, I maintained detailed documentation and a roadmap, readily accessible to anyone within the company, which I regularly shared with stakeholders.",
          "This approach provided transparency regarding ongoing tasks, completed work, and where we were headed. It fostered engaging discussions that resulted in significant process improvements and generated widespread enthusiasm about the direction and vision.",
        ]}
        chopped={true}
      />

      <ContentSection
        style="inline"
        contentOne={{
          type: "image",
          source: "/ia-epic.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ia-timeline.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <TextSection
        title="A More Intuitive Information Architecture"
        copy={[
          "Armed with insights from the card-sorting exercise and having established processes for sharing the work, the next step was to develop a more intuitive IA to enhance feature discovery and adoption.",
          'It was clear from the card sorting exercise that our customers thought of a track meet in terms of "nodes" such as teams, athletes, entries, and events. Since all functionality and tasks are centered around these interconnected nodes, it logically follows that the product\'s IA should also be organized around them. Therefore, I proposed and established this new, albeit somewhat abstract, IA as the guiding principle for viewing the product as we progressed to the next phases.',
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ia-ia.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <TextSection
        title="Applying Navigation To The Architecture"
        copy={[
          "A great IA is crucial, but useless if there are not equally great navigation patterns for traversing it. I drew upon best practices in navigation and examined the navigation patterns of other products that our customers frequently used and appreciated. This approach helped me identify navigation patterns that were both intuitive to our customers and effective. After thoroughly exploring and evaluating the options, I decided on a specific direction.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "video",
          source: "/ia-vid-wide.mp4",
          alt: "N/A",
          caption: false,
        }}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ia-nav-breakdown.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <TextSection
        title="Painting The Vision"
        copy={[
          "After socializing the new IA and wireframe prototype, demonstrating its potential to enhance feature discovery and adoption, the solution began to feel more tangible to both the team and stakeholders throughout the organization. They started to grasp the significant benefits that the new IA and navigation could bring to the business.",
          "It was time to capitalize on this momentum by illustrating the navigation patterns and key features of the product in a higher fidelity, in order to stir excitement and make it feel even more real.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ia-full-light.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <ContentSection
        style="double"
        contentOne={{
          type: "image",
          source: "/ia-nav-closeup.png",
          alt: "N/A",
          caption: false,
        }}
        contentTwo={{
          type: "image",
          source: "/ia-nav-mobile.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ia-modal.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ia-headers.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ia-full-dark.png",
          alt: "N/A",
          caption: false,
        }}
      />

      <TextSection
        title="Increasing Feature Discoverability"
        copy={[
          "A key initiative at our company was to roll out payment collection functionality. This feature enables customers to process payments from meet entrants directly through MileSplit, significantly streamlining their workflow and offering substantial revenue potential for our business through small transaction fees. I wanted to show how this new IA & navigation would help us easily integrate and promote new features, like payments",
          "In our old architecture, we would have had to place this new payments feature in a less accessible part of the architecture. However, with the new system, we could prominently position it at the top level.",
        ]}
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/ia-payments.png",
          alt: "N/A",
          caption: false,
        }}
      />

<div className="mb-14 lg:mb-20 2xl:mb-32">
      <TextSection
        title="Upward And Onward"
        copy={[
          "This vision of the MileSplit product, with an improved architecture and navigation system that fosters feature discovery and adoption, captured the attention of stakeholders throughout the organization and sparked discussions that led to the discovery of an even greater opportunity.",
          "Consequently, this particular project was paused to pursue this newfound opportunity.",
          "Although it was somewhat disappointing not to see these designs come to fruition immediately, there remained a strong sense of achievement. This project laid the groundwork for a more significant initiative poised to deliver far more impact on the overall business.",
        ]}
      />
      </div>

      <Footer />
    </PageContainer>
  );
}

export default MCCS;
