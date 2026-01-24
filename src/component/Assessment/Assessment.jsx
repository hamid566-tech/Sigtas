import React from 'react';
import { useTranslation } from 'react-i18next';

function Assessment({ currentLanguage }) {
  const textDirection = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'ltr' : 'rtl';
  const textDirection1 = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'rtl' : 'ltr';
  const { t } = useTranslation();

  const renderButton = (imgSrc, label, key) => (
    <button key={key} className="flex flex-col min-w-40 min-h-40 justify-center items-center gap-3 hover:scale-110 hover:bg-gray-50 hover:rounded-[20px] transition-transform duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-b-[#3a86ff]">
      <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
        <img src={imgSrc} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="text-xs md:text-sm font-semibold text-black text-center">{label}</p>
    </button>
  );

  return (
    <div className="w-full sm:flex-1 space-y-6 md:space-y-8 px-10 py-8 h-[83vh] mt-3 overflow-y-auto border border-cyan-300/60 " dir={textDirection}>
      {[ // Sections array
        { title: 'c1_1', buttons: [
          { img: 'https://api.builder.io/api/v1/image/assets/TEMP/dbf185238f8b003a9c8792532acd1e0926a28c89?width=118', label: 'c1_2' },
          { img: 'https://cdn.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2F351123f276914441ad35151e3b733e4d?format=webp&width=118', label: 'c1_3' },
          { img: 'https://api.builder.io/api/v1/image/assets/TEMP/f728ea985b1e8d0700cb6c4e70503a1f87f33c3f?width=118', label: 'c1_4' },
          { img: 'https://api.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2F42b647aeca9c49f4b6a771bc9b218e04?format=webp&width=118', label: 'c1_5' }
        ]},
        { title: 'c1_6', buttons: [
          { img: 'https://api.builder.io/api/v1/image/assets/TEMP/33b025a01b6619450f37be6cad03b130075db47e?width=118', label: 'c1_7' },
          { img: 'https://api.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2Fa9f2a260ae8748a58a8f29479facad11?format=webp&width=118', label: 'c1_8' }
        ]},
        { title: 'c1_9', buttons: [
          { img: 'https://api.builder.io/api/v1/image/assets/TEMP/c6dfda40d283c54b3bd3aa94317c154b573d215a?width=118', label: 'c1_10' },
          { img: 'https://api.builder.io/api/v1/image/assets%2Ff68546ab0b8f44ae98779b8a4f64fa7d%2Fb4f4946801824c64871c60366ce4642d?format=webp&width=118', label: 'c1_11' },
          { img: 'https://api.builder.io/api/v1/image/assets/TEMP/dc640c701e38380c9fbb8a027cdf06444bc92cf4?width=118', label: 'c1_12' }
        ]},
        { title: 'c1_13', buttons: [
          { img: 'https://api.builder.io/api/v1/image/assets/TEMP/eff5b546f8cca7bc13ddc7aacd43f9f9cdf82ede?width=118', label: 'c1_14' }
        ]}
      ].map((section, index) => (
        <section key={index} className="bg-white/10 backdrop-blur-sm rounded-[37px] border border-cyan-400/60 shadow-[0px_0_10px_1px_rgba(0,43,255,0.32)] p-4 md:p-6" dir={textDirection1}>
          <div className=" border border-cyan-500/60 bg-[rgba(171,196,255,0.9)] rounded-[37px]  p-4 md:p-6 mb-3">
            <h2 className="text-center text-base md:text-lg font-semibold text-black ">{t(section.title)}</h2>
          </div>
          <div className=" border border-cyan-500/60 bg-[#c2c2c2] rounded-[37px]  p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {section.buttons.map((button, buttonIndex) => renderButton(button.img, t(button.label), buttonIndex))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Assessment;