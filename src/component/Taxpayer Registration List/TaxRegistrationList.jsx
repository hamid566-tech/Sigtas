import React, { useState } from 'react';
import ContentOfTaxRegistrationList from './ContentOfTaxRegistrationList';
import MainMunue from './MainMunue';
import Assessment from '../Assessment/Assessment';

function TaxRegistrationList({ currentLanguage }) { // Accept currentLanguage as a prop
    const [activeSection, setActiveSection] = useState('btn1');

    // Determine text direction based on currentLanguage
    const textDirection = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'rtl' : 'ltr';

    return (
        <div className="flex flex-col bg-white" dir={textDirection}>
            {/* Main Content */}
            <div className="container mx-auto w-full px-4 mt-13 md:px-8 lg:px-8 py-6 md:py-8 h-[90vh]">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10" >
                    <MainMunue setActiveSection={setActiveSection} currentLanguage={currentLanguage}  />
                    {activeSection === 'btn1' && <ContentOfTaxRegistrationList currentLanguage={currentLanguage}  />}
                    {activeSection === 'btn2' && <Assessment currentLanguage={currentLanguage} />}
                </div>
            </div>
        </div>
    );
}

export default TaxRegistrationList;