import { motion } from "framer-motion";
import Link from "next/link";

const MenuList = ({ closeMenu }) => {
    const handleLinkClick = () => {
      closeMenu();
    };
    return ( 
        <div>
            
             <motion.ul  initial={{opacity:0,}}
                 animate={{opacity:1,}}
                 transition={{duration:0.2, ease:'easeInOut'}}
                 className=" md:hidden fixed top-0 left-0 w-screen h-screen bg-white z-50 flex justify-center">

                <li className="flex flex-col items-center justify-center my-auto space-y-16 text-2xl">
                    <div className="flex justify-end p-">
                      <button onClick={closeMenu} className="text-5xl"> x</button>
                    </div>
                    <Link onClick={handleLinkClick} href={'/'}>
                        Home
                    </Link>
                    <Link onClick={handleLinkClick} href={'/Resume'}>
                      Resume 
                    </Link>
                    <Link onClick={handleLinkClick} href={'/Contact'}>
                        Contact
                    </Link>
                </li>
            </motion.ul>
        </div>
     );
}
 
export default MenuList;