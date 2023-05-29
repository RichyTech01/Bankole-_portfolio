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
          <h1 className='font-medium text-4xl sm:text-[90px] sm:font-bold'>Hello</h1>
          <p className='font-medium text-xl sm:text-2xl mt-4 sm:mt-16'>A Web Developer😉</p>
          <p className='mt-1 text-[18px] leading-7 opacity-[1] font-extralight'>I&apos;m a next.js developer focused on fast and user-friendly web applications. Clean code enthusiast with a passion for learning. Lets create exceptional web experiences togtether. </p>
       </motion.div>

       <div className='flex items-center justify-between mt-6'>
          <Link href={'/Resume'}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className='flex bg-amber-500 h-[6.5rem] w-[6.5rem] sm:h-36 sm:w-36 rounded-full items-center justify-center border border-black hover:bg-slate-50 transition ease-in-out duration-30'
            >
              Resume
            </motion.div>
          </Link>

          <Link href={'/Project'}>
            <motion.div
              initial={{ opacity: 0, y:20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className='flex bg-red-500 h-[6.5rem] w-[6.5rem] sm:h-36 sm:w-36 rounded-full items-center justify-center border border-black hover:bg-slate-50 transition ease-in-out duration-300'
            >
              Project
            </motion.div>
          </Link>

          <Link href={'/Contact'}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className='flex bg-green-500 h-[6.5rem] w-[6.5rem] sm:h-36 sm:w-36 rounded-full items-center justify-center border border-black hover:bg-slate-50 transition ease-in-out duration-300'
            >
              Contact
            </motion.div>
          </Link>
    </div>
       </motion.article>

       <motion.article
          initial={{opacity:0, y:50}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, delay:0.7, ease:'easeOut' }}
          className='md:w-1/2 '>
             <img src="/myp.png" alt='bankole' className="shadow-md bg-gradient-to-r from-yellow-600 via-red-500 to-green-500 h-[21rem] w-[21rem] rounded-full mx-auto my-6 bm"/>
       </motion.article>
    </main>
  )
}
