import Aboutus from "./Aboutus";
import Constactus from "./Constactus";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Aboutus/>
      <Features/>
      <Constactus/>
    </>
  );
}

export default Homepage;
