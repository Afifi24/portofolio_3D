import React,{useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../style'
import {EarthCanvas} from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import {slideIn } from '../utils/motion'
import { fromHalfFloat } from 'three/src/extras/DataUtils'
const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  })
  const handleChange = (e)=>{
       const {name,value} = e.target
       setForm({...form,[name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    emailjs.send(' service_935t41g','template_xju9g5v',
    {
      from_name:form.name,
      to_name: 'Afifi',
      from_email: form.email,
      to_email: 'afifi71brahim@gmail.com',
      message:form.message
    },
    'o5IlRGfbPD5CEy8v2'
    )
    .then(()=>{
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible')
      setForm({
        name:'',
        email:'',
        message:'',
      })
    }, (error)=>{
      setLoading(false)
      alert('Somthing went wrong')
    } )
  }
 
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
       variants={slideIn('left', 'twen',0.2,1)}
       className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
       <p className={styles.sectionSubText}>Get in Touch</p>
       <h3 className={styles.sectionHeadText}>Contact</h3>
       <form
         ref={formRef} 
         onSubmit={handleSubmit}
         className='mt-12 flex flex-col gap-8'
       >
                <label className='flex flex-col' htmlFor="">
                    <span className='text-white font-medium'>Your Name</span>
                    <input 
                    type='text'
                     name='name'
                     value={form.name}
                     onChange={handleChange}
                     placeholder="What's your name?"
                     className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col' htmlFor="">
                    <span className='text-white font-medium'>Your Email</span>
                    <input 
                    type='email'
                     name='email'
                     value={form.email}
                     onChange={handleChange}
                     placeholder="What's your email?"
                     className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col' htmlFor="">
                    <span className='text-white font-medium'>Your Message</span>
                    <textarea
                    rows='7'
                     name='messagw'
                     value={form.message}
                     onChange={handleChange}
                     placeholder="What do you want to say?"
                     className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>
                <button type='submit'
                className='bg-tertiary w-fit py-2 px-8 outline-none text-white fond-bold shadow-md shadow-primary rounded-xl'
                >
                  {loading ? 'Sending...':'send'}

                </button>
       </form>
      </motion.div>
      <motion.div
      variants={slideIn('right', 'twen',0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
            <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper( Contact, 'contact')