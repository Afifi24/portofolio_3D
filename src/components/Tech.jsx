import React from 'react'
import {BallCanvas} from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import {technologies} from '../constants'
import {motion} from 'framer-motion'
import {fadeIn,textVariant} from '../utils/motion'
import { styles } from '../style'
const Tech = () => {
  return (
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      
       {technologies.map((technology)=>(
         <div className='w-28 h-28 ' key={technology.name}>
          <BallCanvas icon={technology.icon}/>

         </div>
       ))}
    </div>
  )
}

export default SectionWrapper(Tech,'')