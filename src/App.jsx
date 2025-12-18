import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/headercontent/cont'
import Student from './components/body/topStudent/student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Student/>
    </>
  )
}

export default App
