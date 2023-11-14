import { Compass, MagnifyingGlass, Fire, User } from "@phosphor-icons/react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="col-span-2  flex items-center w-full ">
      <img src={logo} alt="logo" className="ml-6 mr-12 cursor-pointer" />
      <form className="bg-gray-300 flex items-center p-2 h-8 rounded-xl">
        <input
          type="text"
          placeholder="Search Photos"
          className="bg-transparent outline-none"
        />
        <button type="submit">
          <MagnifyingGlass size={18} />
        </button>
      </form>
      <nav className="ml-auto">
        <ul className="flex items-center mr-6 ">
          <li>
            <a href="#" className="px-5">
              <Compass className="text-gray-500 hover:text-black" size={24} />
            </a>
          </li>

          <li>
            <a href="#" className="px-5">
              <Fire className="text-gray-500 hover:text-black" size={24} />
            </a>
          </li>

          <li>
            <a href="#" className="px-5">
              <User className="text-gray-500 hover:text-black" size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
