import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/headerContent/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<h1>This is Classes</h1>} />
          <Route path="/events" element={<h1>This is Events</h1>} />
          <Route path="/gallery" element={<h1>This is gallery</h1>} />
          <Route path="/aboutus" element={<h1>This is About Us</h1>} />
          <Route path="/contactus" element={<h1>This is Contact Us</h1>} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;