import { motion } from "framer-motion";

const Contact = () => {
    return ( 
        <motion.div 
          initial={{opacity:0,y:100 }}
          animate={{opacity:1, y:0}}
          transition={{duration:0.9, ease:'easeInOut'}}
        className="md:my-24 mb-6 md:mb-64 max-w-7xl w-[95%] mx-auto sm:flex justify-between ">
            <article className="space-y-6 flex flex-col mt-8">
                <div>
                    <h2 className="text-3xl font-bold md:text-[2.5rem]">Contact</h2>
                    <p className="text-base mt-4">Looking forward to hearing from you</p>
                </div>

                <div className="space-y-1">
                    <h2 className="text-xl font-normal">Phone</h2>
                    <p className="text-base font-light">+2349164633296</p>
                </div>

                <div className="space-y-1">
                    <h2 className="text-xl font-normal">Email</h2>
                    <p className="font-light text-base"> richwaydev01@gmail.com</p>
                </div>
            </article>
        <form className="space-y-4 md:space-y-0 md:gap-6 mt-10 md:flex justify-end items-center flex-wrap md:max-w-[28rem] md:w-[80%] sm:justify-between">
                <div className="flex flex-col"> 
                    <label className="text-[15px] font-normal">First Name </label>
                    <input className="input border border-black mt-2 h-12 max-w-sm  md:w-[13.2rem] " type="text" required/>
                </div>

                <div className="flex flex-col"> 
                    <label className="text-[15px] font-normal">LastName </label>
                    <input className="input border border-black mt-2 h-12 max-w-sm md:w-[13.2rem]" required type="text"/>
                </div>
                
                <div className="flex flex-col">
                    <label className="text-[15px] font-normal">Email </label>
                    <input className="input border border-black mt-2 h-12 max-w-sm md:w-[13.2rem]" type="email" required/>
                </div>
                <div className="flex flex-col">
                    <label className="text-[15px] font-normal">Subject </label>
                    <input className="input border border-black mt-2 h-12 max-w-sm md:w-[13.2rem]" type="subject" required/>
                </div>
                <div className="flex flex-col"> 
                    <label className="text-[15px] font-normal">Message</label>
                    <textarea className="input border-black mt-2 h-32 border max-w-sm md:w-[18rem]" type="text" required/>
                </div>
                <div className="rounded-full ">
                    <button className="border border-gray-300 shadow-md w-28 h-28 md:mt-7 sm:w-[8.5rem] sm:h-[8.5rem] text-[17px] bg-amber-500 rounded-full md:text-[1.3rem] font-medium  hover:bg-slate-50 transition ease-in-out duration-300">Submit</button>
                </div>
            </form>
        </motion.div>
     );
}
 
export default Contact;