import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomNavbar, PopupNotification } from './components';
import './index.css';

// Lazy Load Components
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Tech = React.lazy(() => import('./components/Tech'));
const Works = React.lazy(() => import('./components/Works'));
const Feedbacks = React.lazy(() => import('./components/Feedbacks'));
const Contact = React.lazy(() => import('./components/Contact'));

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
    <Router>
      <div className="relative z-0 bg-primary w-full h-full">
        {/* Popup Notification */}
        {showPopup && <PopupNotification onClose={handlePopupClose} onMobileSelection={handleMobileSelection} />}

        {/* Persistent Navbar */}
        <CustomNavbar />

        {/* Page Content with Routes */}
        <div
          className="hover-trigger"
          onMouseEnter={() => document.querySelector('.custom-cursor').classList.add('hovered')}
          onMouseLeave={() => document.querySelector('.custom-cursor').classList.remove('hovered')}
          style={{
            position: "relative", 
            background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))", 
            backgroundBlendMode: "overlay"
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Hero + About (On the same page) */}
              <Route path="/" element={<><Hero /><About /></>} />
              
              {/* Experience + Tech (On the same page) */}
              <Route path="/experience-tech" element={<><Experience /><Tech isMobileSelected={isMobileSelected} /></>} />
              
              {/* Other Pages */}
              <Route path="/works" element={<Works />} />
              <Route path="/feedbacks" element={<Feedbacks />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
