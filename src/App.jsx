import Navigation from "./Navigation.jsx";
import PageContainer from "./PageContainer";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop.jsx";
import MyWorkText from "./MyWorkText.jsx";

function App() {
  return (
    <PageContainer>
      <ScrollToTop />

      <Navigation />
      <HeroSection />

      <MyWorkText />


      <Footer />
    </PageContainer>
  );
}

export default App;
