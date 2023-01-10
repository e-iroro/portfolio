import React from "react";

function Navbar() {
  return (
    <header className=" flex justify-between ">
      <img
        src="https://res.cloudinary.com/daofgugyr/image/upload/v1673340611/My%20portfoli/Eru_Iroro_Logo.png"
        alt="Eru Iroro Logo"
        width={128}
      />
      <nav className="  font-ZCOOL-XiaoWei flex-row py-8 ">
        <ul className=" flex justify-end space-x-5 text-xl my-3">
          <li className=" hover:text-pink mr-16">Resume</li>
          <li className=" hover:text-pink">Skills</li>
          <li className=" hover:text-pink">Services</li>
          <li className=" 0er:text-pink">Projects</li>
          <li className=" hover:text-pink">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
