import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({index, testimonial, name,designation,company, image}) =>{ 
  return(

    <motion.div className="bg-black-200 p-10 rounded-3xl xs:w=[320px] w-full"
    variants={fadeIn("spring",0,0)}>
      
      <div className='mt-1'>
      <p className=" text-[#008080] font-sans text-[48px]">"</p>
      <p className='text-white tracking-wider text-[18px]'>
        {testimonial}
      </p>
      <div className='mt-7 flex items-center gap-1 justify-between'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='text-[#008080]'>@</span>{name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
      </div>
    </div>
      
    </motion.div>
    

  )
}
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px] '>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>
            What othes say...
          </p>
          <h2 className={`${styles.sectionHeadText}`}>
            References.
          </h2>
        </motion>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {testimonials.map((testimonial,index)=>(
        <FeedbackCard 
        key= {testimonial.name}
        index={testimonial.index}
        testimonial={testimonial.testimonial}
        name={testimonial.name}
        designation={testimonial.designation}
        company={testimonial.company}
        image={testimonial.image} 
        
        />
      )
      )
      }
      </div>
      <div className='neon-tube-right' style={{top:"52%", height:"90%"}}></div>
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
  )
}

export default SectionWrapper(Feedbacks,"");