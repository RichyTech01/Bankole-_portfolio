const Contact = () => {
    return ( 
        <div className="mt-6 max-w-4xl">
            <article className="space-y-6">
                <div>
                    <h2 className="text-3xl font-semibold ">Contact</h2>
                    <p className="text-base">Looking forward to hearing from you</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Phone</h2>
                    <p className="text-base font-light">+2349164633296</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Email</h2>
                    <p className="font-light text-base"> richwaydev01@gmail.com</p>
                </div>
            </article>
            <form className="space-y-10 my-16">
                <div className="flex flex-col"> 
                    <label>First Name </label>
                    <input className="border border-black mt-2" type="text"/>
                </div>

                <div className="flex flex-col"> 

                    <label>LastName </label>
                    <input className="border border-black mt-2" type="text"/>
                </div>
                
                <div className="flex flex-col">
                    <label>First Name </label>
                    <input className="border border-black mt-2" type="text"/>
                </div>
                
            </form>
        </div>
     );
}
 
export default Contact;