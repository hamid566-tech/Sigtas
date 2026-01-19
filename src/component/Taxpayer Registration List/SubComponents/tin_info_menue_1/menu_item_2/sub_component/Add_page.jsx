import React, { useRef, useState } from 'react';
import { country, district, province } from '../../../Dialog box/data';
import SearchableComboBox from '../../../Dialog box/SearchableComboBox';

const Add_page = ({ textDirection1, t, setUnsavedChanges, addPageCheckboxStates, setAddPageCheckboxStates }) => {
  
  const inputRefs = useRef(Array(11).fill().map(() => React.createRef()));

  const fields = [
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

  const handleInputChange = () => {
    const hasInput = inputRefs.current.some(ref => ref.current && ref.current.value.trim() !== "");
    setUnsavedChanges(hasInput );
  };

  const handleCheckboxChange = (index, checked) => {
    const newStates = [...addPageCheckboxStates];
    newStates[index] = checked;
    setAddPageCheckboxStates(newStates);
    handleInputChange();
  };


  const renderInputFields = () => (
    fields.map(({ label, placeholder, type, options }, index) => (
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
              handleInputChange(); // Check for unsaved changes
            }}
            ref={inputRefs.current[index]}
          />
        ) : type === 'checkbox' ? (
          <input className='cursor-pointer w-[20px] h-[20px] ml-20'
            type="checkbox"
            checked={addPageCheckboxStates[index]}
            onChange={(e) => handleCheckboxChange(index, e.target.checked)}
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




  return (
    <div className="border border-gray-400 overflow-y-auto h-100 bg-[#c2c2c2] flex flex-wrap justify-between items-center p-4" dir={textDirection1}>
      {renderInputFields()}
    </div>
  );
}

export default Add_page;