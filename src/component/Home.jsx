import { Header } from "./Header";
import islamic_logo from "../assets/islamic-logo.png";


export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* <Header /> */}

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 mt-15 py-6 sm:py-8 lg:py-12 ">
        <div className="w-full max-w-8xl mx-5 border border-sigtas-border rounded">
          {/* Inner Content */}
          <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
            {/* Top Language Headers - Responsive Layout */}
            <div className="w-full flex flex-col sm:flex-row justify-between gap-6 sm:gap-4 text-center text-xs sm:text-sm lg:text-base">
              {/* Left Section - Dari */}
              <div className="flex-1 text-sigtas-muted space-y-1 sm:space-y-2">
                <p>امارت اسلامی افغانستان</p>
                <p>وزارت مالیه</p>
                <p>ریاست عمومی عواید</p>
              </div>

              {/* Right Section - Pashto */}
              <div className="flex-1 text-sigtas-muted space-y-1 sm:space-y-2">
                <p>د افغانستان اسلامي امارت</p>
                <p>د مالیي وزارت</p>
                <p>د عوایدو لوی ریاست</p>
              </div>
            </div>

            {/* Government Seal Image */}
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e6aefdcb5dd50e75e6a8d1ba793732f5a6cc9e29?width=516"
                alt="Afghanistan Government Seal"
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain"
              />
            </div>

            {/* English Titles - Center */}
            <div className="text-center space-y-2 sm:space-y-3">
              <h1 className="text-base sm:text-lg lg:text-2xl font-semibold text-sigtas-dark">
                Islamic Emirate of Afghanistan
              </h1>
              <h2 className="text-base sm:text-lg lg:text-2xl font-semibold text-sigtas-dark">
                Ministry of Finance
              </h2>
              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-sigtas-dark">
                Afghanistan Revenue Department
              </h3>
            </div>

            {/* System Name - Red Accent */}
            <div className="text-center space-y-2 sm:space-y-3 max-w-3xl">
              <h4 style={{ color: '#1ecad3' }} className="text-base sm:text-lg lg:text-2xl font-semibold text-sigtas-error">
                Standard Integrated Government Tax Administration System
              </h4>
              <h5 style={{ color: '#118ab2' }} className="text-base sm:text-lg lg:text-2xl  text-sigtas-error font-extrabold">
                SIGTAS
              </h5>
            </div>

            {/* Bottom User Info */}
            <div className="text-center space-y-1 sm:space-y-2 border-t border-sigtas-border pt-6 sm:pt-8 mt-6 sm:mt-8 w-full">
              <p className="text-xs sm:text-sm lg:text-base text-sigtas-dark font-normal">
                استفاده کننده متوصل
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-sigtas-gray font-normal">
                SIG01010
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
