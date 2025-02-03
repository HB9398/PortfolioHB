import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard=({experience})=>(
  <VerticalTimelineElement 
  contentStyle={{background: '#1d1836', color:'#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
  icon={
    <div className='flex items-center justify-center h-full w-full'>
      <img src={experience.icon}
      className="w-80% h-80% object-contain"/>
    </div>
  }
  >
    <div>
      <h3 className='text-white text-[24px]'>{experience.title}</h3>
    </div>
    <p className='text-secondary text-[24px] font-semibold' style={{margin:0}}>
      {experience.company_name}
    </p>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point,index) => (
        <li
        key={`experience-point-${index}`}
        className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
    <div className='neon-tube' style={{top:"50%"}}></div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className='text-[20px] text-secondary text-bold pt-[5%]'>What I have done so Far...</p>
      <h2 className='text-[25px] text-bold'>Work Experience</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience,index)=>
        (
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
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
    <source src="./assets/background.mp4" type="video/mp4" />
    
    </video>
    </div>
    
    </>
  )
}


export default SectionWrapper(Experience,'work');