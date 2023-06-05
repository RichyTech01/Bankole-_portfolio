import { motion } from "framer-motion";
import Link from "next/link";

const MenuList = ({ closeMenu }) => {
    const handleLinkClick = () => {
      closeMenu();
    };
    return ( 
        <motion.div
                
        >
            
             <motion.ul  initial={{opacity:0, y:-100}}
                 animate={{opacity:1, y:0}}
                 transition={{duration:0.6, ease:'easeInOut'}}
                 className=" md:hidden absolute right-0   w-screen h-screen bg-white z-50 flex justify-center">

                <li className="flex flex-col items-center justify-center my-auto space-y-16 text-xl">
                    <Link className="text-black hover:text-gray-500" onClick={handleLinkClick} href={'/Projects'}>
                    Projects
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