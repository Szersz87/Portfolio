import React, { useState } from "react";
import NavigationMenu from "./NavigationMenu";

const HamburgerNav = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className={`NavigationMenu ${open ? "open" : ""}`}>
      <div className="hamburgerIcon" onClick={() => setOpen(!open)}>
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>
      <NavigationMenu isOpen={open} closeMenu={closeMenu} />
    </nav>
  );
};

export default HamburgerNav;
