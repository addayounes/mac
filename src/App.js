import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import page from "./Components/page";
import LandingPage from "./Pages/Landing Page/LandingPage";
import Content from "./Pages/Section/Content";
import { sectionData } from './Pages/Section/Data'

function App() {
  return (

      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/siruis" component={page} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={Content} {...sectionData} />
        </div>
      </BrowserRouter>
    
  );
}

export default App;
