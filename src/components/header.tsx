import { FiSearch, FiGrid } from "react-icons/fi";
import Hamburger from "../../public/assets/hamburgerIcon.svg";
import Logo from "../../public/assets/fintrackLogo.svg";
import UserAvatar from "../../public/assets/rightIcon.svg";
import { useState } from "react";

export function Header() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="flex items-center justify-between px-9 py-3 bg-white">
      <div className="flex items-center space-x-4">
        <img
          src={Hamburger}
          alt="Menu icon"
          className="w-4 h-4 cursor-pointer"
        />

        <div className="flex items-center space-x-1 cursor-pointer">
          <img src={Logo} alt="finTrack logo" className="w-4 h-4" />
          <span className="text-lg font-semibold text-[#437D8E]">FinTrack</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FiSearch
          className="w-4 h-4 cursor-pointer text-[#1B2528]"
          onClick={() => setShowSearch((prev) => !prev)}
        />
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="w-80 px-2 py-1 border border-[#1B2528] rounded-md text-sm bg-white shadow transition-all duration-300"
          />
        )}
        <FiGrid className="w-4 h-4 cursor-pointer text-[#1B2528]" />

        <img
          src={UserAvatar}
          alt="User avatar"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </header>
  );
}
