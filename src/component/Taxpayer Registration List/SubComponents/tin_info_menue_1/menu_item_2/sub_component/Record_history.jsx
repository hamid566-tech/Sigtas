import React from 'react';

const RecordHistory = ({ textDirection1, t}) => {
  // Define your data as an array of objects
  const records = [
    { step: 1, status: "باز شده", by: "SIG01010", date: "1404-10-20" },
    { step: 2, status: "تعلیق", by: "SIG01010", date: "1404-10-20" },
    { step: 3, status: "تایید فزیکی", by: "SIG01010", date: "1404-10-20" },
    { step: 4, status: "رد تکرار", by: "SIG01010", date: "1404-10-20" },
    { step: 5, status: " ", by: "", date: "" },
    { step: 6, status: " ", by: "", date: "" },
    { step: 7, status: " ", by: "", date: "" }
  ];

  return (
    <div className="overflow-x-auto overflow-y-auto h-100 border border-gray-300 flex md:flex-row justify-between p-4 md:p-6" dir={textDirection1}>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border bg-[#ddb892] border-cyan-400/60 px-4 py-2 min-w-[100px]">مرحله</th>
            <th className="border bg-[#ddb892] border-cyan-400/60 px-4 py-2 min-w-[250px]">تغییر وضعیت</th>
            <th className="border bg-[#ddb892] border-cyan-400/60 px-4 py-2 min-w-[250px]">تغییر وضعیت توسط</th>
            <th className="border bg-[#ddb892] border-cyan-400/60 px-4 py-2 min-w-[150px]">تاریخ نمبر</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {records.map((record) => (
            <tr key={record.step}>
              <td className="border bg-[#b9d6f2] border-cyan-400/60 px-4 py-2 min-w-[100px]">{record.step}</td>
              <td className="border bg-[#abc4ab] border-cyan-400/60 px-4 py-2 min-w-[250px]">{record.status}</td>
              <td className="border bg-[#abc4ab] border-cyan-400/60 px-4 py-2 min-w-[250px]">{record.by}</td>
              <td className="border bg-[#abc4ab] border-cyan-400/60 px-4 py-2 min-w-[150px]">{record.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordHistory;