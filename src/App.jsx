import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Footer,Hero,Navbar,Works,StarsCanvas} from './components'
const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
     <div className='bg-herp-pattern  bg-cover bg-no-repeat bg-center '>
      <Navbar/>
      <Hero/>
     </div>
     <About/>
     <Works/>
       <div>
          <Contact/>
          <StarsCanvas/>
         
       </div>
       <Footer/>

    </div>
    </BrowserRouter>
  )
}

export default App