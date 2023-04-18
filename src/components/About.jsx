import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import SectionWrapper  from '../hoc/SectionWrapper'
import Tech from './Tech'
//  export const  ServiceCard = ({index,title,icon})=>{
//   return(
//     <Tilt className='xs:w-[250px] w-full'>
//      <motion.div
//      variants={fadeIn('right','spring', 0.5*index,0.75)}
//        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//      >
//       <div
//       options={{
//         max:45,
//         scale:1,
//         speed:450,
//       }}
//       className='bg-tertiary min-h-[280px]  px-12 py-5 rounded-[20px] flex justify-evenly items-center flex-col'
//       > 
//        <img  className='w-16 h-16 object-contain' src={icon} alt="" />
//      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
//       </div>

//      </motion.div>
//     </Tilt>
//   )
// }
const About = () => {
  return (
    <div id='#' className=''>
      <motion.div className='mt-32 ' variants={textVariant()}>
          <p className={styles.sectionSubText}>
           Introduction
          </p>
          <h2 className={styles.sectionHeadText}>
            Overview
          </h2>
      </motion.div>
      <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' variants={fadeIn('','',0.1,1)}>
         I'm a skilled frontend developer with experience in  Javascript. I specialize in building user-friendly and responsive web applications using framework like React. As a quick learner, I am always up-to-date with the latest trends and best practices in the industry. I collaborate closely with clients to understand their unique needs and to create efficient, scalable, and elegant solutions that solve real-world problems.
      </motion.p>
      <div className='mt-4 flex flex-wrap gap-10'>
          <Tech/>
              
      </div>
    </div>
  )
}

export default  SectionWrapper(About,'about') 

