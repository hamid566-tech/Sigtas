import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home';
import NotFound from './component/NotFound';
import TaxRegistrationList from './component/Taxpayer Registration List/TaxRegistrationList';
import { Header } from './component/Header';
import i18n from './i18n'; // Adjust as necessary

function App() {
  const [language, setLanguage] = useState(() => {
    // Retrieve the stored language or default to 'English'
    return localStorage.getItem('language') || 'English';
  });

  useEffect(() => {
    const direction = (language === 'دری' || language === 'پښتو') ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); // Store language in localStorage
  }, [language]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <HashRouter>
      <Header currentLanguage={language} onLanguageChange={handleLanguageChange} />
      <Routes>
        <Route path="/" element={<Home currentLanguage={language} />} />
        <Route path='/menue' element={<TaxRegistrationList currentLanguage={language} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;