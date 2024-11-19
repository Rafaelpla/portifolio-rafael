import React from 'react';
import { useState } from 'react';

const Navbar: React.FC = () => {

    const navItems = ['Sobre', 'Habiliades', 'Projetos', 'Carreira', 'Contato'];

    return(
        <nav className='bg-black text-zinc-400'>
        <div className='ml-4 mr-4 text-md flex justify-center space-x-4'>
          {navItems.map((item, index) => (
            <div
              key={index}
              className='p-4 h-10 w-22 flex items-center justify-center hover:cursor-pointer select-none rounded-md hover:bg-[#2b2b2b] hover:text-white'
            >
              <h1>{item}</h1>
            </div>
          ))}
        </div>
      </nav>
    )
}

export default Navbar