import './App.css'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero/Hero'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Navbar
      counter={counter}
      />
      <Hero 
      counter={counter}
      setCounter={setCounter}
      />
    </>
  )
}

export default App
