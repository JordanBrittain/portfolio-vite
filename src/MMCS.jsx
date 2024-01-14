import CaseHero from "./CaseHero";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import TextSection from "./TextSection";
import ContentSection from "./ContentSection";
import QuoteSection from "./QuoteSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function MMCS() {
  return (
    <PageContainer>
      <ScrollToTop />
      <Navigation />
      <CaseHero
        title="Track & Field Event Management Software"
        description={[
          "These are snapshots of work I did for MileSplit – a company that makes a web app used by coaches, meet hosts, and athletes to plan and manage track and field meets. I was the sole designer on these projects.",
        ]}
      />


      <TextSection
        title="Onboarding"
        copy="MileSplit had an initiative to expand into new regions and increase the adoption of the product. This necessitated that the first time user experience be super intuitive and user-friendly despite the product’s inherent complexity.
        To help achieve this, I designed an onboarding flow that broke down the process of setting up a track meet, a complicated task, into manageable steps."
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mm-onboarding.png",
          alt: "A screen in the redesigned onboarding flow. This is the step in which the user is asked to define the divisions within their meet.",
          caption: true,
          captionText: "A screen in the redesigned onboarding flow. This is the step in which the user is asked to define the divisions within their meet.",
        }}
      />


<TextSection
        title="Managing a Meet"
        copy="Hosting a meet involves much more than just setup—it's the kickoff to an endless list of chores. These range from collecting payments from athletes and coaches, to reviewing entries, and occasionally editing events.
        MileSplit provided a product for managing such tasks but it was clunky, outdated, and unintuitive. I had the opportunity to redesign it from the ground-up, introducing improvements to the product’s usability and aesthetics."
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mm-manage.png",
          alt: "A page within the redesigned meet management product. This view shows the athletes that a team has entered into the meet.",
          caption: true,
          captionText: "A page within the redesigned meet management product. This view shows the athletes that a team has entered into the meet.",
        }}
      />


<TextSection
        title="Registering a Team"
        copy="The MileSplit product offers coaches a tool for registering their teams for meets. As we expanded into new markets, it was imperative to continually refine this experience. Each region has its own unique conventions for their registration process, and they're accustomed to different products.
        I gathered feedback from users and designed numerous improvements to the registration product. The goal was to ensure it not only met but exceeded our customers' expectations, and was superior to any solution they had previously used."
      />

      <ContentSection
        style="single"
        contentOne={{
          type: "image",
          source: "/mm-reg.png",
          alt: "The main view of the registration experience. Coaches are able to sign up their athletes for events while keeping an eye on entry limits.",
          caption: true,
          captionText: "The main view of the registration experience. Coaches are able to sign up their athletes for events while keeping an eye on entry limits.",
        }}
      />

      
      <Footer />
    </PageContainer>
  );
}

export default MMCS;
