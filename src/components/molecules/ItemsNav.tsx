import React, { useState } from 'react';

interface ItemsNavProps {
  language: string;
}

const ItemsNav: React.FC<ItemsNavProps> = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let navItems = ['Sobre', 'Habilidades', 'Projetos', 'Carreira', 'Contato'];

  if (language === 'EN') {
    navItems = ['About', 'Skills', 'Projects', 'Career', 'Contact'];
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='bg-black text-zinc-400'>
        <div className='ml-4 mr-4 text-md flex justify-between items-center'>
          <button
            onClick={toggleMenu}
            className='md:hidden p-3 text-zinc-400 hover:text-white focus:outline-none'
          >
            {isMenuOpen ? (
              <span className='text-2xl'>&#10005;</span>
            ) : (
              <span className='text-2xl text-zinc-400'>&#9776;</span>
            )}
          </button>
        </div>

        <div className={`md:flex md:justify-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className='p-4 h-10 w-22 flex items-center justify-center hover:cursor-pointer select-none rounded-md hover:bg-[#2b2b2b] hover:text-white transition-all duration-450 ease-in-out'
            >
              <h1>{item}</h1>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default ItemsNav;