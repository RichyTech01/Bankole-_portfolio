import Link from "next/link";
const Header = () => {
    return ( 
        <header className="">
        <nav className="flex justify-between sm:py-7 py-5 sm:w-[95%] w-[90%] max-w-4xl mx-auto items-center">
            <div className="flex items-center space-x-3">
               <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center font-medium text-xl">BO</div>
               <h1 className="text-xl font-bold opacity-[1]">Bankole Olashile</h1>
            </div>
            <ul className="hidden md:flex flex-row justify-end items-end  gap-16">
                <li className="flex items-center space-x-4">
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        projects
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        Resume
                    </Link>
                </li>
            </ul>
            <div className="text-3xl md:hidden opacity-[0.9]">&#9776;</div>
        </nav>
        </header>
     );
}
 
export default Header;