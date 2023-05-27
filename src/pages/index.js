export default function Home () {
  return (
    <main className='max-w-4xl w-[90%] md:w-[95%] mx-auto mt-9 md:mt-20 md:flex md:flex-row-reverse items-center'>
       <article className='md:max-w-1/2  ' >
          <h1 className='font-bold text-4xl sm:text-[90px] sm:font-bold'>Hello</h1>
          <p className='font-medium text-xl sm:text-2xl mt-4 sm:mt-16'>A Web Developer😉</p>
          <p className='mt-1 leading-7 opacity-[1]'>I&apos;m a next.js developer focused on fast and user-friendly web applications. Clean code enthusiast with a passion for learning. Lets create exceptional web experiences togtether. </p>
          <div className='flex items-center justify-between mt-6'>
            <div className='flex bg-yellow-600 h-24 w-24 sm:h-36 sm:w-36 rounded-full items-center justify-center border border-black hover:bg-slate-50 transition ease-in-out duration-300'>Resume</div>
            <div className='flex bg-red-500 h-24 w-24  sm:h-36 sm:w-36 rounded-full items-center justify-center border border-black hover:bg-slate-50 transition ease-in-out duration-300'>Resume</div>
            <div className='flex bg-green-400 h-24 w-24  sm:h-36 sm:w-36 rounded-full items-center justify-center border border-black hover:bg-slate-50 transition ease-in-out duration-300'>Resume</div>
          </div>
       </article>

       <article className='md:w-1/2 '>
            <img src="/moi girl.jpg" alt='bankole' className="h-[336px] w-[336px] rounded-full mx-auto my-6"/>
       </article>
       <hr className="mt-10"/>
    </main>
  )
}
