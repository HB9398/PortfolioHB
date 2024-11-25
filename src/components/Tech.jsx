import React, { useState } from 'react';
import { useTexture } from '@react-three/drei';
import { Ball } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import MainCanvas from './MainCanvas';

const Tech = ({ icon }) => {
  const [isMobileSelected, setIsMobileSelected] = useState(false);

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='flex flex-wrap justify-center gap-5'>
        {technologies.map((technology) => (
          <div className='w-1/4' key={technology.name}>
            <MainCanvas controls={{ autoRotate: false }}>
              <Ball imgUrl={technology.icon} name={technology.name} isMobile={isMobileSelected} />
            </MainCanvas>
          </div>
        ))}
      </div>
      <div className='neon-tube-right'style={{right:"0%"}}></div>
    </div>
    
  );
};

export default SectionWrapper(Tech, " ");
