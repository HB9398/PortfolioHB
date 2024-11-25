import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import MainCanvas from './MainCanvas'; // Import the MainCanvas component
import { Computers } from './canvas'; // Import the Computers component
import { Preload } from '@react-three/drei';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" container="relative">
    
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    {/* <div className="flex flex-col justify-center items-center mt-5">
    <div className="w-5 h-5 rounded-full bg-[#39CCCC]"/>
    <div className="w-1 h-40 bg-gradient-to-r from-[#39CCCC] " />
  </div> */}
  <div>
  
  <h1 className={`${styles.heroHeadText} text-white`} >
  Hi! I am <span className='text-[#39CCCC]'>Haren.</span>
  </h1>
  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
  Juggling Product, Data engineering and AI development.<br className='sm:block hidden'/> 
  </p>
  <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{fontSize: 10}}>
    PS: Feel free to spin mini-me! I still won't drop the ball on any of my tasks.
  </p>
  
  </div>
  </div>
  
  {/* Use the MainCanvas component here */}
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
    opacity: 0.8
  }}
  >
  <source src="src/assets/background.mp4" type="video/mp4" />
  
  </video>
  <MainCanvas>
  <Computers />
  < Preload all/>
  </MainCanvas>
  
  <div className='hero-container absolute top-310 sm:bottom-5 bottom-28 w-full flex justify-center items-center'>
  
  <a href='#about' className='z-20'>
  
  <div container="relative"
  className=' h-[64px] w-[35px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
  style={{
    '@media (maxWidth: 640px)': {
      marginTop: '5rem', 
    },
  }}
  >
  <motion.div 
  animate={{ y: [0, 30, 0] }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'loop'
  }}
  className="w-3 h-3 rounded-full bg-secondary mb-1"
  />
  </div>
  </a>
  </div>
  <div class="neon-tube" style={{height: "100%"}}></div>
  <div class="liquid"></div>
  </section>
  )
}

export default Hero;
