import Link from "next/link";
const Footer = () => {
    return ( 
        <footer className="">
       <hr className="mt-10 bg-black h-[1px] opacity-[0.3] border-none"/>
            <ul className="space-y-6 my-5 flex flex-col ">
             <div>
                <li className="text-xl font-medium">Phone</li>
                  <li className="text-base font-extralight">+2349164633296</li>
             </div>
             <div>
                <li className="text-xl font-medium">Email</li>
                <li className="text-base font-extralight">richwaydev01@gmail.com</li>
             </div>
            
             <div>
                <li className="text-xl font-medium">Follow me</li>
                <li className="flex gap-4">
                <Link href={'https://wa.me/message/OL3OQBXCDGZIB1'}>
                        <img src="whasap.png" className="h-6 w-6"/>
                    </Link>
                    <Link href={'https://twitter.com/richy_dev?s=21'}>
                        <img src="twitter.png" className="h-6 w-6"/>
                    </Link>

                </li>
             </div>
            </ul>
        </footer>
     );
}
 
export default Footer;