import { useState } from 'react'
import './App.css'
import Hero from './Hero'
import Destacado from './Destacado'

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <>
        <Hero/>
        <Destacado/>
    </>
  )
}

export default App
