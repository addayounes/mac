import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import ContentDetails from "./Pages/Content Details/ContentDetails";
import LandingPage from "./Pages/Landing Page/LandingPage";
import Content from "./Pages/Section/Content";
import { TenTalk } from './Pages/Section/Data'
import { TenTalkSlide } from './Components/Slideshow/SliderData'
import { TenTalkDetails, CharityDetails, MacDayDetails, LanguageSpotDetails, WorkshopDetails, WebDesignDetails, PrinterDetails, TrainingsDetails } from "./Pages/Content Details/DetailsData"
import Activities from "./Pages/Activities/Activities";
import AboutUs from "./Pages/About Us/AboutUs.jsx"
import Events from "./Pages/Events/Events";
import Contact from "./Pages/Contact/Contact";


function App() {
  return (

      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route path="/10talk" component={() => <Content sectionData={TenTalk} />} />
          {/* <Route path="/Contact" component={() => <ContentDetails SliderData={TenTalkSlide} ContentDetails={TenTalkDetails} />} /> */}
          <Route path="/Activities" component={() => <Activities />} />
          <Route path="/contact" component={() => <Contact />} />
          <Route path="/about" component={() => <AboutUs />} />
          <Route path="/Events" component={() => <Events />} />
          <Route path="/Charity" component={() => <ContentDetails ContentDetails={CharityDetails} />} />
          <Route path="/MACday" component={() => <ContentDetails ContentDetails={MacDayDetails} />} />
          <Route path="/LangageSpot" component={() => <ContentDetails ContentDetails={LanguageSpotDetails} />} />
          <Route path="/Workshop" component={() => <ContentDetails ContentDetails={WorkshopDetails} />} />
          <Route path="/WebDesign" component={() => <ContentDetails ContentDetails={WebDesignDetails} />} />
          <Route path="/3DPrinter" component={() => <ContentDetails ContentDetails={PrinterDetails} />} />
          <Route path="/Trainings" component={() => <ContentDetails ContentDetails={TrainingsDetails} />} />
        </div>
      </BrowserRouter>
    
  );
}

export default App;
