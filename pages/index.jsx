import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./screens/about";
import Events from "./screens/events";
import Home from "./screens/home";
import Itenaryscreen from "./screens/itenaryscreen";
import Sponsors from './../components/Sponsors';
import Motivation from './../components/Motivation';
import PastSpeakers from "../components/PastSpeakers"

export default function Root() {

  return (
    <div>
      <Navbar  />
      <Home />
    
      <About />
      <Itenaryscreen />
      <Events />
      <Sponsors/>
      {/* <PastSpeakers/> */}
      <Footer />
    </div>
  );
}

