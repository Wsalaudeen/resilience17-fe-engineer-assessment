export function Sidebar() {
  return (
    <aside className="hidden md:block">
      <nav className=" w-[320px] h-[200px]">
        <ul className="list-none space-y-1 mt-1 text-[#1b2528] font-medium text-[15px] bg-[#fcfdfd]">
          {["Dashboard", "Transaction", "Reports", "Settings"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block px-[18px] py-[8px] leading-[20px] rounded-[16px] hover:bg-[rgba(56,103,118,0.16)] hover:text-[#3a6c7b] transition-colors duration-200"
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
