import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({skill, percentage }) => {
    const filledWidth = `${percentage}%`;
  
    return (
        <div className="max-w-sm relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-amber-500 "
          style={{ width: filledWidth }}
        ></div>
        <div className=" absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 via-amber-500 to-transparent w-1/2 animate-slide"></div>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <p className="text-base text-black font-light sm:hidden">{skill}</p>
        </div>
      </div>
    );
  };
  
const Resume = () => {
    const skills = [
        { skill: 'Html5', percentage: 93 },
        { skill: 'Css3', percentage: 90 },
        { skill: 'JavaScript', percentage:  65},
        { skill: 'React.js', percentage: 85 },
        { skill: 'Next.js', percentage: 80 },
        { skill: 'Tailwind css', percentage: 84 },
      ];
   
    return ( 
        <div className="mt-5 sm:w-[95%] max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold">Resume</h1>
            <motion.article 
              initial={{opacity:0, y:100}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.8, ease:'easeInOut'}}
            className="sm:flex sm:flex-row sm:justify-between sm:mt-8">
                <h2 className="mt-6 text-2xl font-medium leading-6">Work <br/> Experience</h2>
                <div className="mt-8 space-y-12 ">
                    <div>
                        <p className="font-extralight">2023 - Present </p>
                        <p className="font-medium text-[1.1rem]">Frontend/Software developer</p>
                        <p className="mt-2 font-extralight sm:max-w-sm">Frontend/Sofware developer at Betacodings Software Company.</p>
                    </div>

                    <div>
                        <p className="font-extralight">2023 - Present </p>
                        <p className="font-medium text-[1.1rem]">Web Designer</p>
                        <p className="mt-2 font-extralight sm:max-w-sm">Web designing at Mrbarnk Web Tech, a freelancer.</p>
                    </div>
                </div>
            </motion.article>
            <hr className="mt-10 bg-black h-[1px] opacity-[0.3] border-none"/>
            <motion.article
                 initial={{opacity:0, y:100}}
                 animate={{opacity:1, y:0}}
                 transition={{duration:0.9, ease:'easeInOut'}}
             className="sm:flex sm:flex-row sm:justify-between sm:mt-10 mt-7 items-start">
                     <h1 className="text-2xl font-medium">Education</h1>
                <div className="space-y-12 mt-8 sm:mt-0">
                        <div>
                            <p className="font-extralight">2020 - 2021</p>
                            <p className="font-medium text-[1.1rem]">HTML & CSS3 For Beginners</p>
                            <p className="mt-2 font-extralight sm:max-w-sm">Studied html and css crash course from Bucky Robert Videos</p>
                        </div>

                        <div>
                            <p className="font-extralight">2021 - 2022</p>
                            <p className="font-medium text-[1.1rem]">Frontend Development</p>
                            <p className="mt-2 font-extralight sm:max-w-sm">Studied core programming from Vishwas at Code Evolution Youtube channel.</p>
                        </div>
                </div>
            </motion.article>

            <hr className="mt-10 bg-black h-[1px] opacity-[0.3] border-none"/>
            
            <motion.div
                 initial={{opacity:0, y:100}}
                 animate={{opacity:1, y:0}}
                 transition={{duration:1, ease:'easeInOut'}}
               className=" my-10">

            <h2 className="text-2xl font-medium my-9">Skills <br/>& Expertise</h2>

            <article className="mt-6 space-y-7">
          {skills.map(({ skill, percentage }) => (
            <div className="flex flex-col items-center " key={skill}>
              <div className="max-w-5xl w-full flex justify-between ">
                <div>
                   <p className="hidden sm:block ">{skill}</p>
              </div>
                <ProgressBar skill={skill} percentage={percentage} />
              </div>
            </div>
          ))}
        </article>
        </motion.div>
        </div>
     );
     
}
 
export default Resume;