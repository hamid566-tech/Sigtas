import React, { useState } from 'react';

const Attachments = ({ textDirection1, t, checkboxStates, setCheckboxStates }) => {
  // Define your data as an array of objects
  const documents = [
    { name: 'پاسپورت', },
    { name: 'کاپی پاسپورت', },
    { name: 'تذکره', },
    { name: 'کاپی تذکره', },
  ];

    
  // 

  const handleCheckboxChange = (index, checked) => {
    const newStates = [...checkboxStates];
    newStates[index] = checked;
    setCheckboxStates(newStates);
  };

  return (
    <div className="overflow-x-auto overflow-y-auto h-100 border border-gray-300 flex md:flex-row justify-between p-4 md:p-6" dir={textDirection1}>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border bg-[#ddb892] border-cyan-400/60 px-4 py-2 min-w-[250px]">سند</th>
            <th className="border bg-[#ddb892] border-cyan-400/60 px-4 py-2 min-w-[250px]">لازم</th>
            <th className="border bg-[#ddb892] border-cyan-400/60 px-4 py-2 min-w-[250px]">حصول</th>
          </tr>
        </thead>
        <tbody className="text-center  ">
          {documents.map((doc, index) => (
            <tr key={index}>
              <td className="border bg-[#b9d6f2] border-cyan-400/60 px-4 py-2 min-w-[250px]">{doc.name}</td>
              <td className="border bg-[#abc4ab] border-cyan-400/60 px-4 py-2 min-w-[250px]">
                <input type="checkbox" id={`checkbox_${index}_1`} className='cursor-pointer w-[20px] h-[20px]' checked disabled />
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