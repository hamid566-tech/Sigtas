import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Add_page from './sub_component/Add_page';
import Attachments from './sub_component/Attachments';
import Record_history from './sub_component/Record_history';
import { documentTypeNumber, country, taxCenter } from '../../Dialog box/data';
import SearchableComboBox from '../../Dialog box/SearchableComboBox';
import Modal from '../../Dialog box/Modal';

const Request_Tin = ({textDirection, textDirection1, t }) => {

  const inputRefs = useRef(Array(17).fill().map(() => React.createRef()));
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState(() => {
    const savedCheckboxStates = localStorage.getItem('checkboxStates');
    return savedCheckboxStates ? JSON.parse(savedCheckboxStates) : [false, false, false, false];
  });
  const [addPageCheckboxStates, setAddPageCheckboxStates] = useState(() => {
    const savedaddPageCheckboxStates = localStorage.getItem('addPageCheckboxStates');
    return savedaddPageCheckboxStates ? JSON.parse(savedaddPageCheckboxStates) :[false, false, false, false, false, false, false, false, false, false];
  }); // Adjust based on the number of checkboxes
  const navigate = useNavigate();
  const location = useLocation();
  const initialButton = localStorage.getItem('selectedButton') || 'آدرس';
  const [selectedButton, setSelectedButton] =  useState(initialButton);
  

  const fields = [
    { label: t('A2_2'), placeholder: t('A2_2'), type: 'number' },
    { label: t('A2_3'), placeholder: t('A2_3'), type: 'text' },
    { label: t('A2_4'), placeholder: t('A2_4'), type: 'number' },
    { label: t('A2_5'), placeholder: t('A2_5'), type: 'number' },
    { label: t('A2_6'), placeholder: t('A2_6'), type: 'number' },
    { label: t('A2_7'), placeholder: t('A2_7'), type: 'text' },
    { label: t('A2_8'), placeholder: t('A2_8'), type: 'text' },
    { label: t('A2_9'), placeholder: t('A2_9'), type: 'text' },
    { label: t('A2_10'), placeholder: t('A2_10'), type: 'text' },
    { label: t('A2_11'), placeholder: t('A2_11'), type: 'combo', options: documentTypeNumber },
    { label: t('A2_12'), placeholder: t('A2_12'), type: 'numberWithDash' },
    { label: t('A2_13'), placeholder: t('A2_13'), type: 'combo', options: country },
    { label: t('A2_14'), placeholder: t('A2_14'), type: 'text' },
    { label: t('A2_15'), placeholder: t('A2_15'), type: 'combo', options: taxCenter },
    { label: t('A2_16'), placeholder: t('A2_16'), type: 'number' },
    { label: t('A2_17'), placeholder: t('A2_17'), type: 'textAndNumber' },
    { label: t('A2_18'), placeholder: t('A2_18'), type: 'textAndNumber' },
  ];

  const renderInputFields = () => (
    fields.map(({ label, placeholder, type, options }, index) => (
      <div key={index} className="flex flex-col md:flex-row items-center mb-4">
        <label className="font-medium text-[13px] text-black p-2 items-center text-right sm:text-left w-[250px] md:w-[170px]">{label}:</label>
        {type === 'combo' ? (
          <SearchableComboBox
            textDirection1={textDirection1}
            options={options}
            placeholder={placeholder}
            onChange={(value) => {
              if (inputRefs.current[index]) {
                inputRefs.current[index].current.value = value; // Set value for the select
              }
              handleInputChange(); // Check for unsaved changes
            }}
            ref={inputRefs.current[index]}
          />
        ) : (
          <input
            type={type === 'numberWithDash' ? 'text' : 'text'}
            ref={inputRefs.current[index]}
            className="flex-grow h-[38px] w-[250px] bg-white border border-solid border-[#7e7a7a] px-2 pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            placeholder={placeholder}
            onInput={(e) => {
              if (type === 'number') {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              } else if (type === 'text') {
                e.target.value = e.target.value.replace(/[0-9]/g, '');
              } else if (type === 'numberWithDash') {
                e.target.value = e.target.value.replace(/[^0-9-]/g, '');
              }
              handleInputChange();
            }}
          />
        )}
      </div>
    ))
  );

  const handleModalConfirm = () => {
    setShowDialog(false);
    navigate('/menu/content');

    setCheckboxStates([false, false, false, false]);
    localStorage.setItem('checkboxStates', JSON.stringify([false, false, false, false]));

    setAddPageCheckboxStates([false, false, false, false, false, false, false, false, false, false]);
    localStorage.setItem('addPageCheckboxStates', JSON.stringify([false, false, false, false, false, false, false, false, false, false]));
  };

  
  const handleInputChange = () => {
    const hasInput = inputRefs.current.some(ref => ref.current.value.trim() !== "");
    setUnsavedChanges(hasInput);
  };

  const handleButtonClick_menu = (buttonType) => {
    setSelectedButton(buttonType);
    localStorage.setItem('selectedButton', buttonType); // Store the selected button in localStorage
    navigate(`/menu/content/request_tin${buttonType === 'ضمایم' ? '/attachment' : buttonType === 'سوابق' ? '/record_history' : ''}`);
  };

  const handleButtonClick = () => {
    const anyChecked = checkboxStates.some(state => state);
    const anyAddPageChecked = addPageCheckboxStates.some(state => state);
    const specificFieldValue = inputRefs.current[16] ? inputRefs.current[16].current.value.trim() : '';
    const shouldShowDialog = specificFieldValue !== "" || unsavedChanges || anyChecked || anyAddPageChecked;

    console.log("specificFieldValue: ", specificFieldValue, "unsavedChanges: ", unsavedChanges, "anyAddPageChecked: ", anyAddPageChecked);

    if (shouldShowDialog) {
      setShowDialog(true);
    } else {
      navigate('/menu/content');
      console.log("showdialo",showDialog)
    }

  };

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    const buttonMap = {
      'request_tin': 'آدرس',
      'attachment': 'ضمایم',
      'record_history': 'سوابق',
    };
    // Update selectedButton based on current path or fallback to stored value
    const currentButton = buttonMap[path] || selectedButton;
    setSelectedButton(currentButton);
    localStorage.setItem('selectedButton', currentButton);
  }, [location.pathname, selectedButton]); // Include selectedButton to avoid stale closures


  const handleNavigation = (event) => {
    const anyChecked = checkboxStates.some(state => state);
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

  return (
    <div className="width-full sm:flex-1 space-y-6 md:space-y-8 px-4 md:px-10 py-8 mt-3 h-[83vh] overflow-y-auto border border-cyan-300/60 "dir={textDirection}>
    <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-400/60 shadow-[0px_0_10px_1px_rgba(0,43,255,0.32)] p-4 md:p-6">
      <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">{t('A2_1')}</h2>
      <div className="border border-gray-500 rounded-tl-[37px] rounded-tr-[37px] bg-[rgba(171,196,255,0.9)] flex flex-wrap flex-col md:flex-row justify-between items-center p-4 md:p-6" dir={textDirection1}>
        <div className='flex flex-col'>
          {renderInputFields().slice(0, 2)} {/* Render first five fields */}
        </div>
        <div>
          {renderInputFields().slice(2, 5)} {/* Render first five fields */}
        </div>
      </div>
      <div className="border border-gray-400 bg-[#c2c2c2] mt-4 flex flex-wrap flex-col md:flex-row justify-between items-center p-4 md:p-6" dir={textDirection1}>
        {renderInputFields().slice(5)} {/* Render remaining fields */}
      </div>
      <div className="flex flex-wrap flex-col md:flex-row gap-3 items-center p-4 md:p-6" dir={textDirection1}>
        {['آدرس', 'ضمایم', 'سوابق'].map((btnType) => (
          <button
            key={btnType}
            onClick={() => handleButtonClick_menu(btnType)}
            className={`min-w-[100px] p-2 rounded-[5px] ${selectedButton === btnType ? 'bg-[#8ac926]' : 'bg-[#42a5f5]'} text-[#ffe5ec] opacity-80 hover:opacity-100 outline-none cursor-pointer`}
          >
            {btnType}
          </button>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Add_page textDirection1={textDirection1} t={t} setUnsavedChanges={setUnsavedChanges} addPageCheckboxStates={addPageCheckboxStates} setAddPageCheckboxStates={setAddPageCheckboxStates} />} />
        <Route path="attachment" element={<Attachments textDirection1={textDirection1} t={t} checkboxStates={checkboxStates} setCheckboxStates={setCheckboxStates}/>} />
        <Route path="record_history" element={<Record_history textDirection1={textDirection1} t={t} />} />
      </Routes>
      <div className="border border-gray-400 rounded-bl-[37px] rounded-br-[37px] bg-[#c2c2c2] mt-4 flex flex-wrap flex-col md:flex-row gap-4 justify-center items-center p-4 md:p-6" dir={textDirection1}>
        <button className="bg-[#548c2f] text-white p-2 min-w-[70px] sm:min-w-[120px] max-h-[50px] rounded-full mb-2 border-4 border-gray-700/2 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] font-semibold text-sm md:text-base opacity-70 hover:opacity-100 cursor-pointer" >
            ثبت
        </button>
        <button className="bg-blue-500 text-white p-2 min-w-[70px] sm:min-w-[120px] max-h-[50px] rounded-full mb-2 border-4 border-gray-700/2 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] font-semibold text-sm md:text-base opacity-70 hover:opacity-100 cursor-pointer">
            درخواست تایید توسط سیستم
        </button>
        <button className="bg-[#d62828] text-white p-2 min-w-[70px] sm:min-w-[120px] max-h-[50px] rounded-full mb-2 border-4 border-gray-700/2 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] font-semibold text-sm md:text-base opacity-70 hover:opacity-100 cursor-pointer" onClick={handleButtonClick}>
            {t('A1_15')}
        </button>
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
}

export default Request_Tin;