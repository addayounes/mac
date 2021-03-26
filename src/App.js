import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import page from "./Components/page";
import LandingPage from "./Pages/Landing Page/LandingPage";

function App() {
  return (

      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/siruis" component={page} />
          <Route exact path="/" component={LandingPage} />
        </div>
      </BrowserRouter>
    
  );
}

export default App;
