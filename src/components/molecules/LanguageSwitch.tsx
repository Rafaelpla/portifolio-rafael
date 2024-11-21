import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';

interface LanguageswitchProps {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
  }

const Languageswitch: React.FC<LanguageswitchProps> = ({ language, setLanguage }) => {

    const handleLanguageChange = () => {
        setLanguage(language === 'BR' ? 'EN' : 'BR');
      };

    return(
        <div className='p-3 md:p-2 absolute md:top-1 top-0 text-md flex items-center right-4 md:right-24 '>
            <FaGlobe className='md:text-xl text-3xl text-zinc-400 hover:text-zinc-500 cursor-pointer' />
        </div>
    )
}

export default Languageswitch