import React from 'react'

function MainMunue({setActiveSection}) {
  return (
    // {/* Sidebar Navigation */}
          <div className="w-full lg:w-80 xl:w-96">
            <div className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6">
              <div className="space-y-4 md:space-y-5">
                <button
                onClick={()=> setActiveSection('btn1')}
                className="w-full h-12 flex items-center justify-center rounded-md border-4 border-gray-700/20 shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-white text-black font-semibold text-sm md:text-base hover:bg-gray-50 transition-colors cursor-pointer">
                  فهرست ثبت نام مالیه دهنده گان
                </button>

                <button
                 onClick={()=>setActiveSection('btn2')}
                 className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  ارزیابی
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  پرداخت / پس پرداخت ها
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  تنظیم انتقال ضرر مجدد
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  سند / دوسیه
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  نامه ها / یاد آوریها
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  نامه ها / یاد آوریها
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  مالیه موضوعی
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  بررسی
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  اعتراضات
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  تطبیق قانون
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  بودجه مالیه
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  راپور های اداری
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  روابط / تسهیلات
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  اداره
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  سیستم
                </button>

                <button className="w-full h-12 flex items-center justify-center rounded-md shadow-[0_5px_10px_0_rgba(25,142,142,0.56)] bg-indigo-500 text-white font-semibold text-sm md:text-base hover:bg-indigo-600 transition-colors cursor-pointer">
                  خروچ
                </button>
              </div>
            </div>
          </div>

  )
}

export default MainMunue
