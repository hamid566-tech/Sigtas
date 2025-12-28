import React, { useState } from "react";
// import polygon1 from "./polygon-1.svg";
// import polygon2 from "./polygon-2.svg";

const IndSearch = () => {
  const [formData, setFormData] = useState({
    identityNumber: "",
    total: "",
    name: "",
    fatherName: "",
    birthplace: "",
    nickname: "",
    birthDate: "",
    idCardNumber: "",
    phoneNumber: "",
    mobileNumber: "",
    registeredDocumentNumber: "",
    count: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFind = () => {
    console.log("Find clicked", formData);
  };

  const handleExit = () => {
    console.log("Exit clicked");
  };

  const handleIncrement = () => {
    const currentCount = Number.parseInt(formData.count) || 0;
    setFormData((prev) => ({
      ...prev,
      count: (currentCount + 1).toString(),
    }));
  };

  const handleDecrement = () => {
    const currentCount = Number.parseInt(formData.count) || 0;
    if (currentCount > 0) {
      setFormData((prev) => ({
        ...prev,
        count: (currentCount - 1).toString(),
      }));
    }
  };

  const formFields = [
    { label: "اسم :", field: "name", position: "right" },
    { label: "ولد :", field: "fatherName", position: "right" },
    { label: "ولدیت :", field: "birthplace", position: "right" },
    { label: "تخلص :", field: "nickname", position: "right" },
    { label: "تاریخ تولد :", field: "birthDate", position: "right" },
    { label: "نمبر تذکره :", field: "idCardNumber", position: "right" },
    { label: "نمبر تیلفون :", field: "phoneNumber", position: "left" },
    { label: "شماره موبایل :", field: "mobileNumber", position: "left" },
    {
      label: "نمبر سند ثبت شده :",
      field: "registeredDocumentNumber",
      position: "left",
    },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6">
      <h2 className="text-center text-base md:text-lg font-semibold text-black mb-6">
                {t('c_1')}
              </h2>
      <div className="border border-gray-500 p-4 md:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8" />

        <div className=" top-[18px] left-9 w-[838px] h-[961px]">
          <div className=" top-[22px] left-0 w-[838px] h-[939px] rounded-[26px] border border-solid border-black" />

          <div className="flex w-52 justify-center absolute top-0 left-[315px] bg-white items-center gap-2.5 p-2.5">
            <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[14.7px] text-center relative w-fit mt-[-1.00px] text-black tracking-[0] leading-[normal] [direction:rtl]">
              جستجو نمبر تشخصیه
            </div>
          </div>

          <div className="absolute top-[51px] left-[30px] w-[774px] h-[83px] flex gap-[132px] border border-solid border-[#cccccc] shadow-[1px_2px_5.5px_4px_#00000040]">
            <div className="mt-[23px] w-[251px] ml-[19px] flex gap-[12.3px]">
              <input
                type="text"
                value={formData.total}
                onChange={(e) => handleInputChange("total", e.target.value)}
                className="w-[140.13px] h-[38px] bg-white border border-solid border-[#7e7a7a] px-2"
                aria-label="مجموع"
              />

              <div className="flex w-[98.55px] h-9 relative items-center gap-2.5 p-2.5">
                <label className="[font-family:'Inter-Medium',Helvetica] font-medium text-[13px] text-center relative w-fit mt-[-1.00px] text-black tracking-[0] leading-[normal] [direction:rtl]">
                  مجموع :
                </label>
              </div>
            </div>

            <div className="mt-[22px] w-[356px] flex gap-1">
              <input
                type="text"
                value={formData.identityNumber}
                onChange={(e) =>
                  handleInputChange("identityNumber", e.target.value)
                }
                className="w-[235px] h-[38px] bg-white border border-solid border-[#7e7a7a] px-2"
                aria-label="نمبر تشخصیه"
              />

              <div className="inline-flex w-[117px] h-[38px] relative justify-center items-center gap-2.5 p-2.5">
                <label className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[14.7px] text-center relative w-fit mt-[-1.00px] text-black tracking-[0] leading-[normal] [direction:rtl]">
                  نمبر تشخصیه&nbsp;&nbsp;:
                </label>
              </div>
            </div>
          </div>

          <div className="absolute top-[169px] left-[30px] w-[774px] h-[417px] flex flex-col gap-[31px] border border-solid border-[#cccccc] shadow-[1px_2px_5.5px_4px_#00000040]">
            <div className="ml-[27px] w-[720px] h-[290px] relative mt-6">
              {formFields.map((item, index) => {
                const topPosition =
                  item.position === "right"
                    ? index < 6
                      ? index * 51
                      : 0
                    : (index - 6) * 51;
                const leftPosition = item.position === "right" ? 641 : 239;
                const inputLeftPosition = item.position === "right" ? 402 : 0;

                return (
                  <React.Fragment key={item.field}>
                    <div
                      className="inline-flex justify-center absolute items-center gap-2.5 p-2.5"
                      style={{
                        top: `${topPosition}px`,
                        left: `${leftPosition}px`,
                      }}
                    >
                      <label className="[font-family:'Inter-Medium',Helvetica] font-medium text-[13px] text-center relative w-fit mt-[-1.00px] text-black tracking-[0] leading-[normal] [direction:rtl]">
                        {item.label}
                      </label>
                    </div>

                    <input
                      type="text"
                      value={formData[item.field]}
                      onChange={(e) =>
                        handleInputChange(item.field, e.target.value)
                      }
                      className="absolute w-[235px] h-[38px] bg-white border border-solid border-[#7e7a7a] px-2"
                      style={{
                        top: `${topPosition}px`,
                        left: `${inputLeftPosition}px`,
                      }}
                      aria-label={item.label}
                    />
                  </React.Fragment>
                );
              })}
            </div>

            <div className="ml-[91px] w-[503px] flex">
              <button
                onClick={handleFind}
                className="flex mt-[7px] w-[110px] h-[35px] relative justify-center bg-[#09fff2] rounded-[50px] items-center gap-2.5 p-2.5 cursor-pointer hover:opacity-90 transition-opacity"
                type="button"
                aria-label="یافتن"
              >
                <span className="relative w-fit mt-[-1.50px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[13px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                  یافتن
                </span>
              </button>

              <button
                onClick={handleExit}
                className="flex mt-[7px] w-[110px] h-[35px] relative ml-[29px] justify-center bg-[#ff5309] rounded-[50px] items-center gap-2.5 p-2.5 cursor-pointer hover:opacity-90 transition-opacity"
                type="button"
                aria-label="خروج"
              >
                <span className="relative w-fit mt-[-1.50px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[13px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                  خروج
                </span>
              </button>

              <div className="w-6 h-[49.82px] ml-[38px] flex flex-col">
                <button
                  onClick={handleIncrement}
                  className="ml-[1.6px] w-[20.78px] h-[16.31px] cursor-pointer hover:opacity-70 transition-opacity"
                  type="button"
                  aria-label="افزایش"
                >
                  <img className="w-full h-full" alt="Polygon" src="https://api.builder.io/api/v1/image/assets/TEMP/aac7438f9702a6b01feb69e9506c28cd758adb88?" />
                </button>

                <div className="ml-[8.8px] w-[6.32px] h-[6.32px] mt-[5.2px] bg-[#504d4d] rounded-[3.16px]" />

                <button
                  onClick={handleDecrement}
                  className="mt-[5.7px] ml-[1.6px] w-[20.78px] h-[16.31px] cursor-pointer hover:opacity-70 transition-opacity"
                  type="button"
                  aria-label="کاهش"
                >
                  <img className="w-full h-full" alt="Polygon" src="https://api.builder.io/api/v1/image/assets/TEMP/aac7438f9702a6b01feb69e9506c28cd758adb88?" />
                </button>
              </div>

              <input
                type="text"
                value={formData.count}
                onChange={(e) => handleInputChange("count", e.target.value)}
                className="mt-0.5 w-[91px] h-[38px] ml-[27px] bg-white border border-solid border-[#7e7a7a] px-2 text-center"
                aria-label="تعداد"
              />

              <div className="flex mt-0.5 w-[66px] h-9 relative ml-2 items-center gap-2.5 p-2.5">
                <label className="[font-family:'Inter-Medium',Helvetica] font-medium text-[13px] text-center relative w-fit mt-[-1.00px] text-black tracking-[0] leading-[normal] [direction:rtl]">
                  تعداد :
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndSearch;
