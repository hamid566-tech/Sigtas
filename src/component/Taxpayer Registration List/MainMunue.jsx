import React, { useState } from 'react';

function MainMunue({ setActiveSection }) {
  const [activeButton, setActiveButton] = useState('btn1'); // State to track active button

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); // Set active button
    setActiveSection(buttonId); // Call setActiveSection
  };

  return (
    <div className="w-full lg:w-80 xl:w-96">
      <div className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6">
        <div className="space-y-4 md:space-y-5">
          {/* Example Button */}
          {[
            { id: 'btn1', label: 'فهرست ثبت نام مالیه دهنده گان' },
            { id: 'btn2', label: 'ارزیابی' },
            { id: 'btn3', label: 'پرداخت / پس پرداخت ها' },
            { id: 'btn4', label: 'تنظیم انتقال ضرر مجدد' },
            { id: 'btn5', label: 'سند / دوسیه' },
            { id: 'btn6', label: 'نامه ها / یاد آوریها' },
            { id: 'btn7', label: 'مالیه موضوعی' },
            { id: 'btn8', label: 'بررسی' },
            { id: 'btn9', label: 'اعتراضات' },
            { id: 'btn10', label: 'تطبیق قانون' },
            { id: 'btn11', label: 'بودجه مالیه' },
            { id: 'btn12', label: 'راپور های اداری' },
            { id: 'btn13', label: 'روابط / تسهیلات' },
            { id: 'btn14', label: 'اداره' },
            { id: 'btn15', label: 'سیستم' },
            { id: 'btn16', label: 'خروچ' },
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