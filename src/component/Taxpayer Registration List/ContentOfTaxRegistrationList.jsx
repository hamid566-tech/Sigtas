import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cont_of_Tax from './Cont_of_Tax';
import Tin_Search from './SubComponents/tin_info_menue_1/menu_item_1/Tin_Search';
import Request_Tin from './SubComponents/tin_info_menue_1/menu_item_2/Request_Tin';

function ContentOfTaxRegistrationList({ currentLanguage }) {
   
  const location = useLocation(); // Get the current location
  const textDirection = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'ltr' : 'rtl';
  const textDirection1 = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'rtl' : 'ltr';
  const { t } = useTranslation();



  return (
    < >
      {/* <Cont_of_Tax textDirection1={textDirection1} t={t} /> */}
      <Routes>
        <Route path="/" element={<Cont_of_Tax textDirection={textDirection} textDirection1={textDirection1} t={t} />} />
        <Route path="tin_search" element={<Tin_Search textDirection={textDirection} textDirection1={textDirection1} t={t} />} />
        <Route path="request_tin/*" element={<Request_Tin textDirection={textDirection}  textDirection1={textDirection1} t={t} />} />
      </Routes>
    </>
  );
}

export default ContentOfTaxRegistrationList;