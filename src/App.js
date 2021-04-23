import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import ContentDetails from "./Pages/Content Details/ContentDetails";
import LandingPage from "./Pages/Landing Page/LandingPage";
import { TenTalkSlide } from './Components/Slideshow/SliderData'
import { TenTalkDetails, CharityDetails, MacDayDetails, LanguageSpotDetails,
WorkshopDetails, WebDesignDetails, PrinterDetails, TrainingsDetails }
from "./Pages/Content Details/DetailsData"
import Activities from "./Pages/Activities/Activities";
import AboutUs from "./Pages/About Us/AboutUs.jsx"
import Events from "./Pages/Events/Events";
import Contact from "./Pages/Contact/Contact";
import JoinUs from './Pages/Join Us/JoinUs'
import Sirius from "./Pages/Sirius/Sirius";
import Cours from './Pages/Cours/Cours'
import GoToTop from "./Components/Go To Top/GoToTop";
import Footer from "./Components/Footer/Footer";
import Error from "./Pages/Error/Error";


function App() {
  return (
      <BrowserRouter>
        <div>
          <Navbar />
          <GoToTop />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Activities" component={Activities} />
            <Route path="/Cours" component={Cours} />
            <Route path="/Sirius" component={Sirius} />
            <Route path="/Rejoindre" component={JoinUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={AboutUs} />
            <Route path="/Events" component={Events} />
            <Route path="/10talk" component={() => <ContentDetails SliderData={TenTalkSlide} ContentDetails={TenTalkDetails} />} />
            <Route path="/Charity" component={() => <ContentDetails ContentDetails={CharityDetails} />} />
            <Route path="/MACday" component={() => <ContentDetails ContentDetails={MacDayDetails} />} />
            <Route path="/LangageSpot" component={() => <ContentDetails ContentDetails={LanguageSpotDetails} />} />
            <Route path="/Workshop" component={() => <ContentDetails ContentDetails={WorkshopDetails} />} />
            <Route path="/WebDesign" component={() => <ContentDetails ContentDetails={WebDesignDetails} />} />
            <Route path="/3DPrinter" component={() => <ContentDetails ContentDetails={PrinterDetails} />} />
            <Route path="/Trainings" component={() => <ContentDetails ContentDetails={TrainingsDetails} />} />
          </Switch>
          <Footer /> 
        </div>
      </BrowserRouter>
    
  );
}

export default App;
