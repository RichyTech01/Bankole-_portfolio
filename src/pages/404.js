import Link from "next/link";
const Error = () => {
    return ( 
        <div className="font-medium text-xl flex flex-col justify-center items-center p-20 ">
          <p> 404 error path</p>
           <div className="font-normal">
            <Link href={'/'}>
              go back to homepage
            </Link>
           </div>
        </div>
     );
}
 
export default Error;