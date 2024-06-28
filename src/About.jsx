import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

function About() {
  return (
    
    <PageContainer>
      <ScrollToTop />
      <Navigation />
    <div id="about" className="w-full pt-16 pb-6 lg:pt-38 lg:pb-72 flex flex-col items-center">
       
      <div className="w-cs flex flex-col gap-4">
      <img src="/bike-pack.png" className="rounded mb-12"></img>
        <h1 className="font-display text-4xl lg:text-3xl lg:leading-tight font-semibold w-full text-slate-950">
          About Me
        </h1>
        <p className="font-normal text-xl text-slate-700 leading-relaxed">
          I’m Jordan, a senior product designer with over 6 years of experience
          designing B2B products & features from 0 to 1. I typically work with
          lean teams and wear a lot of hats from researcher to UI/UX designer to even writing some code every now and then.
          </p>
          
          <p className="font-normal text-xl text-slate-700 leading-relaxed">
          I prefer a fast design process involving tight feedback loops with both users and internal
          stakeholders. I believe that diverse perspective is key to making
          great products, so I actively solicit feedback and work transparently
          so that my designs are not only loved by users but the internal team
          as well.
          </p>
          
          <p className="font-normal text-xl text-slate-700 leading-relaxed">
          When I’m not working, I enjoy spending time outdoors, staying
          active, and hanging out with friends. You'll often find me running,
          hiking, or traveling. Some recent adventures of mine include a
          bike-packing trip in Italy and running my first marathon.
        </p>
      </div>
    </div>
    <Footer />
    </PageContainer>
  );
}

export default About;
