import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Classes from "./pages/Classes";
import Gallery from "./pages/Gallery";
import Event from "./pages/Event";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/events" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;