import React from 'react'
import { useTranslation } from 'react-i18next';

function ContentOfTaxRegistrationList({currentLanguage}) {

     const textDirection = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'ltr' : 'rtl';
     const textDirection1 = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'rtl' : 'ltr';
     const {t} =useTranslation(); 


  return (
    
                    // {/* Main Content Area */}
          <div className="flex-1 space-y-6 md:space-y-8 px-10 py-8 mt-3 h-[83vh] overflow-y-auto rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)]" dir={textDirection}>
                
            {/* Section 1: Individual Registration */}
            <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6 "  dir={textDirection1}>
              <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">
                {t('c_1')}
              </h2>
              <div className="border border-gray-500 p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                  
                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/aac7438f9702a6b01feb69e9506c28cd758adb88?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_2')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-300 rounded-2xl">
                        <img src="https://cdn.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2Ffabae43445fe4bf5a96da46f5d91a693?format=webp&width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_3')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/8d3463b164755664690afbe12b85eafe494ddd6f?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_4')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/ff3b61622c582cb6a6d3a21b2bbe6a3abd9b7ac4?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_5')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/db805bfee9df35e4f95ccf9dbc968451b202fbd4?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_6')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-300 rounded-2xl">
                      <img src="https://cdn.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2F9ab7990b77b047658b8be7d7e828717b?format=webp&width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_7')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/1834086cf0d3207302671946f730ec80ed28e229?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_8')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/21f2bc390ca0dd8a132412eda5568b3b84c849ad?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_9')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/6d43b35e3e818b3399c2e9a6b3f21343c372aeda?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_10')}</p>
                  </button>
                </div>
              </div>
            </section>

            {/* Section 2: Legal Entity Registration */}
            <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6" dir={textDirection1}>
              <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">
                {t('c_11')}
              </h2>
              <div className="border border-gray-500 p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                  
                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/2f3309f7702c6674f73c9a2fa7960f4beb4617d6?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_12')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-300 rounded-2xl">
                        <img src="https://cdn.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2Fea5e9199f8434a80a1d807b17a3b2896?format=webp&width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_13')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/346346fb487ef1c412994e8319dc95362d28b528?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_14')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/0239044f751903d7bac59e99517c742a608ea229?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_15')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/799f30f1067341b5dd5c08d21a0f0d23d8c799bd?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_16')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-300 rounded-2xl">
                        <img src="https://cdn.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2F0634050d5b5c4e93bb8705e6de6c951f?format=webp&width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_17')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/751a6ee700d60f2ca1a907db0b4fc9be24644d40?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_18')}</p>
                  </button>

                </div>
              </div>
            </section>

            {/* Section 3: Tax Accounts */}
            <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6" dir={textDirection1}>
              <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">
                {t('c_19')}
              </h2>
              <div className="border border-gray-500 p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                  
                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center  ">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/28c93d02bf0a7c6456a5af7eed085c85ad55da2b?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_20')}</p>
                  </button>

                 

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/91c268daadf21ba064fdf4012b1540849f8ddfdf?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_21')}</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/d3c94eec3c6589fdfbd83204a9cf8973e485225b?width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_22')}</p>
                  </button>
                </div>
              </div>
            </section>

            {/* Section 4: Office Report */}
            <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6" dir={textDirection1}>
              <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">
                {t('c_23')}
              </h2>
              <div className="border border-gray-500 p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                  
                   <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-300 rounded-2xl">
                        <img src="https://cdn.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2Ff12d0e187c6445e2849f340c381fa583?format=webp&width=118" alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">{t('c_24')}</p>
                  </button>

                </div>
              </div>
            </section>

          </div>
  )     
}

export default ContentOfTaxRegistrationList
