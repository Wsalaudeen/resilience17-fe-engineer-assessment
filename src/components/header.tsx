import { FiSearch, FiGrid, FiX } from "react-icons/fi";
import Hamburger from "../../public/assets/hamburgerIcon.svg";
import Logo from "../../public/assets/fintrackLogo.svg";
import UserAvatar from "../../public/assets/rightIcon.svg";
import { useState } from "react";

export function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header
      className="  flex items-baseline justify-between px-9 py-3 bg-[#fcfdfd]"
      role="banner"
    >
      <nav
        className="flex items-center space-x-4 "
        aria-label="Main navigation"
      >
        <button
          type="button"
          aria-label="Open menu"
          className="w-4 h-4 cursor-pointer bg-transparent border-none p-0"
        >
          <img
            src={Hamburger}
            alt=""
            aria-hidden="true"
            className="w-4 h-4"
            onClick={toggleMenu}
          />
        </button>

        <a
          href="/"
          className="flex items-center space-x-1 "
          aria-label="FinTrack Home"
        >
          <img src={Logo} alt="" aria-hidden="true" className="w-4 h-4" />
          <span className="text-[#437D8E] font-semibold text-lg">FinTrack</span>
        </a>
      </nav>

      <nav
        className={`${
          MenuOpen ? "flex" : "hidden"
        } fixed lg:hidden bg-[#fcfdfd] font-Public  w-1/2  h-screen top-0 left-0`}
      >
        <button
          type="button"
          className="absolute right-2 top-2  px-2 cursor-pointer hover:scale-105 transition-all"
          aria-label="Toggle close menu"
        >
          {" "}
          <FiX className="w-4 h-4" onClick={toggleMenu} />
        </button>
        <ul className="list-none p-8 space-y-6 mt-2 text-[#1b2528] font-medium text-[15px]">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Transaction</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <button
          type="button"
          aria-label={showSearch ? "Close search" : "Open search"}
          className="w-4 h-4 cursor-pointer bg-transparent border-none p-0"
          onClick={() => setShowSearch((prev) => !prev)}
        >
          <FiSearch className="w-4 h-4 text-[#1B2528]" aria-hidden="true" />
        </button>
        {showSearch && (
          <div className="flex items-center min-w-0">
            <label htmlFor="header-search" className="sr-only">
              Search
            </label>
            <input
              id="header-search"
              type="text"
              placeholder="Search..."
              className=" w-full max-w-[5rem] md:max-w-[20rem] lg:w-80 px-1.5 py-1  md:px-2 md:py-1 border border-[#1B2528] rounded-md text-sm bg-[#fcfdfd] shadow transition-all duration-300"
              autoFocus
              aria-label="Search"
            />
          </div>
        )}
        <button
          type="button"
          aria-label="Open grid menu"
          className="w-4 h-4 cursor-pointer bg-transparent border-none p-0"
        >
          <FiGrid className="w-4 h-4 text-[#1B2528]" aria-hidden="true" />
        </button>

        <button
          type="button"
          aria-label="User profile"
          className="w-8 h-8 rounded-full object-cover cursor-pointer bg-transparent border-none p-0"
        >
          <img
            src={UserAvatar}
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}
