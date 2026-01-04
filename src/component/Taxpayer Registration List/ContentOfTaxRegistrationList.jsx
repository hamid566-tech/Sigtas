import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Tin_Search from './SubComponents/tin_info_menue_1/Tin_Search';
import Cont_of_Tax from './Cont_of_Tax';

function ContentOfTaxRegistrationList({ currentLanguage }) {
   
  const textDirection = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'ltr' : 'rtl';
  const textDirection1 = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'rtl' : 'ltr';
  const { t } = useTranslation();

  return (
    <div className="width-full sm:flex-1 space-y-6 md:space-y-8 px-4 md:px-10 py-8 mt-3 h-[83vh] overflow-y-auto rounded-[37px] border border-cyan-300/60 shadow-[3px_0_8.5px_5px_rgba(0,43,255,0.32)]" dir={textDirection}>
      {/* <Cont_of_Tax textDirection1={textDirection1} t={t} /> */}
      <Routes>
        <Route path="/" element={<Cont_of_Tax textDirection1={textDirection1} t={t} />} />
        <Route path="tin_search" element={<Tin_Search textDirection1={textDirection1} t={t} />} />
      </Routes>
    </div>
  );
}

export default ContentOfTaxRegistrationList;