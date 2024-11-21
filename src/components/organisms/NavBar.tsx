import React, { useState } from 'react';
import ItemsNav from '../molecules/ItemsNav';
import Languageswitch from '../molecules/LanguageSwitch';

const Navbar: React.FC = () => {
    const [language, setLanguage] = useState('BR');

    return(
        <div>
            <ItemsNav language={language} />
            <Languageswitch language={language} setLanguage={setLanguage} />
        </div>
    )
}

export default Navbar