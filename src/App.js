import "./App.css";
import { Navbar, Banner } from "./components";
import {
  Services,
  Destinations,
  Partners,
  Tourpacks,
  Topcities,
  Testimonials,
  Optin,
  Footer,
} from "./container";

function App() {
  return (
    <div className="App">
      <div className="bannerBG">
        <Navbar />
        <Banner />
      </div>
      <Services />
      <Destinations />
      <Tourpacks />
      <Partners />
      <Topcities />
      <Testimonials />
      <Optin />
      <Footer />
    </div>
  );
}

export default App;
