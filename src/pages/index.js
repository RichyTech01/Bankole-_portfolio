import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <main className="max-w-[59rem] mx-auto my-3 md:my-36 md:flex md:flex-row-reverse items-center justify-between">
      <motion.article className="md:max-w-[48%] md:w-[46%] max-w-[30rem] w-[95%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="font-medium text-[2.6rem] sm:text-[3.5rem] sm:font-semibold md:font-semibold md:text-[6rem]">
            Hello
          </h1>
          <p className="font-semibold text-xl sm:text-2xl mt-2 sm:mt-2">
            A Web Developer😉
          </p>
          <p className="mt-1 text-[16px] sm:text-[17px] leading-7 opacity-[1] font-light">
            I&#39;m a next.js developer focused on fast and user-friendly web
            applications. Clean code enthusiast with a passion for learning.
            Let&#39;s create exceptional web experiences together.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between my-8 gap-2 overflow-hidden">
          <Link href="/Projects">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex bg-amber-500 sm:h-[8.2rem] sm:w-[8.2rem] md:h-[6.5rem]  md:w-[6.5rem] lg:w-[8.4rem] lg:h-[8.4rem] rounded-full items-center justify-center border border-gray-300 shadow-md hover:bg-slate-50 transition ease-in-out duration-300 h-[6.5rem] w-[6.5rem] lg:font-semibold lg:text-2xl text-[21px]"
            >
              Projects
            </motion.button>
          </Link>

          <Link href="/Resume">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="flex bg-red-500 sm:h-[8.2rem] sm:w-[8.2rem] rounded-full items-center justify-center border border-gray-300 shadow-md hover:bg-slate-50 transition ease-in-out duration-300 h-[6.5rem] w-[6.5rem] md:h-[6.5rem]  md:w-[6.5rem] lg:w-[8.4rem] lg:h-[8.4rem]  lg:font-semibold lg:text-2xl text-[21px]"
            >
              Resume
            </motion.button>
          </Link>

          <Link href="/Contact">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex bg-green-500 h-[6.5rem] w-[6.5rem] sm:h-[8.2rem] sm:w-[8.2rem] md:h-[6.5rem]  md:w-[6.5rem] lg:w-[8.4rem] lg:h-[8.4rem] rounded-full items-center justify-center border border-gray-300 shadow-md hover:bg-slate-50 transition ease-in-out duration-300 lg:font-semibold lg:text-2xl text-[21px]"
            >
              Contact
            </motion.button>
          </Link>
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="overflow-hidden md:w-1/2 w-[90%] mx-auto"
        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
      >
        <div className="rounded-full overflow-hidden" style={{ width: "100%", height: "100%" }}>
          <div className="circle-image-container">
            <Image
              src="/myp.jpg"
              alt="bankole"
              layout="fill"
              objectFit="cover"
              className="rounded-full bg-slate"
              style={{ backgroundColor: "rgb(125, 125, 125)" }}
            />
          </div>
        </div>
      </motion.article>
    </main>
  );
}
