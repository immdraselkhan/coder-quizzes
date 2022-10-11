import React from 'react'
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, CodeBracketIcon } from '@heroicons/react/24/solid';

const Navbar = ({ menuOpen, setMenuOpen, navLinks }) => {
  
  const MenuToggle = ({ menuOpen }) => (
    menuOpen ? <XMarkIcon /> : <Bars3Icon />
  );
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <CodeBracketIcon className="h-10 w-610 p-2 text-[#3a28a7] bg-white rounded-full" />
        <Link to="/" className="text-xl font-semibold">CoderQuizzes</Link>
      </div>
      <nav className="hidden md:flex space-x-12">
        {navLinks}
      </nav>
      <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50 h-8 w-8 text-white"><MenuToggle menuOpen={menuOpen} /></button>
    </div>
  )
}

export default Navbar;