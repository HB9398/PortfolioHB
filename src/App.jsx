// App.jsx
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MainCanvas, CustomNavbar, Computers, Ball, PopupNotification } from './components';
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Tech = React.lazy(() => import('./components/Tech'));
const Works = React.lazy(() => import('./components/Works'));
const Feedbacks = React.lazy(() => import('./components/Feedbacks'));
const Contact = React.lazy(() => import('./components/Contact'));

import './index.css'; 


const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [isMobileSelected, setIsMobileSelected] = useState(false);
  
  const handlePopupClose = () => {
    setShowPopup(false);
  };
  
  const handleMobileSelection = (isChecked) => {
    setIsMobileSelected(isChecked);
  };
  
  return (
    <BrowserRouter>

    

    <div className="relative z-0 bg-primary w-full  h-full" >
    {showPopup && <PopupNotification onClose={handlePopupClose} onMobileSelection={handleMobileSelection} />}
    

    <div style={{ position: "relative", background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))", backgroundBlendMode: "overlay",
    }}>
  
    <div
          className="hover-trigger"
          onMouseEnter={() => document.querySelector('.custom-cursor').classList.add('hovered')}
          onMouseLeave={() => document.querySelector('.custom-cursor').classList.remove('hovered')}
        >
    <CustomNavbar />
    <Hero />

    <About />
    
  
   
    <Experience />
   
    <Tech isMobileSelected={isMobileSelected} />
    <Works />
    <Feedbacks />
  
    <Contact />
    
    </div>
    </div>
    </div>
    </BrowserRouter>
    );
  };
  
  export default App;
  