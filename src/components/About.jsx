import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import{fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ">
        <div
          options={{
          max:45, 
          scale:1, 
          speed:450
            }} className='bg-tertiary rounded-[20px] px-12 py-5 min-h-[280px] w-50 flex justify-evenly items-center flex-col ' >
        
        <img src={icon} alt={title} className ="w-16 h-16 justify-evenly items-center object-contain"/>
        <h3 className='text-white text-[20px] text-center text-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
   
      <motion.div variants={textVariant()}>
        <p className='text-[20px] text-secondary text-bold'>Introduction</p>
        <h2 className='text-[25px] text-bold'>Overview.</h2>
      </motion.div> 
      <motion.p variants={fadeIn("","",0.1,1)} className="text-justify mt-4 text-[17px] text-bold leading-[30px]">
      Building products with experience (4+ years) in product management, data engineering, and machine learning. Launched  4 e-commerce and 2 gen. AI products, (3 end-to-end), achieving 45% revenue growth for ~2500 brands in 10+ countries.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
      <div className='neon-tube-right' style={{top:"50%", height:"100%"}}></div>
        {services.map((service, index) => (
          <ServiceCard key={service.title} title={service.title} index={index} icon={service.icon} {...services}/>
        ))}
      </div> 
      
      
    </>
  )
}

export default SectionWrapper(About,'about');