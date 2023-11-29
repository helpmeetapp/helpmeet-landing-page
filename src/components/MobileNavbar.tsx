import React, { useState } from "react";
import CloseIcon from "../assets/icons/CloseIcon";
import BurgerMenuIcon from "../assets/icons/BurgerMenuIcon";
import Button from "./Button";

function MobileNavbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="md:hidden">
      {/* Mobile view Hamburger & Close Icons */}
      <button onClick={handleNav}>
        {openNav ? <CloseIcon /> : <BurgerMenuIcon />}
      </button>

      {/* Mobile view Nav Links */}
      <div
        className={
          openNav
            ? "md:hidden z-20 fixed top-16 right-0 bottom-0 h-full w-3/4 shadow-md px-4 bg-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed top-16 right-[-100%]"
        }
      >
        <div className="py-4 text-lg flex flex-col items-center gap-6">
          <ul className="space-y-4 text-[#009379] font-semibold">
            <li>Discover</li>
            <li>Hire</li>
            <li>Jobs</li>
          </ul>
          <div className="flex flex-col items-center space-y-2">
            <Button label="Sign Up" large />
            <Button label="Sign In" primary large />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MobileNavbar;
