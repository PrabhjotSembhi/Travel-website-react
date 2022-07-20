import "./App.css";
import { Navbar, Banner } from "./components";
import {
  Services,
  Destinations,
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
      <Topcities />
      <Testimonials />
      <Optin />
   
      <Footer />
    </div>
  );
}

export default App;
