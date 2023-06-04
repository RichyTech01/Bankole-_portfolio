const Contact = () => {
    return ( 
        <div className="md:my-24 mb-6 md:mb-64 max-w-5xl w-[90%] mx-auto sm:flex justify-between ">
            <article className="space-y-6 flex flex-col mt-8">
                <div>
                    <h2 className="text-3xl font-semibold mr-[4rem]">Contact</h2>
                    <p className="text-base mt-4">Looking forward to hearing from you</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-normal">Phone</h2>
                    <p className="text-base font-light">+2349164633296</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-normal">Email</h2>
                    <p className="font-light text-base"> richwaydev01@gmail.com</p>
                </div>
            </article>
        <form className="space-y-4 md:space-y-0 md:gap-6 mt-8 md:flex justify-end items-center flex-wrap md:max-w-[28rem] md:w-[80%] sm:justify-between">
                <div className="flex flex-col"> 
                    <label className="text-base font-light">First Name: </label>
                    <input className="input border border-black mt-2 h-12 max-w-sm  md:w-[13rem]" type="text" required/>
                </div>

                <div className="flex flex-col"> 

                    <label className="text-base font-light">LastName: </label>
                    <input className="input border border-black mt-2 h-12 max-w-sm md:w-[13rem]" required type="text"/>
                </div>
                
                <div className="flex flex-col">
                    <label className="text-base font-light">Email: </label>
                    <input className="input border border-black mt-2 h-12 max-w-sm md:w-[13rem]" type="email" required/>
                </div>
                <div className="flex flex-col">
                    <label className="text-base font-light md:font-light md:text-[1.1rem]">Subject: </label>
                    <input className="input border border-black mt-2 h-12 max-w-sm md:w-[13rem]" type="subject" required/>
                </div>
                <div className="flex flex-col"> 
                    <label className="text-base font-light">Message:</label>
                    <textarea className="input border-black mt-2 h-32 border max-w-sm md:w-[18rem]" type="text" required/>
                </div>
                <div className="rounded-full ">
                    <button className="w-28 h-28 sm:w-[8rem] sm:h-[8rem] border-black border text-base bg-amber-500 rounded-full">Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default Contact;