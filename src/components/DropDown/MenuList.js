import { motion } from "framer-motion";
import Link from "next/link";

const MenuList = ({ closeMenu }) => {
    const handleLinkClick = () => {
      closeMenu();
    };
    return ( 
        <motion.div
                 initial={{opacity:0, y:100}}
                 animate={{opacity:1, y:0}}
                 transition={{duration:0.2, ease:'easeInOut'}}
        >
            
             <motion.ul  initial={{opacity:0,}}
                 animate={{opacity:1,}}
                 transition={{duration:0.2, ease:'easeInOut'}}
                 className=" md:hidden fixed top-0 left-0 w-screen h-screen bg-white z-50 flex justify-center">

                <li className="flex flex-col items-center justify-center my-auto space-y-16 text-xl">
                    <div className="flex justify-end ">
                      <button onClick={closeMenu} className="text-2xl"> x</button>
                    </div>
                    <Link className="text-black hover:text-gray-500" onClick={handleLinkClick} href={'/'}>
                        Home
                    </Link>
                    <Link className="text-black hover:text-gray-500" onClick={handleLinkClick} href={'/Resume'}>
                      Resume 
                    </Link>
                    <Link className="text-black hover:text-gray-500" onClick={handleLinkClick} href={'/Contact'}>
                        Contact
                    </Link>
                </li>
            </motion.ul>
        </motion.div>
     );
}
 
export default MenuList;