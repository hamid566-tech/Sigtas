import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { country, district, province } from '../../../Dialog box/data';
import SearchableComboBox from '../../../Dialog box/SearchableComboBox';

const Add_page = ({ textDirection, textDirection1, t, setUnsavedChanges, addPageCheckboxStates, setAddPageCheckboxStates, setHasErrorsecond}, ref) => {
  

  useImperativeHandle(ref , () => ({
    handleButtonClick_save_second
  }));

  const inputRefs = useRef(Array(11).fill().map(() => React.createRef()));

  const fieldsecond = [
    { label: t('A3_1'), placeholder: t('A3_1'), type: 'number' },
    { label: t('A3_2'), placeholder: t('A3_2'), type: 'textAndNumber' },
    { label: t('A3_3'), placeholder: t('A3_3'), type: 'textAndNumber' },
    { label: t('A3_4'), placeholder: t('A3_4'), type: 'combo', options: district },
    { label: t('A3_5'), placeholder: t('A3_5'), type: 'combo', options: province },
    { label: t('A3_6'), placeholder: t('A3_6'), type: 'combo', options: country },
    { label: t('A3_7'), placeholder: t('A3_7'), type: 'number' },
    { label: t('A3_8'), placeholder: t('A3_8'), type: 'number' },
    { label: t('A3_9'), placeholder: t('A3_9'), type: 'number' },
    { label: t('A3_10'), placeholder: t('A3_10'), type: 'checkbox' },
  ];


  const [inputValues, setInputValues] = useState(Array(fieldsecond.length).fill(''));

  const [errorMessages, setErrorMessages] = useState({
        field_2_1:'',
        field_2_2:'',
        field_2_3:'',
        field_2_4:'',
        field_2_5: '',
        field_2_6: '',
        field_2_7: '',
        field_2_8: '',
        field_2_9: ''
    });

  const errorMessageKeys = {
      field_2_1: 'Z1_9',
      field_2_2: 'Z1_9',
      field_2_3: 'Z1_9',
      field_2_4: 'Z1_9',
      field_2_5: 'Z1_9',
      field_2_6: 'Z1_9',
      field_2_7: 'Z1_9',
      field_2_8: 'Z1_9',
      field_2_9: 'Z1_9'
  };

  // Update error messages whenever the component mounts or the language changes
    useEffect(() => {
      const newErrorMessages = {
        field_2_1: '',
        field_2_2: '',
        field_2_3: '',
        field_2_4: '',
        field_2_5: '',
        field_2_6: '',
        field_2_7: '',
        field_2_8: '',
        field_2_9: ''
      };
      setErrorMessages(newErrorMessages);
    }, [t]); // Re-run whenever the translation function changes (language change)


    const handleButtonClick_save_second = () => {
        
      const newErrorMessages = {
            field_2_1: '',
            field_2_2: '',
            field_2_3: '',
            field_2_4: '',
            field_2_5: '',
            field_2_6: '',
            field_2_7: '',
            field_2_8: '',
            field_2_9: ''
        };

        let hasErrors = false;

        // Check all relevant fields based on their defined index
        for (let i = 0; i <9; i++) {
            if (!inputValues[i]?.trim()) {
                newErrorMessages[`field_2_${i + 1}`] = t(errorMessageKeys[`field_2_${i + 1}`]);
                hasErrors = true;
            }
        }

        setErrorMessages(newErrorMessages);
        setHasErrorsecond(hasErrors);
  };


 
const handleCheckboxChange = (index) => {
  const newStates = [...addPageCheckboxStates];
  newStates[index] = !newStates[index]; // Toggle checkbox state
  setAddPageCheckboxStates(newStates);
  localStorage.setItem('addPageCheckboxStates', JSON.stringify(newStates));
};

  const renderInputFieldsecond = () => (
    fieldsecond.map(({ label, placeholder, type, options }, index) => (
      <div key={index}>
        
        {errorMessages[`field_2_${index+1}`] && (
            <div className={`text-[#c1121f] text-md font-bold mb-1 ${textDirection === 'rtl' ? 'text-right' : 'text-left'}`}>{errorMessages[`field_2_${index + 1}`]}</div>
          )}

          <div key={index} className="flex flex-col md:flex-row items-center mb-4  w-[420px]  ">
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
                  handleInputChange(index, value); // Check for unsaved changes
                }}
                value={inputValues[index]} // Controlled input
                error={!!errorMessages[`field_2_${index+1}`]} // Pass the error state
                ref={inputRefs.current[index]}
              />
            ) : type === 'checkbox' ? (
              <input className='cursor-pointer w-[20px] h-[20px] ml-20'
                type="checkbox"
                checked={addPageCheckboxStates[index] || false}
                onChange={(e) => handleCheckboxChange(index)}
              />
            ) : (
              <input
                type={type === 'numberWithDash' ? 'text' : 'text'}
                ref={inputRefs.current[index]}
                className={`flex-grow h-[38px] w-[250px] bg-white border border-solid ${errorMessages[`field_2_${index + 1}`] ? 'border-[#c1121f] border-3 ring-3 ring-red-300' : 'border-[#7e7a7a]'} px-2 pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300`}
                placeholder={placeholder}
                onInput={(e) => {
                  if (type === 'number') {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                  } else if (type === 'text') {
                    e.target.value = e.target.value.replace(/[0-9]/g, '');
                  } else if (type === 'numberWithDash') {
                    e.target.value = e.target.value.replace(/[^0-9-]/g, '');
                  }
                  handleInputChange(index, e.target.value);
                }}
              />
            )}
          </div>
      </div>
    ))
  );


  const handleInputChange = (index, value) => {
    
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
    setUnsavedChanges(updatedValues.some(val => val.trim() !== ''));
  };

  

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const anyChecked = addPageCheckboxStates.some(state => state);
      if (anyChecked) {
        const confirmationMessage = "You have unsaved changes. Do you really want to leave?";
        event.returnValue = confirmationMessage; // Standard for most browsers
        return confirmationMessage; // For older browsers
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [addPageCheckboxStates]);

  const handleResetStates = () => {
    setAddPageCheckboxStates([false, false, false, false]);
    localStorage.setItem('addPageCheckboxStates', JSON.stringify([false, false, false, false]));
  };

  useEffect(() => {
    window.addEventListener('pagehide', (event) => {
      const anyChecked = addPageCheckboxStates.some(state => state);
      if (anyChecked) {
        // Only reset checkbox states on navigation away
        handleResetStates();
      }
    });

     return () => {
      window.removeEventListener('pagehide', handleResetStates);
    };
  }, [addPageCheckboxStates]);


  return (
    <div className="border border-gray-400 overflow-y-auto h-100 bg-[#c2c2c2] flex flex-wrap justify-between items-center p-4" dir={textDirection1}>
      {renderInputFieldsecond()}
    </div>
  );
}

export default forwardRef(Add_page);