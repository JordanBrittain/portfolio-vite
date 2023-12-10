import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./Navigation.jsx";
import PageContainer from "./PageContainer";
import HeroSection from "./HeroSection";
import SectionHeader from "./SectionHeader";
import CaseStudyTile from "./CaseStudyTile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageContainer>
      <div className="h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      </div>

      <SectionHeader title="Featured Work"/>

      <div className="px-site w-full grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-14 pb-32 lg:pb-40">
      
      <CaseStudyTile
       imgSrc="/ss-1.png" 
       title="FloSports Schedule & Scores" 
       subtext="A ground-up redesign of a feature in our native mobile app."/>

<CaseStudyTile
       imgSrc="/ss-1.png" 
       title="FloSports Schedule & Scores" 
       subtext="A ground-up redesign of a feature in our native mobile app."/>

<CaseStudyTile
       imgSrc="/ss-1.png" 
       title="FloSports Schedule & Scores" 
       subtext="A ground-up redesign of a feature in our native mobile app."/>

      </div>

    </PageContainer>
  </React.StrictMode>
);
