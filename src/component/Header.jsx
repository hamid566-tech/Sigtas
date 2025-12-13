import { Menu, User, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // State for selected language

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLanguageOpen(false); // Close dropdown after selection
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 text-white z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Left Section - User Info */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-fit">
          <User className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
          <span className="text-sm sm:text-base font-medium whitespace-nowrap">SIG01010</span>
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded border border-white text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
              aria-label="Language selector"
              aria-expanded={languageOpen}
            >
              <span>{selectedLanguage}</span> {/* Display selected language */}
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Language Dropdown Menu */}
            {languageOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-medium text-sm"
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-medium text-sm"
                  onClick={() => handleLanguageChange("Dari")}
                >
                  Dari
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-medium text-sm"
                  onClick={() => handleLanguageChange("Pashto")}
                >
                  Pashto
                </button>
              </div>
            )}
          </div>
        </div>
        

        {/* Center Section - Title (Hidden on Mobile) */}
        <div className="hidden sm:block flex-1 text-center">
          <h1 className="text-lg sm:text-xl font-bold">سیگتاس سیستم</h1>
        </div>

        {/* Right Section - Language Dropdown */}
        <div className="flex items-center gap-3">
          

          {/* Menu Icon */}
          <div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 hover:bg-white/10 rounded transition-colors"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}