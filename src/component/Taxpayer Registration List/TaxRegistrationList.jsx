import React, { useState } from 'react'
import { Header } from '../Header';
import ContentOfTaxRegistrationList from './ContentOfTaxRegistrationList';
import MainMunue from './MainMunue';

function TaxRegistrationList() {

    const [activeSection, setActiveSection] = useState('btn1');

  return (
    <div className="flex flex-col bg-white" dir="ltr">
      {/* <Header/> */}

      {/* Main Content */}
    <div className="container mx-auto px-4 mt-15 md:px-8 lg:px-12 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8" dir='rtl'>

            <MainMunue setActiveSection={setActiveSection}/>
            
                {
                    activeSection==='btn2' &&(
                        <div>
                            <h2>no one here</h2>
                        </div>
                    )
                }

                {
                    activeSection==='btn1' &&(
                        <ContentOfTaxRegistrationList/>
                    )
                }
            
        </div>
      </div>
    </div>
  );
}

export default TaxRegistrationList
