import { useState } from 'react'
import './App.css'

import ContactForm from './component/contactForm/contact'
//import AboutSection from './component/aboutSection/AboutSection'
import Dashboard from './component/dashboard/dashboard'
import ProjectShowcase from './component/ProjShow/ProjectShowcases'
import Footer from './component/Footer/footer'



function App() {
  return (
<>
<Dashboard/>
<ProjectShowcase/>
<ContactForm/> 
<Footer/>
{/*  
<Dashboard/>
<AboutSection/> 
<ProjectShowcase/>
<ContactForm/> 
<Footer/>
*/}

</>

  )
}

export default App
