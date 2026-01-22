import React, { useEffect, useState } from 'react';

const Attachments = ({ textDirection1, t, checkboxStates, setCheckboxStates }) => {

  const documents = [
    { name: t('A4_4') },
    { name: t('A4_5') },
    { name: t('A4_6') },
    { name: t('A4_7') },
  ];

 

  const handleCheckboxChange = (index, checked) => {
    const newStates = [...checkboxStates];
    newStates[index] = checked;
    setCheckboxStates(newStates);
    localStorage.setItem('checkboxStates', JSON.stringify(newStates));
    console.log(event.target.checked)
  };

  

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const anyChecked = checkboxStates.some(state => state);
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
  }, [checkboxStates]);

  const handleResetStates = () => {
    setCheckboxStates([false, false, false, false]);
    localStorage.setItem('checkboxStates', JSON.stringify([false, false, false, false]));
  };

  useEffect(() => {
    window.addEventListener('pagehide', (event) => {
      const anyChecked = checkboxStates.some(state => state);
      if (anyChecked) {
        // Only reset checkbox states on navigation away
        handleResetStates();
      }
    });

    return () => {
      window.removeEventListener('pagehide', handleResetStates);
    };
  }, [checkboxStates]);

  return (
    <div className="overflow-x-auto overflow-y-auto h-100 border border-gray-300 flex md:flex-row justify-between p-4 md:p-6" dir={textDirection1}>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border bg-[#ddb892] border-cyan-400/60 px-4 py-2 min-w-[250px]">{t('A4_1')}</th>
            <th className="border bg-[#ddb892] border-cyan-400/60 px-4 py-2 min-w-[250px]">{t('A4_2')}</th>
            <th className="border bg-[#ddb892] border-cyan-400/60 px-4 py-2 min-w-[250px]">{t('A4_3')}</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {documents.map((doc, index) => (
            <tr key={index}>
              <td className="border bg-[#b9d6f2] border-cyan-400/60 px-4 py-2 min-w-[250px]">{doc.name}</td>
              <td className="border bg-[#abc4ab] border-cyan-400/60 px-4 py-2 min-w-[250px]">
                <input type="checkbox" id={`checkbox_${index}_1`} className='cursor-pointer w-[20px] h-[20px]' disabled />
              </td>
              <td className="border bg-[#abc4ab] border-cyan-400/60 px-4 py-2 min-w-[250px]">
                <input
                  type="checkbox"
                  id={`checkbox_${index}_2`}
                  className='cursor-pointer w-[20px] h-[20px]'
                  checked={checkboxStates[index]}
                  onChange={(e) => handleCheckboxChange(index, e.target.checked)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attachments;