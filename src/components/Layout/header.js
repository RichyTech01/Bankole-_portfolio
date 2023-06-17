import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MenuList from "../DropDown/MenuList";
const Header = () => {
    const [toggle, setToggle] = useState(false);
  
    const handleToggle = () => {
      setToggle(!toggle);
    };
  
    const closeMenu = () => {
      setToggle(false);
    };
  
    return (
      <motion.header
        initial={{ opacity: 0, y: -50 }}
         viewport={{once:true}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=""
      >
        <nav className="flex justify-between sm:py-7 py-7 sm:w-[95%] max-w-[100%] mx-auto items-center ">
          {/* Logo and Name */}
          <Link href={"/"}>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full border border-gray-300 shadow-md bg-amber-500 flex items-center justify-center font-medium text-xl">
                BO
              </div>
              <h1 className="text-xl font-semibold opacity-[1]">Bankole Olashile</h1>
            </div>
          </Link>
  
          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-row justify-end items-end gap-16">
            <li className="flex items-center space-x-4">
              <Link className="text-black hover:text-gray-500" href={"/Projects"}>Projects</Link>
            </li>
            <li>
              <Link className="text-black hover:text-gray-500" href={"/Resume"}>Resume</Link>
            </li>
            <li>
              <Link className="text-black hover:text-gray-500" href={"/Contact"}>Contact</Link>
            </li>
          </ul>
  
          {/* Mobile Menu Button */}
          {toggle ? (
  <button onClick={handleToggle} className="text-[2rem] font-light md:hidden opacity-[0.9]">
    &#10006;
  </button>
) : (
  <button onClick={handleToggle} className="text-[2rem] md:hidden opacity-[0.9]">
    &#9776; {/* hamburger menu icon */}
  </button>
)}
          {/* Dropdown Menu */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, height: 0, y:-100 }}
                animate={{ opacity: 1, height: "auto",y:0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="md:hidden absolute right-0 top-16 bg-white p-4 rounded-lg shadow-lg"
              >
                <MenuList closeMenu={closeMenu} />
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    );
  };

export default Header;  