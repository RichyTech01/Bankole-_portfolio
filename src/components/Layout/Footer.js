import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return ( 
        <footer className="sm:w-[95%] max-w-7xl sm:mx-auto">
       <hr className="mt-10 sm:mt-0 bg-black h-[1px] opacity-[0.3] border-none"/>
            <ul className="space-y-6 sm:my-10 my-5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
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
                        <Image src="/whasap.png" alt="whatsap" height={24} width={24}/>
                    </Link>

                    <Link href={'https://twitter.com/richy_dev?s=21'}>
                        <Image src="/twitter.png" alt="twitter" height={24} width={24}/>
                    </Link>

                </li>
             </div>
            </ul>
        </footer>
     );
}
 
export default Footer;