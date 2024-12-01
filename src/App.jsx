import { useState } from 'react'
import './App.css'
import About from './components/About'
import Picture from './components/Picture'
import Contact from './components/Contact'
import Work from './components/Work'
import Education from './components/Education'
import Skills from './components/Skills'
import Languages from './components/Languages'

function App() {
  return (
    <div className='container'>
      <div className='left'>
        <Picture />
        <Contact />
        <Skills />
        <Languages/>
      </div>
      <div className='right'>
        <About />
        <Education />
        <Work/>
      </div>
    </div>
  )
}

export default App
