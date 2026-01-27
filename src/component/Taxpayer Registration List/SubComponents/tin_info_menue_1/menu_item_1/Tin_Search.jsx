import React, { useState, useRef, useEffect } from 'react';
import down_icon from '../../../../../assets/down_icon.png';
import up_icon from '../../../../../assets/up_icon.png';
import Modal from '../../Dialog box/Modal';
import { useNavigate } from 'react-router-dom';

const Ind_Search = ({textDirection, textDirection1, t }) => {
  
  const navigate = useNavigate();
  const inputRefs = useRef(Array(12).fill().map(() => React.createRef()));
  const inputRefsecond = useRef(Array(12).fill().map(() => React.createRef()));
  const [showDialog, setShowDialog] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const fields = [
    { label: t('A1_2'), placeholder: t('A1_2'), readOnly:true},
    { label: t('A1_3'), placeholder: t('A1_3'), readOnly:true },
    { label: t('A1_4'), placeholder: t('A1_4') },
    { label: t('A1_5'), placeholder: t('A1_5') },
    { label: t('A1_6'), placeholder: t('A1_6') },
    { label: t('A1_7'), placeholder: t('A1_7') },
    { label: t('A1_8'), placeholder: t('A1_8') },
    { label: t('A1_9'), placeholder: t('A1_9') },
    { label: t('A1_10'), placeholder: t('A1_10') },
    { label: t('A1_11'), placeholder: t('A1_11') },
    { label: t('A1_12'), placeholder: t('A1_12') },
  ];

  const fieldsecond = [
    { label: t('A1_15'), placeholder: t('A1_15'), readOnly:true },
    { label: t('A1_16'), placeholder: t('A1_16'), readOnly:true },
    { label: t('A1_17'), placeholder: t('A1_17') },
    { label: t('A1_18'), placeholder: t('A1_18') },
    { label: t('A1_19'), placeholder: t('A1_19') },
    { label: t('A1_20'), placeholder: t('A1_20') },
    { label: t('A1_21'), placeholder: t('A1_21') },
    { label: t('A1_22'), placeholder: t('A1_22') },
    { label: t('A1_23'), placeholder: t('A1_23') },
    { label: t('A1_24'), placeholder: t('A1_24') },
    { label: t('A1_25'), placeholder: t('A1_26') },

  ];

  const handleInputChange = () => {
    const hasInput = inputRefs.current.some(ref => ref.current && ref.current.value.trim() !== "") || inputRefsecond.current.some(ref => ref.current && ref.current.value.trim() !== "");
    setUnsavedChanges(hasInput);
  };

  const handleNavigation = (event) => {
    if (unsavedChanges && !showDialog) {
      event.preventDefault();  // Stop the default navigation
      setShowDialog(true);  // Show the modal
    } else if (!unsavedChanges) {
      navigate('/menu/content');
    }
  };

  useEffect(() => {
    const handlePopState = (event) => {
      handleNavigation(event);
    };

    // Push state to enable manual handling on back button
    window.history.pushState(null, '', window.location.href);

    window.addEventListener('popstate', handlePopState);

    // Before unload event to handle refresh or close
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        const confirmationMessage = "You have unsaved changes. Do you really want to leave?";
        event.returnValue = confirmationMessage; // Standard for most browsers
        return confirmationMessage; // For older browsers
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges, showDialog]);

  const handleButtonClick = () => {
    const specificFieldValueInFirstSection = inputRefs.current.some(ref => ref.current && ref.current.value.trim() !== "");
    const specificFieldValueInSecondSection = inputRefsecond.current.some(ref => ref.current && ref.current.value.trim() !== "");

    if (specificFieldValueInFirstSection || specificFieldValueInSecondSection || unsavedChanges) {
        setShowDialog(true);
    } else {
        navigate('/menu/content');
    }
  };

  const handleModalConfirm = () => {
    setShowDialog(false);
    navigate('/menu/content');
  };

  const renderInputFields = () => (
    fields.map(({ label, placeholder, readOnly }, index) => (
      <div key={index} className="flex flex-col md:flex-row items-center mb-4">
        <label className="font-medium text-[13px] text-black p-2 items-center text-right sm:text-left w-[250px] md:w-[170px]">{label}:</label>
        <input
          type="text"
          ref={inputRefs.current[index]}
          className="grow h-[38px] w-[250px] bg-white border border-solid border-[#7e7a7a] px-2 pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={handleInputChange}
        />
      </div>
    ))
  );

  const renderInputFieldsecond = () => (
    fieldsecond.map(({ label, placeholder,readOnly }, index) => (
      <div key={index} className="flex flex-col md:flex-row items-center mb-4">
        <label className="font-medium text-[13px] text-black p-2 items-center text-right sm:text-left w-[250px] md:w-[170px]">{label}:</label>
        <input
          type="text"
          ref={inputRefsecond.current[index]}
          className="grow h-[38px] w-[250px] bg-white border border-solid border-[#7e7a7a] px-2 pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={handleInputChange}
        />
      </div>
    ))
  );

  return (
    <div className="width-full bg-gray-800 sm:flex-1 space-y-6 md:space-y-8 px-4 md:px-10 py-8 mt-3 h-[83vh] overflow-y-auto border border-cyan-300/60 "dir={textDirection}>
      <section className="bg-gray-400  backdrop-blur-sm rounded-[37px] border border-cyan-400/60 shadow-[0px_0_10px_1px_rgba(0,43,255,0.32)] p-4 md:p-6" dir="rtl">
        <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">{t('A1_1')}</h2>

        <div className="border border-gray-500 bg-[rgba(171,196,255,0.9)] mr-4 flex flex-wrap flex-col md:flex-row justify-between items-center p-4 md:p-6 rounded-tl-[30px] rounded-tr-[30px]" dir={textDirection1}>
          {renderInputFields().slice(0, 2)}
        </div>

        <div className="border mt-4 mr-4 border-gray-400 bg-[#c2c2c2] flex flex-wrap flex-col md:flex-row justify-between items-center p-4 md:p-6" dir={textDirection1}>
          {renderInputFields().slice(2, 11)}
        </div>

        <div className="border rounded-br-[37px] rounded-bl-[37px] bg-[#c2c2c2] mt-4 mr-4 border-gray-400 flex flex-wrap justify-between items-center flex-col md:flex-row gap-10 p-4 md:p-6" dir={textDirection1}>
          <div className='flex flex-col md:flex-row items-start mb-4 md:mb-0 md:mr-4 gap-5'>
            <label className="font-medium text-[13px] text-black p-2 text-right sm:text-left min-w-[120px]">{t('A1_13')}:</label>
            <input
              type="text"
              ref={inputRefs.current[12]}
              className="grow h-[38px] max-w-[200px] bg-white border border-solid border-[#7e7a7a] px-2 pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              placeholder={t('A1_13')}
              readOnly
              onChange={handleInputChange}
            />
          </div>

          <div className='flex flex-col gap-2'>
            {[up_icon, down_icon].map((icon, index) => (
              <button key={index} className={`w-8 h-8 p-2 rounded-full border border-transparent ${index ? 'bg-[#1a659e]' : 'bg-[#ef233c]'} hover:border-white hover:shadow-lg cursor-pointer`}>
                <img src={icon} style={{ filter: 'invert(100%)' }} alt={index ? "Down Icon" : "Top Icon"} />
              </button>
            ))}
          </div>

          <div className='flex gap-5 flex-wrap sm:flex-nowrap items-center justify-center'>
            <button className="bg-[#548c2f] text-white p-2 min-w-[70px] sm:min-w-[120px] max-h-[50px] rounded-full mb-2 border-4 border-gray-700/2 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] font-semibold text-sm md:text-base opacity-70 hover:opacity-100 cursor-pointer">
              {t('Z1_5_1')}
            </button>
            <button className="bg-[#d62828] text-white p-2 min-w-[70px] sm:min-w-[120px] max-h-[50px] rounded-full mb-2 border-4 border-gray-700/2 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] font-semibold text-sm md:text-base opacity-70 hover:opacity-100 cursor-pointer" onClick={handleButtonClick}>
              {t('Z1_6')}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-400  backdrop-blur-sm rounded-[37px] border border-cyan-400/60 shadow-[0px_0_10px_1px_rgba(0,43,255,0.32)] p-4 md:p-6" dir="rtl">
        <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">{t('A1_14')}</h2>

        <div className="border border-gray-500 bg-[rgba(171,196,255,0.9)] mr-4 flex flex-wrap flex-col md:flex-row justify-between items-center p-4 md:p-6 rounded-tl-[30px] rounded-tr-[30px]" dir={textDirection1}>
          {renderInputFieldsecond().slice(0, 2)}
        </div>

        <div className="border mt-4 mr-4 border-gray-400 bg-[#c2c2c2] flex flex-wrap flex-col md:flex-row justify-between items-center p-4 md:p-6" dir={textDirection1}>
          {renderInputFieldsecond().slice(2, 11)}
        </div>

        <div className="border rounded-br-[37px] rounded-bl-[37px] bg-[#c2c2c2] mt-4 mr-4 border-gray-400 flex flex-wrap justify-between items-center flex-col md:flex-row gap-10 p-4 md:p-6" dir={textDirection1}>
          <div className='flex flex-col md:flex-row items-start mb-4 md:mb-0 md:mr-4 gap-5'>
            <label className="font-medium text-[13px] text-black p-2 text-right sm:text-left min-w-[120px]">{t('A1_26')}:</label>
            <input
              type="text"
              ref={inputRefsecond.current[12]}
              className="grow h-[38px] max-w-[200px] bg-white border border-solid border-[#7e7a7a] px-2 pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              placeholder={t('A1_26')}
              readOnly
              onChange={handleInputChange}
            />
          </div>

          <div className='flex flex-col gap-2'>
            {[up_icon, down_icon].map((icon, index) => (
              <button key={index} className={`w-8 h-8 p-2 rounded-full border border-transparent ${index ? 'bg-[#1a659e]' : 'bg-[#ef233c]'} hover:border-white hover:shadow-lg cursor-pointer`}>
                <img src={icon} style={{ filter: 'invert(100%)' }} alt={index ? "Down Icon" : "Top Icon"} />
              </button>
            ))}
          </div>

          <div className='flex gap-5 flex-wrap sm:flex-nowrap items-center justify-center'>
            <button className="bg-[#548c2f] text-white p-2 min-w-[70px] sm:min-w-[120px] max-h-[50px] rounded-full mb-2 border-4 border-gray-700/2 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] font-semibold text-sm md:text-base opacity-70 hover:opacity-100 cursor-pointer">
              {t('Z1_5_2')}
            </button>
            <button className="bg-[#d62828] text-white p-2 min-w-[70px] sm:min-w-[120px] max-h-[50px] rounded-full mb-2 border-4 border-gray-700/2 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] font-semibold text-sm md:text-base opacity-70 hover:opacity-100 cursor-pointer" onClick={handleButtonClick}>
              {t('Z1_6')}
            </button>
          </div>
        </div>
      </section>

      <Modal
        textDirection1={textDirection1}
        t={t}
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        onDiscard={() => setShowDialog(false)}
        onNavigate={handleModalConfirm}
      />
    </div>
  );
};

export default Ind_Search;