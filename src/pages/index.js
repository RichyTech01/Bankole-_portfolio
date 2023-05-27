import Link from "next/link"
import { motion } from "framer-motion"
export default function Home () {
  return (
    <main className='max-w-4xl  md:w-[95%] mx-auto mt-9 md:mt-20 md:flex md:flex-row-reverse items-center'>
       <motion.article
       
        className='md:max-w-1/2  '>
         <motion.div 
         initial={{opacity:0, y:100}}
         animate={{opacity:1, y:0}}
         transition={{duration:0.7, ease:'easeInOut'}}
         >
          <h1 className='font-semibold text-4xl sm:text-[90px] sm:font-bold'>Hello</h1>
          <p className='font-medium text-xl sm:text-2xl mt-4 sm:mt-16'>A Web Developer😉</p>
          <p className='mt-1 text-[19px] leading-7 opacity-[1] font-light'>I&apos;m a next.js developer focused on fast and user-friendly web applications. Clean code enthusiast with a passion for learning. Lets create exceptional web experiences togtether. </p>
       </motion.div>
          <div className='flex items-center justify-between mt-6 transition ease-in-out'>
             <Link href={'/Resume'}>
                 <motion.div
                   initial={{opacity:0, y:100}}
                   animate={{opacity:1, y:0}}
                   transition={{duration:0.7, ease:'easeInOut'}}
                  className='flex bg-yellow-500 h-24 w-24 sm:h-36 sm:w-36 rounded-full items-center justify-center border border-black hover:bg-slate-50 transition ease-in-out duration-300'>Resume</motion.div>
              </Link>
             <Link href={'/Project'}>
                 <motion.div 
                  initial={{opacity:0, y:100}}
                  animate={{opacity:1, y:0}}
                   transition={{duration:0.8, ease:'easeInOut' }}
                  className='flex bg-red-500 h-24 w-24  sm:h-36 sm:w-36 rounded-full items-center justify-center border border-black hover:bg-slate-50 transition ease-in-out duration-300'>Project</motion.div>
              </Link>
             <Link href={'/Contact'}>
                 <motion.div
                   initial={{opacity:0, y:100}}
                   animate={{opacity:1, y:0}}
                   transition={{duration:0.9, ease:'easeInOut' }}
                  className='flex bg-green-500 h-24 w-24  sm:h-36 sm:w-36 rounded-full items-center justify-center border border-black hover:bg-slate-50 transition ease-in-out duration-300'>Contact</motion.div>
              </Link>
          </div>
       </motion.article>

       <motion.article
       initial={{opacity:0, y:50}}
       animate={{opacity:1, y:0}}
       transition={{duration:1, ease:'easeIn' }}
        className='md:w-1/2 '>
            <img src="/moi girl.jpg" alt='bankole' className="h-[336px] w-[336px] rounded-full mx-auto my-6"/>
       </motion.article>
    </main>
  )
}
