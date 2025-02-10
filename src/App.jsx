import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='background1 scroll-smooth'>
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
