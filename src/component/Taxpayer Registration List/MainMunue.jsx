import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

function MainMunue({ currentLanguage }) {
  const location = useLocation();
  const textDirection = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'rtl' : 'ltr';
  const { t } = useTranslation();

  // Load active button from localStorage or use the path-based default
  const storedActiveButton = localStorage.getItem('activeButton');
  const defaultActiveButton = location.pathname === '/menu/content' ? 'btn1' : 'btn2';
  const [activeButton, setActiveButton] = useState(storedActiveButton || defaultActiveButton);

  useEffect(() => {
    // Determine which button is active based on the current path
    if (location.pathname === '/') {
      setActiveButton('btn1');
    } else if (location.pathname === '/menu/content') {
      setActiveButton('btn1');
    } else if (location.pathname === '/menu/assessment') {
      setActiveButton('btn2');
    }

    // Save the active button to localStorage if it's changed
    localStorage.setItem('activeButton', activeButton);
  }, [location.pathname]);

  const isSubPath = location.pathname.startsWith('/menu/content/');

  // Handle button click if not in a subpath
  const handleButtonClick = (buttonId) => {
    if (!isSubPath) {
      setActiveButton(buttonId);
      localStorage.setItem('activeButton', buttonId);
    }
  };

  return (
    <div className="w-full lg:w-80 xl:w-96 py-8 px-10 mt-3 h-[83vh] overflow-y-auto rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px rgba(0,43,255,0.32)]" dir={textDirection}>
      <div className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px 5px rgba(0,43,255,0.32)] p-4 md:p-6">
        <div className="space-y-4 md:space-y-5">
          {[
            { id: 'btn1', label: t('b1'), path: '/menu/content' },
            { id: 'btn2', label: t('b2'), path: '/menu/assessment' },
          ].map((button) => (
            <Link
              key={button.id}
              to={button.path}
              className={`w-full h-12 flex items-center justify-center rounded-md ${
                isSubPath 
                  ? (activeButton === button.id 
                      ? 'border-4 border-gray-700/20 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-white text-black opacity-50 cursor-not-allowed'
                      : 'bg-white text-black opacity-30 cursor-not-allowed') // Unselected button style
                  : (activeButton === button.id 
                      ? 'border-4 border-gray-700/20 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-white text-black font-semibold text-sm md:text-base'
                      : 'bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600')
              } transition-colors`}
              onClick={(e) => {
                if (isSubPath) {
                  e.preventDefault(); // Prevent the default action
                  e.stopPropagation(); // Stop the event from bubbling
                } else {
                  handleButtonClick(button.id);
                }
              }}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainMunue;