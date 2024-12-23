import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Contact from './Components/Contact/Contact'
import Project from './Components/myProject/Project'
import Skill from './Components/Skills/Skill'



const App = () => {
 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App