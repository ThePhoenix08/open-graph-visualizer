// import AnimatedGlobe from "../Home/AnimatedGlobe";
// import CallToAction from "../Home/CallToAction";
// import Features from "../Home/Features";
import Hero from "../Home/Hero";
// import VisualizedDemo from "../Home/VisualizedDemo";

function Home() {
  return (
    <div className="w-full h-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <div className="content">
        <Hero />
        {/* <Features />
        <VisualizedDemo />
        <AnimatedGlobe />
        <CallToAction /> */}
      </div>
    </div>
  );
}

export default Home;
