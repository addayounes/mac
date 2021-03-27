import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import LandingPage from "./Pages/Landing Page/LandingPage";
import Content from "./Pages/Section/Content";
import {  TenTalk , Evenements , Activities } from './Pages/Section/Data'


function App() {
  return (

      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/10talk" component={() => <Content sectionData={TenTalk} />} />
          <Route exact path="/events" component={() => <Content sectionData={Evenements} />} />
          <Route exact path="/activities" component={() => <Content sectionData={Activities} />} />
        </div>
      </BrowserRouter>
    
  );
}

export default App;
