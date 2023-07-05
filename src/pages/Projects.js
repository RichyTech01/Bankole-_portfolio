import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
const Projects = () => {
    return ( 
        <motion.div
        initial={{opacity: 0, }}
        whileInView={{opacity:1,}}
        transition={{duration:0.7, ease:'easeInOut'}}
          className="md:mt-20 max-w-7xl w-[95%] mx-auto sm:mb-16 mt-8">
            <h1 className="text-3xl font-semibold md:text-5xl md:mt-8">Projects</h1>
            <article className="space-y-10 md:mt-16 mx-auto">
                <div className="sm:flex flex-col space-y-10 sm:flex-row gap-5 sm:justify-between sm:mt-8">
                    <motion.div 
                       initial={{opacity: 0, x:-0 }}
                       whileInView={{opacity:1, x:0}}
                       viewport={{once:true}}
                       transition={{duration:0.8, ease:'easeInOut'}}
                    >
                       <h2 className="text-2xl font-medium mt-6 md:text-3xl md:font-semibold">Project 01</h2>
                       <p className="text-xl font-light mt-5 sm:max-w-sm">A Business website built with nextjs and Tailwind </p>
                    </motion.div>
                    <motion.div 
                     initial={{opacity: 0, x:10 }}
                     whileInView={{opacity:1, x:0}}
                     viewport={{once:true}}
                     transition={{duration:0.8, ease:'easeInOut'}}
                    >
                     <Link href={'https://tocal-richwaydev01-gmailcom.vercel.app/'}>
                    <Image 
                       className="sm:max-w-sm"
                       src={'/TocalSite.jpg'}
                       width={400}
                       height={400}
                       alt="tocal site"
                    />
                    </Link>
                    </motion.div>
                </div>

                <div className="gap-5 sm:flex flex-col space-y-10 sm:flex-row sm:justify-between sm:mt-8">
                    <motion.div 
                       initial={{opacity: 0, x:-10 }}
                       whileInView={{opacity:1, x:0}}
                       viewport={{once:true}}
                       transition={{duration:0.9, ease:'easeInOut'}}
                    >
                        <h2 className="text-2xl font-medium mt-6 md:text-3xl md:font-semibold">Project 02</h2>
                         <p className="text-xl font-light mt-5 sm:max-w-sm">An Investment website built with React and css </p>
                    </motion.div>
                    <motion.div
                     initial={{opacity: 0, x:10 }}
                       viewport={{once:true}}
                       whileInView={{opacity:1, x:0}}
                     transition={{duration:0.9, ease:'easeInOut'}}
                    >
                     <Link href={''}>
                    <Image 
                       className="sm:max-w-sm"
                       src={'/Fricaa.jpg'}
                       width={400}
                       height={400}
                       alt="fricaa site"
                    />
                    </Link>

                    </motion.div>
                </div>

                <div className="sm:flex flex-col space-y-10 gap-5 sm:flex-row sm:justify-between sm:mt-8">
                     <motion.div
                        initial={{opacity: 0, x:-10 }}
                       viewport={{once:true}}
                       whileInView={{opacity:1, x:0}}
                        transition={{duration:0.8, ease:'easeInOut'}}
                     >
                       <h2 className="text-2xl font-medium mt-6 md:text-3xl md:font-semibold">Project 03</h2>
                       <p className="text-xl font-light mt-5 sm:max-w-sm">An Online Banking built with nextjs and css </p>
                    </motion.div>
                    <motion.div
                       initial={{opacity: 0, x:10 }}
                       viewport={{once:true}}
                       whileInView={{opacity:1, x:0}}
                       transition={{duration:0.9, ease:'easeInOut'}}
                    >
                     <Link href={'https://morizon-payment.vercel.app/'}>
                           <Image 
                                 className="sm:max-w-sm"
                              src={'/morizon.jpg'}
                              width={400}
                              height={400}
                              alt="tocal site"
                           />
                    </Link>
                    </motion.div>
                </div>

               
            </article>
        </motion.div>
     );
}
 
export default Projects;