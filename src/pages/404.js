import Link from "next/link";
const Error = () => {
    return ( 
        <div className="font-bold text-4xl flex justify-center items-center p-96">
          <p> 404 error path</p>
           <div>
           <Link href={'/'}>
            go back to homepage
           </Link>
           </div>
        </div>
     );
}
 
export default Error;