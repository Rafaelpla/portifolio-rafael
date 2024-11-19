import React from 'react';
import ItemsNav from '../molecules/ItemsNav';
import Languageswitch from '../molecules/LanguageSwitch';

const Navbar: React.FC = () => {

    return(
        <div>
            <ItemsNav />
            <Languageswitch />
        </div>
    )
}

export default Navbar