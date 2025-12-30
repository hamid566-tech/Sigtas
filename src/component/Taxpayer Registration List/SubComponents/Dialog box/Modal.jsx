import React from 'react';

const Modal = ({ isOpen, onClose, onDiscard, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 text-[10px] sm:text-[15px]"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} // 30% opacity
    >
      <div className="bg-[#10110e] rounded-[20px] text-right text-white p-4 shadow-lg w-1/3">
        <p className='p-3'>آیا میخواهید از صفحه بیرون شوید ؟</p>
        <hr className='m-2' />
        <div className="flex justify-around mt-4" dir='rtl'>
          <button onClick={onNavigate} className="max-w-[100px] sm:w-[100px] bg-[#32ab72] text-white p-2 rounded-md cursor-pointer border border-black hover:border hover:border-[#f6f9fc] hover:shadow-[0_5px_10px_0_rgba(25,12,222,0.56)]">
            بلی
          </button>
          <button onClick={onDiscard} className="max-w-[100px] sm:w-[100px] bg-[#c7210b] text-white p-2 rounded-md cursor-pointer border border-black hover:border hover:border-[#f6f9fc] hover:shadow-[0_5px_10px_0_rgba(25,12,222,0.56)]">
            نخیر
          </button>
        </div>
        <button onClick={onClose} className="p-3 text-blue-500 cursor-pointer">لفوه</button>
      </div>
    </div>
  );
};

export default Modal;