import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import MenuList from "../DropDown/MenuList";
const Header = () => {

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const closeMenu = () => {
        setToggle(false);
      };

    return ( 
        <motion.header
        initial={{opacity:0, y:-50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5, ease:"easeInOut"}}
         className="">
        <nav className="flex justify-between sm:py-7 py-7 sm:w-[95%] max-w-7xl mx-auto items-center ">
        <Link href={'/'}>
            <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center font-medium text-xl ">BO</div>
                    <h1 className="text-xl font-semibold opacity-[1]">Bankole Olashile</h1>
            </div>
            </Link>
            <ul className="hidden md:flex flex-row justify-end items-end gap-16">
                <li className="flex items-center space-x-4">
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/Resume'}>
                    Resume 
                    </Link>
                </li>
                <li>
                    <Link href={'/Contact'}>
                        Contact
                    </Link>
                </li>
            </ul>

            <button onClick={handleToggle} className="text-3xl md:hidden opacity-[0.9]">&#9776;</button>
            { toggle && 
            <MenuList closeMenu={closeMenu}/>
            }
        </nav>
         
        </motion.header>
     );
}
 
export default Header;