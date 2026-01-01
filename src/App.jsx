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
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
