import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GridOverlay from './layout/GridOverlay.jsx'
import { BrowserRouter } from "react-router-dom";
import PrinciplaMessage from './components/body/principleMessage/principlaMessage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <GridOverlay /> */}
      <App />
      <PrinciplaMessage/>
  </StrictMode>,
)
