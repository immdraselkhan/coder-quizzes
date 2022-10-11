import React from 'react'

const MobileMenu = ({ navLinks }) => {
  return (
    <nav className="p-4 flex flex-col space-y-3 md:hidden">
        {navLinks}
    </nav>
  )
}

export default MobileMenu;