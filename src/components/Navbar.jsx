import React from "react";

function Navbar() {
  return (
    <header className=" flex justify-between fixed w-full bg- backdrop-blur-md	">
      <a href="/" className=" ml-10">
        <img
          src="https://res.cloudinary.com/daofgugyr/image/upload/v1673340611/My%20portfoli/Eru_Iroro_Logo.png"
          alt="Eru Iroro Logo"
          width={85}
        />
      </a>
      <nav className="  font-ZCOOL-XiaoWei flex-row py-4 ">
        <ul className=" md:flex justify-end space-x-5 text-xl my-3 hidden">
          <li className=" hover:text-yellow mr-16">
            <a
              href="https://drive.google.com/file/d/1ihgNi0YiimD5I-UX05R2qSc8Ek2gBbUO/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li className=" hover:text-yellow">
            <a href="#skills">Skills</a>
          </li>
          <li className=" hover:text-yellow">
            <a href="#projects">Projects</a>
          </li>
          <li className=" hover:text-yellow">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
