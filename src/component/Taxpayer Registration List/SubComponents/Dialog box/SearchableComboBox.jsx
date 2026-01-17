import React, { useState, useEffect, useRef } from 'react';
import down_icon from '../../../../assets/down_icon.png';

const SearchableComboBox = ({ textDirection1, options, placeholder, onChange, ref }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef} dir={textDirection1} >
      <span className={`absolute top-1/2 transform -translate-y-1/2 pointer-events-none ${textDirection1 === 'rtl' ? 'left-3' : 'right-3' }`}> 
        <img src={down_icon} className='w-3 h-3'/> 
      </span> 
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
           onChange(e); // Call parent onChange
        }}
        onFocus={() => setIsOpen(true)} // Open dropdown when focused
        className="flex-grow w-[250px] h-[38px] bg-white pl-2 border border-solid border-[#7e7a7a] pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        ref={ref} // Keep the ref for possible external manipulations
      />
      
      {isOpen && (
        <ul className="absolute z-10 bg-white border border-gray-300 mt-1 w-full max-h-60 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSearchTerm(option); // Set selected option as search term
                onChange(option); // Call parent onChange
                setIsOpen(false); // Close the dropdown immediately
              }}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchableComboBox;