import React, { useState } from 'react'
import { Header } from '../Header';
import ContentOfTaxRegistrationList from './ContentOfTaxRegistrationList';
import MainMunue from './MainMunue';
import Assessment from '../Assessment/Assessment';

function TaxRegistrationList() {

    const [activeSection, setActiveSection] = useState('btn1');

  return (
    <div className="flex flex-col bg-white" dir="ltr">
      {/* <Header/> */}

      {/* Main Content */}
    <div className="flex-1 flex items-center justify-center mx-auto px-10 mt-15 py-6 sm:py-8 lg:py-8">
        <div className="flex flex-col w-full lg:flex-row gap-6 lg:gap-10" dir='rtl'>

            <MainMunue setActiveSection={setActiveSection}/>
            
                {
                    activeSection==='btn1' &&(
                        <ContentOfTaxRegistrationList/>
                    )
                }
                {
                    activeSection==='btn2' &&(
                        <Assessment/>
                    )
                }
            
        </div>
      </div>
    </div>
  );
}

export default TaxRegistrationList
