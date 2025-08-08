import { useState, useEffect, useRef } from "react";

type MenuItem = "Dashboard" | "Transaction" | "Reports" | "Settings";
interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const navRef = useRef<HTMLElement>(null);
  const menuItems: MenuItem[] = [
    "Dashboard",
    "Transaction",
    "Reports",
    "Settings",
  ];

  useEffect(() => {
    if (navRef.current) {
      navRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>): void => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev: number) => (prev + 1) % menuItems.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex(
          (prev: number) => (prev - 1 + menuItems.length) % menuItems.length
        );
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  const handleMouseEnter = (index: number): void => {
    setFocusedIndex(index);
  };

  return (
    <aside className="hidden md:block">
      <nav
        ref={navRef}
        className="w-[320px] h-[200px] outline-none"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="list-none space-y-1 mt-1 text-[#1b2528] font-medium text-[15px] bg-[#fcfdfd]">
          {menuItems.map((item, index) => (
            <li key={item}>
              <a
                href="#"
                className={`block px-[18px] py-[8px] leading-[20px] rounded-[16px] transition-colors duration-200 ${
                  index === focusedIndex
                    ? "bg-[rgba(56,103,118,0.16)] text-[#3a6c7b]"
                    : "hover:bg-[rgba(56,103,118,0.16)] hover:text-[#3a6c7b]"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                role="menuitem"
                tabIndex={-1}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
