import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContentOfTaxRegistrationList from './ContentOfTaxRegistrationList';
import MainMunue from './MainMunue';
import Assessment from '../Assessment/Assessment';

function TaxRegistrationList({ currentLanguage }) {
    // Determine text direction based on currentLanguage
    const textDirection = (currentLanguage === 'دری' || currentLanguage === 'پښتو') ? 'rtl' : 'ltr';

    return (
        
            <div className="flex flex-col bg-white" dir={textDirection}>
                {/* Main Content */}
                <div className="container mx-auto w-full px-4 mt-13 md:px-8 lg:px-8 py-6 md:py-8">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                        {/* Navigation Links */}
                        <MainMunue currentLanguage={currentLanguage} />
                    
                        {/* Routes for each section */}
                        <Routes>
                            <Route
                                path="content/*"
                                element={<ContentOfTaxRegistrationList currentLanguage={currentLanguage} />}
                            />
                            <Route
                                path="assessment"
                                element={<Assessment currentLanguage={currentLanguage} />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        
    );
}

export default TaxRegistrationList;