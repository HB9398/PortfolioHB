// PopupNotification.jsx
import React, { useState } from 'react';

const PopupNotification = ({ onClose }) => {
  const [desktopChecked, setDesktopChecked] = useState(false);
  const [mobileChecked, setMobileChecked] = useState(false);
  const [isEnterClicked, setIsEnterClicked] = useState(false);

  const handleDesktopCheckboxChange = () => {
    setDesktopChecked(true);
    setMobileChecked(false);
  };

  const handleMobileCheckboxChange = () => {
    setDesktopChecked(false);
    setMobileChecked(true);
  };

  const handleEnterClick = () => {
    if (desktopChecked || mobileChecked) {
      setIsEnterClicked(true);
      onClose();
    } else {
      alert('Please check at least one checkbox.');
    }
  };

  return (
    <div className="popup-notification-overlay">
      <div className="popup-notification">
        <div className="popup-content">
          <h2 style={{textAlign:'left'}}> An immersive website is best viewed on a desktop using chrome.
          <h3 className='mt-2' >What you are using?</h3>
          <ul className='mt-2'>
            <li>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="desktop"
                  checked={desktopChecked}
                  onChange={handleDesktopCheckboxChange}
                />
                <span className="checkbox-text">  Desktop </span>
              </label>
            </li>
            <li>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="mobile"
                  checked={mobileChecked}
                  onChange={handleMobileCheckboxChange}
                />
                <span className="checkbox-text">  Mobile (:|)</span>
              </label>
            </li>
          </ul>
          </h2>
          
          
          <button
            onClick={handleEnterClick}
            className={`mt-2 enter-button ${isEnterClicked ? 'gold' : ''}`}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupNotification;
