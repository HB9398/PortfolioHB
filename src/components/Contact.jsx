import React from 'react'
import { useState,useRef } from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Earth } from './canvas';
import { styles } from '../styles';
import MainCanvas from './MainCanvas';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { Suspense } from 'react';
import{fadeIn, textVariant} from '../utils/motion';
//template_6h8zdhq 
//service_yxadhyr
//9avdMTTAgnmf_sz6Z

const Contact = () => {
  const formRef = useRef();
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',

  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const{ name, value} = target;

    setForm({ ...form,[name]: value });
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_yxadhyr', 
      'template_6h8zdhq',
    {
      from_name: form.name,
      to_name: 'Haren',
      from_email: form.email,
      to_email: 'haren.bhatia98@gmail.com',
      message: form.message,
    }, 
    '9avdMTTAgnmf_sz6Z'
    ).then(() =>
    {
      setLoading(false);
      alert('Thank you I will get back to you as soon as possible.')
      setForm({
        name:'',
        email: '',
        message: '',
      });

      }, (error) => {
        setLoading(false);
        console.errro(error);
        alert('Oops... Looks like something went wrong.')
      }
      );

    };

  return(
    
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '>
      <motion.div className='flex-[0.85] bg-black-100 p-8 rounded-2xl' 
      variants={slideIn('left',"tween", 0.2, 1)}>
      <p className={styles.sectionSubText}>
        Get in touch
      </p>
      <h3 className={styles.sectionHeadText}>
        Contact.
      </h3>
      
      <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-12 gap-8 flex flex-col '
      >
    
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Email</span>
          <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
          rows="7"
          name="message" 
          value={form.message}
          onChange={handleChange}
          placeholder="What's up?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <button className='py-3 px-8 bg-[#008080] outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' type="submit">
          {loading? 'Sending...' : 'Send'}
        </button>
      
      </form> 
    
      </motion.div>
        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <MainCanvas>
        { <Earth /> }
        
        </MainCanvas> 
      </motion.div> 
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.3
        }}
        >
      <source src="src/assets/background.mp4" type="video/mp4" />
        
      </video>
       
     
       
    </div>
  )
}

export default SectionWrapper(Contact,"contact");