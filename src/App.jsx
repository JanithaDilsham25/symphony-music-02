import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/headercontent/cont'
import Student from './components/body/topStudent/student'
import HomePage from './pages/HomePage'
import EventPage from './pages/EventPage'
import EventCard from './components/EventsPageComponents/EventCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
      {/* <EventPage/> */}
 
    </>
  )
}

export default App
