import React, { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 60,
      behavior: 'smooth'
    });
    setIsActive(false);
  };

  return (
    <div className="header">
      <div className="logo">IVET</div>
      <div className="burger-menu" onClick={toggleMenu}>
        <span className={isActive ? 'active' : ''}></span>
      </div>
      <div className={`nav ${isActive ? 'active' : ''}`}>
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>HOME</a>
        <a href="#itinerary" onClick={(e) => handleNavClick(e, 'itinerary')}>ITINERARY</a>
        <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>GALLERY</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>ABOUT</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;