import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./Navigation.jsx";
import PageContainer from "./PageContainer";
import HeroSection from "./HeroSection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageContainer>
      <div className="h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      </div>
    </PageContainer>
  </React.StrictMode>
);
