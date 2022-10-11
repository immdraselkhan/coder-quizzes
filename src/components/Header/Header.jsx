/*
* Global header component
*/

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar';
import { BookOpenIcon, ChartPieIcon, NewspaperIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const pages = [{name: 'Topics', icon: BookOpenIcon, slug: 'topics'}, {name: 'Statistics', icon: ChartPieIcon, slug: 'statistics'}, {name: 'Blog', icon: NewspaperIcon, slug: 'blog'}];
  
  const navLinks = pages.map(page => (
    <NavLink key={pages.indexOf(page)} className={({ isActive }) => `${isActive ? 'tex-white' : 'text-[#90a7d6]'} hover:text-white font-semibol flex md:block items-center gap-3 w-fit`} to={page.slug}>
      {<page.icon className="h-6 w-6 inline md:mb-2 md:flex md:mx-auto" />} 
      <span>{page.name}</span>
    </NavLink>
  ));

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#3a28a7] sticky top-0">
      <div className="max-w text-white">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks}/>
        {menuOpen && <MobileMenu navLinks={navLinks} />}
      </div>
    </header>
  )
};

export default Header;