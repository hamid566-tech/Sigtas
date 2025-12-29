import React from 'react';
import down_icon from '../../../assets/down_icon.png';
import top_icon from '../../../assets/top_icon.png';

const Ind_Search = () => {
  const fields = [
    { label: "نمبر تشخصیه :", placeholder: "نمبر تشخصیه" },
    { label: "مجموع :", placeholder: "مجموع" },
    { label: "اسم :", placeholder: "اسم" },
    { label: "ولد :", placeholder: "ولد" },
    { label: "ولدیت :", placeholder: "ولدیت" },
    { label: "تخلص :", placeholder: "تخلص" },
    { label: "تاریخ تولد :", placeholder: "تاریخ تولد" },
    { label: "نمبر تذکره :", placeholder: "نمبر تذکره" },
    { label: "نمبر تیلفون :", placeholder: "نمبر تیلفون" },
    { label: "شماره موبایل :", placeholder: "شماره موبایل" },
    { label: "نمبرسند ثبت شده :", placeholder: "نمبر سند ثبت شده" },
  ];

  

  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6" dir='rtl'>
      
      <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">
        جستجو نمبر تشخصیه
      </h2>

      <div className="border border-gray-400 mr-4 flex flex-wrap flex-col md:flex-row justify-between items-center p-4 md:p-6 rounded-tl-[30px] rounded-tr-[30px]">
        {fields.slice(0, 2).map(({ label, placeholder }, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start mb-4 md:mb-4 md:mr-4">
            <label className="font-medium text-[13px] text-black p-2 text-right sm:text-left min-w-[120px]">{label}</label>
            <input 
              type="text" 
              className="flex-grow h-[38px] max-w-[200px] bg-white border border-solid border-[#7e7a7a] px-2 pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              placeholder={placeholder} 
            />
          </div>
        ))}
      </div>

      <div className="border mt-4 mr-4 border-gray-400 flex flex-wrap flex-col md:flex-row justify-between items-center p-4 md:p-6 ">
          {fields.slice(2).map(({ label, placeholder }, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start mb-4 md:mb-4 md:mr-4">
              <label className="font-medium text-[13px] text-black p-2 text-right sm:text-left min-w-[120px]">{label}</label>
              <input 
                type="text" 
                className="flex-grow h-[38px] max-w-[200px] bg-white border border-solid border-[#7e7a7a] px-2 pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                placeholder={placeholder} 
              />
            </div>
          ))}
        </div>

        <div className=" border mt-4 mr-4 border-gray-400 flex flex-wrap flex-col md:flex-row justify-between items-center p-4 md:p-6 rounded-bl-[30px] rounded-br-[30px]">
          
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-4 md:mr-4 gap-10">
              <div className='flex flex-col md:flex-row items-start mb-4 md:mb-4 md:mr-4'>
                <label className="font-medium text-[13px] text-black p-2 text-right sm:text-left min-w-[120px]"> تعداد :</label>
                <input 
                  type="text" 
                  className="flex-grow h-[38px] max-w-[200px] bg-white border border-solid border-[#7e7a7a] px-2 pr-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  placeholder="تعداد" 
                />
              </div>
              
              <div className='flex flex-col gap-2'>
                  <button className='w-8 h-8 bg-[#ef233c] hover:bg-[#d00000] p-2 rounded-full border border-transparent hover:border-white hover:shadow-lg cursor-pointer'>
                    <img src={top_icon} alt="" />
                    
                  </button>
                  <button className='w-8 h-8 bg-[#1a659e] hover:bg-[#134074] p-2 rounded-full border border-transparent hover:border-white hover:shadow-lg cursor-pointer'>
                    <img src={down_icon} alt="" />
                    
                  </button>
              </div>
              
              <div className='flex gap-5'>
                  <button 
                    className="bg-[#00eb80] text-white p-2 min-w-[120px] rounded-full mb-2 border-4 border-gray-700/2 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] font-semibold text-sm md:text-base hover:bg-[#3a7315] cursor-pointer">
                        یافتن
                  </button>
                  <button 
                    className="bg-blue-500 text-white p-2 min-w-[120px] rounded-full mb-2 border-4 border-gray-700/2 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] font-semibold text-sm md:text-base hover:bg-[#2a4494] cursor-pointer">
                        خروج
                  </button>
              </div>

            </div>
             
        </div>

    </section>
  );
};

export default Ind_Search;