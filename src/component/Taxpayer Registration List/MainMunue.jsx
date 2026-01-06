import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

function MainMunue({ currentLanguage }) {
  const location = useLocation();
  const textDirection = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'ltr' : 'rtl';
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
    <div className="w-full lg:w-80 xl:w-96 py-8 px-10 mt-3 h-[83vh] overflow-y-auto border border-cyan-300/60 " dir={textDirection}>
        
        <div className="space-y-4 md:space-y-5">
          {[
            { id: 'btn1', label: t('b1'), path: '/menu/content' },
            { id: 'btn2', label: t('b2'), path: '/menu/assessment' },
            { id: 'btn3', label: t('b3'), path: '/menu/assessment' },
            { id: 'btn4', label: t('b4'), path: '/menu/assessment' },
            { id: 'btn5', label: t('b5'), path: '/menu/assessment' },
            { id: 'btn6', label: t('b6'), path: '/menu/assessment' },
            { id: 'btn7', label: t('b7'), path: '/menu/assessment' },
            { id: 'btn8', label: t('b8'), path: '/menu/assessment' },
            { id: 'btn9', label: t('b9'), path: '/menu/assessment' },
            { id: 'btn10', label: t('b10'), path: '/menu/assessment' },
            { id: 'btn11', label: t('b11'), path: '/menu/assessment' },
            { id: 'btn12', label: t('b12'), path: '/menu/assessment' },
            { id: 'btn13', label: t('b13'), path: '/menu/assessment' },
            { id: 'btn14', label: t('b14'), path: '/menu/assessment' },
            { id: 'btn15', label: t('b15'), path: '/menu/assessment' },
            { id: 'btn16', label: t('b16'), path: '/menu/assessment' },
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
  );
}

export default MainMunue;