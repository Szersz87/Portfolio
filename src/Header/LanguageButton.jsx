import React, { useState } from 'react';
import Button from "../Shered/Button"

export default function LanguageButton() {

        const [language, setLanguage] = useState('polish');
      
        const toggleLanguage = () => {
          setLanguage((prevLanguage) => (prevLanguage === 'polish' ? 'english' : 'polish'));
        };

    return(
        <Button 
        className={`languageSwitcher ${language === 'polish' ? 'polishLanguage' : 'englishLanguage'}`}
        onClick={toggleLanguage}/>
    )

}