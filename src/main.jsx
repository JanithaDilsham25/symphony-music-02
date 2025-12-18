import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GridOverlay from './layout/GridOverlay.jsx'
import Student from './components/body/topStudent/student.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <GridOverlay /> */}
    <App />
  </StrictMode>,
)
