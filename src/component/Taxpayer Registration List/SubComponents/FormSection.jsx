import React, { useState } from "react";
// import polygon1 from "./polygon-1.svg";
// import polygon2 from "./polygon-2.svg";

export const FormSection = () => {
  const [formData, setFormData] = useState({
    idNumber: "",
    total: "",
    name: "",
    phoneNumber: "",
    fatherName: "",
    mobileNumber: "",
    birthplace: "",
    registeredDocNumber: "",
    nickname: "",
    birthDate: "",
    tazkiraNumber: "",
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

  const rightColumnFields = [
    { label: "اسم :", field: "name" },
    { label: "ولد :", field: "fatherName" },
    { label: "ولدیت :", field: "birthplace" },
    { label: "تخلص :", field: "nickname" },
    { label: "تاریخ تولد :", field: "birthDate" },
    { label: "نمبر تذکره :", field: "tazkiraNumber" },
  ];

  const leftColumnFields = [
    { label: "نمبر تیلفون :", field: "phoneNumber" },
    { label: "شماره موبایل :", field: "mobileNumber" },
    { label: "نمبر سند ثبت شده :", field: "registeredDocNumber" },
  ];

  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)] p-4 md:p-6">
      {/* <div className="absolute -top-px -left-px w-[912px] h-[1077px] rounded-[37px] border-t [border-top-style:solid] border-[#79ccff99] shadow-[3px_0px_8.5px_5px_#002aff52]" /> */}

      {/* <div className="absolute top-[18px] left-9 w-[838px] h-[961px]"> */}
        {/* <div className="absolute top-[22px] left-0 w-[838px] h-[939px] rounded-[26px] border border-solid border-black" /> */}

        <h1 className="text-center text-base md:text-lg font-semibold text-black mb-6">
            جستجو نمبر تشخصیه
          </h1>
        <div className="border border-gray-500 p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">

        <div className="absolute top-[51px] left-[30px] w-[774px] h-[83px] flex gap-[132px] border border-solid border-[#cccccc] shadow-[1px_2px_5.5px_4px_#00000040]">
          <div className="mt-[23px] w-[251px] ml-[19px] flex gap-[12.3px]">
            <input
              type="text"
              value={formData.total}
              onChange={(e) => handleInputChange("total", e.target.value)}
              className="w-[140.13px] h-[38px] bg-white border border-solid border-[#7e7a7a] px-2"
              aria-label="مجموع"
            />

            <label className="flex w-[98.55px] h-9 relative items-center gap-2.5 p-2.5">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[13px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                مجموع :
              </span>
            </label>
          </div>

          <div className="mt-[22px] w-[356px] flex gap-1">
            <input
              type="text"
              value={formData.idNumber}
              onChange={(e) => handleInputChange("idNumber", e.target.value)}
              className="w-[235px] h-[38px] bg-white border border-solid border-[#7e7a7a] px-2"
              aria-label="نمبر تشخصیه"
            />

            <label className="inline-flex w-[117px] h-[38px] relative items-center justify-center gap-2.5 p-2.5">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[14.7px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                نمبر تشخصیه&nbsp;&nbsp;:
              </span>
            </label>
          </div>
        </div>

        <form className="absolute top-[169px] left-[30px] w-[774px] h-[417px] flex flex-col gap-[31px] border border-solid border-[#cccccc] shadow-[1px_2px_5.5px_4px_#00000040]">
          <div className="ml-[27px] w-[720px] h-[290px] relative mt-6">
            {rightColumnFields.map((item, index) => (
              <React.Fragment key={item.field}>
                <label
                  className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute left-[641px]"
                  style={{ top: `${index * 51}px` }}
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[13px] text-left tracking-[0] leading-[normal] [direction:rtl]">
                    {item.label}
                  </span>
                </label>

                <input
                  type="text"
                  value={formData[item.field]}
                  onChange={(e) =>
                    handleInputChange(item.field, e.target.value)
                  }
                  className="absolute left-[402px] w-[235px] h-[38px] bg-white border border-solid border-[#7e7a7a] px-2"
                  style={{ top: `${index * 51}px` }}
                  aria-label={item.label}
                />
              </React.Fragment>
            ))}

            {leftColumnFields.map((item, index) => (
              <React.Fragment key={item.field}>
                <label
                  className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute left-[239px]"
                  style={{ top: `${index * 51}px` }}
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[13px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                    {item.label}
                  </span>
                </label>

                <input
                  type="text"
                  value={formData[item.field]}
                  onChange={(e) =>
                    handleInputChange(item.field, e.target.value)
                  }
                  className="absolute left-0 w-[235px] h-[38px] bg-white border border-solid border-[#7e7a7a] px-2"
                  style={{ top: `${index * 51}px` }}
                  aria-label={item.label}
                />
              </React.Fragment>
            ))}
          </div>

          <div className="ml-[91px] w-[503px] flex">
            <button
              type="button"
              onClick={handleFind}
              className="flex mt-[7px] w-[110px] h-[35px] relative items-center justify-center gap-2.5 p-2.5 bg-[#09fff2] rounded-[50px] cursor-pointer hover:opacity-90 transition-opacity"
              aria-label="یافتن"
            >
              <span className="relative w-fit mt-[-1.50px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[13px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                یافتن
              </span>
            </button>

            <button
              type="button"
              onClick={handleExit}
              className="flex mt-[7px] w-[110px] h-[35px] relative ml-[29px] items-center justify-center gap-2.5 p-2.5 bg-[#ff5309] rounded-[50px] cursor-pointer hover:opacity-90 transition-opacity"
              aria-label="خروج"
            >
              <span className="relative w-fit mt-[-1.50px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[13px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                خروج
              </span>
            </button>

            <div className="w-6 h-[49.82px] ml-[38px] flex flex-col">
              <button
                type="button"
                onClick={handleIncrement}
                className="ml-[1.6px] w-[20.78px] h-[16.31px] cursor-pointer hover:opacity-70 transition-opacity"
                aria-label="افزایش تعداد"
              >
                <img className="w-full h-full" alt="Polygon" src="https://images.unsplash.com/photo-1596886173616-52145299d835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1Nzg2MX0" />
              </button>

              <div className="ml-[8.8px] w-[6.32px] h-[6.32px] mt-[5.2px] bg-[#504d4d] rounded-[3.16px]" />

              <button
                type="button"
                onClick={handleDecrement}
                className="mt-[5.7px] ml-[1.6px] w-[20.78px] h-[16.31px] cursor-pointer hover:opacity-70 transition-opacity"
                aria-label="کاهش تعداد"
              >
                <img className="w-full h-full" alt="Polygon" src="https://images.unsplash.com/photo-1596886173616-52145299d835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1Nzg2MX0" />
              </button>
            </div>

            <input
              type="text"
              value={formData.count}
              onChange={(e) => handleInputChange("count", e.target.value)}
              className="mt-0.5 w-[91px] h-[38px] ml-[27px] bg-white border border-solid border-[#7e7a7a] px-2 text-center"
              aria-label="تعداد"
            />

            <label className="flex mt-0.5 w-[66px] h-9 relative ml-2 items-center gap-2.5 p-2.5">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[13px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                تعداد :
              </span>
            </label>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};
