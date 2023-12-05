import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContactButton from "./ContactButton.jsx";
import Navigation from "./Navigation.jsx";
import PageContainer from "./PageContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageContainer>
      <Navigation />
      <ContactButton />
    </PageContainer>
  </React.StrictMode>
);
