import React from 'react'
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, CodeBracketIcon } from '@heroicons/react/24/solid';

const Navbar = ({ menuOpen, setMenuOpen, navLinks }) => {
  
  const MenuToggle = ({ menuOpen }) => (
    // Added a fun transition to the icon when clicked
    menuOpen ? <XMarkIcon /> : <Bars3Icon />
  );
  return (
    <div className="flex items-center justify-between p-4">
    {/* App header */}
    <div className="flex items-center gap-3">
      <CodeBracketIcon className="h-10 w-610 text-white"/>
      <Link to="/" className="text-xl font-semibold">CodeQuizzes</Link>
    </div>
    {/* Links shown in a row on larger screens */}
    <nav className="hidden md:flex space-x-12">
      {navLinks}
    </nav>
    {/* Button to toggle mobile menu shown on smaller screens */}
    <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50 h-8 w-8 text-white"><MenuToggle menuOpen={menuOpen} /></button>
  </div>
  )
}

export default Navbar;