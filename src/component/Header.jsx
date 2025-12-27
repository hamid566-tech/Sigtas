import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, User, ChevronDown, Home } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header({ currentLanguage, onLanguageChange }) {
  const { t, i18n } = useTranslation();
  const [languageOpen, setLanguageOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // Change the language using i18next
    const direction = (language === 'دری' || language === 'پښتو') ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    
    localStorage.setItem('language', language); // Store language in localStorage
    setLanguageOpen(false); // Close the dropdown
    onLanguageChange(language); // Invoke the parent's language change handler if needed
  };

  const handleMenuClick = () => {
    navigate(location.pathname === '/menue' ? '/' : '/menue');
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 text-white z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Left Section - User Info */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-fit">
          <User className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
          <span className="text-sm sm:text-base font-medium whitespace-nowrap">SIG01010</span>
          
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded border border-white text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
              aria-label="Language selector"
              aria-expanded={languageOpen}
            >
              <span>{currentLanguage}</span> {/* Display current language */}
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Language Dropdown Menu */}
            {languageOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-medium text-sm" onClick={() => handleLanguageChange("English")}>
                  English
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-medium text-sm" onClick={() => handleLanguageChange("دری")}>
                  دری
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-medium text-sm" onClick={() => handleLanguageChange("پښتو")}>
                  پښتو
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Center Section - Title (Hidden on Mobile) */}
        <div className="hidden sm:block flex-1 text-center">
          <h1 className="text-lg sm:text-xl font-bold">{t('Title')}</h1>
        </div>

        {/* Right Section - Language Dropdown */}
        <div className="flex items-center gap-3">
          {/* Menu Icon */}
          <div>
            <button onClick={handleMenuClick} className="flex items-center justify-center p-1.5 sm:p-2 hover:bg-white/10 rounded transition-colors" aria-label="Menu">
              <div className="flex items-center justify-center gap-1">
                {location.pathname === '/menue' ? (
                  <Home className="w-6 h-6 sm:w-7 sm:h-7" />
                ) : (
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
                )}
                <span className="text-center">{t(location.pathname === '/menue' ? 'Home' : 'Menu')}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}