import React from 'react'

function Assessment() {
  return (
    
                    // {/* Main Content Area */}
          <div className="flex-1 space-y-6 md:space-y-8 px-20 py-10 h-150 overflow-y-auto rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)]" dir='ltr'>
                
            {/* Section 1: Assessment Number */}
            <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6 "  dir="rtl">
              <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">
                ارزیابی
              </h2>
              <div className="border border-gray-500 p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                  
                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/dbf185238f8b003a9c8792532acd1e0926a28c89?width=118" alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">درج یا اصلاح اظهارنامه</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-300 rounded-2xl">
                        <img src="https://cdn.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2F351123f276914441ad35151e3b733e4d?format=webp&width=118" alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">چاپ یاداشت ارزیابی</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/f728ea985b1e8d0700cb6c4e70503a1f87f33c3f?width=118" alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">درج کردن پرداخت</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://cdn.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2F42b647aeca9c49f4b6a771bc9b218e04?format=webp&width=118" alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">فورم پرداخت</p>
                  </button>

                </div>
              </div>
            </section>

            {/* Section 2: Modify the assessment */}
            <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6" dir='rtl'>
              <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">
               اصلاح کردن ارزیابی
              </h2>
              <div className="border border-gray-500 p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                  
                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/33b025a01b6619450f37be6cad03b130075db47e?width=118" alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">آماده ساختن ارزیابی مجدد</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-300 rounded-2xl">
                        <img src="https://cdn.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2Fa9f2a260ae8748a58a8f29479facad11?format=webp&width=118" alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">اصلاح کردن ارزیابی</p>
                  </button>

                </div>
              </div>
            </section>

            {/* Section 3: Office operations */}
            <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6" dir='rtl'>
              <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">
                عملیه اداره
              </h2>
              <div className="border border-gray-500 p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                  
                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center  ">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/c6dfda40d283c54b3bd3aa94317c154b573d215a?width=118" alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">تغییر وضعیت سند</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-300 rounded-2xl">
                        <img src="https://cdn.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2Fb4f4946801824c64871c60366ce4642d?format=webp&width=118" alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">برگشت پرداخت</p>
                  </button>

                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/dc640c701e38380c9fbb8a027cdf06444bc92cf4?width=118" alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">حذف نمبر ارزیابی</p>
                  </button>

                </div>
              </div>
            </section>

            {/* Section 4: Office Report */}
            <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6" dir='rtl'>
              <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">
                راپور  های اداری
              </h2>
              <div className="border border-gray-500 p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                  
                  <button className="flex flex-col items-center gap-3 hover:scale-110 hover:bg-gray-50 transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center  ">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/c6dfda40d283c54b3bd3aa94317c154b573d215a?width=118" alt="" className="w-full h-full rounded-2xl object-cover" />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-black text-center">چاپ تصدیق نامه پرداخت مالیه دهنده</p>
                  </button>


                </div>
              </div>
            </section>

          </div>
  )
}

export default Assessment
