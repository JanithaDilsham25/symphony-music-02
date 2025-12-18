import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topic from './components/body/topicComponent/Topic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-screen bg-white"></div>
      <Topic title="Welcome to Symphony Music" subtitle="Your gateway to musical excellence" />
    </>
  )
}

export default App
