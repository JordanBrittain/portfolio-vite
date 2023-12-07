import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContactButton from "./ContactButton.jsx";
import Navigation from "./Navigation.jsx";
import PageContainer from "./PageContainer";
import ArrowButton from "./ArrowButton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageContainer>
      <Navigation />
      <ArrowButton />
    </PageContainer>
  </React.StrictMode>
);
