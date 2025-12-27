import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MainMunue({ setActiveSection,currentLanguage }) {
  const [activeButton, setActiveButton] = useState('btn1'); // State to track active button

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); // Set active button
    setActiveSection(buttonId); // Call setActiveSection
  };

  const textDirection = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'ltr' : 'rtl';

  const {t} =useTranslation();

  return (
    <div className="w-full lg:w-80 xl:w-96 py-8 px-10 mt-3 h-[83vh] overflow-y-auto rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)]" dir={textDirection}>
      <div className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6"> 
        <div className="space-y-4 md:space-y-5">
          {/* Example Button */}
          {[
            { id: 'btn1', label: t('b1') },
            { id: 'btn2', label: t('b2') },
            { id: 'btn3', label: t('b3') },
            { id: 'btn4', label: t('b4') },
            { id: 'btn5', label: t('b5') },
            { id: 'btn6', label: t('b6') },
            { id: 'btn7', label: t('b7') },
            { id: 'btn8', label: t('b8') },
            { id: 'btn9', label: t('b9') },
            { id: 'btn10', label: t('b10') },
            { id: 'btn11', label: t('b11') },
            { id: 'btn12', label: t('b12') },
            { id: 'btn13', label: t('b13') },
            { id: 'btn14', label: t('b14') },
            { id: 'btn15', label: t('b15') },
            { id: 'btn16', label: t('b16') },
          ].map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.id)}
              className={`w-full h-12 flex items-center justify-center rounded-md ${
                activeButton === button.id
                  ? 'border-4 border-gray-700/20 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-white text-black font-semibold text-sm md:text-base hover:bg-gray-50'
                  : 'bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600'
              } transition-colors cursor-pointer`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainMunue;