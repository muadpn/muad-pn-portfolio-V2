import React from "react";
import { ProfilePic } from "../assets";
import Button from "./Button";
import { motion } from "framer-motion";
const Hero = () => {
  const container = {
    hidden: { y: -100, opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // delayChildren: 0.5,
        staggerChildren: 0.5,
        duration: 2
      },
    },
  };
  const item = {
    hidden: {  opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <section
      className="py-16 text-4xl flex items-center flex-col md:grid md:grid-cols-2"
      id="HOME">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-col relative z-20">
        <motion.h1 variants={item} className="transition scale-90  hover:scale-100 md:hover:scale-110 md:ease-in-out py-4">
          My name is{" "}
          <span className="text-5xl text-blue font-bold inline-block">
            Muad Pn
          </span>
        </motion.h1>
        <motion.p   variants={item} className="md:transition hover:scale-100 scale-90 md:hover:scale-110 md:ease-in-out">
          Oh Sorry.! its{" "}
          <span className="text-red-600 hover:decoration-solid  underline decoration-wavy font-medium decoration-slice hover:text-blue inline-block">
            Mouad Pn
          </span>{" "}
          Actually!
        </motion.p>
        <motion.p  variants={item} className="mx-[20%] scale-90 hover:scale-100 max-w-[300px] py-6 transition hover:scale-110 ease-in-out">
          And That spells..
          <span className="text-blue underline under  underline-thickness underline-offset-4">
            {" "}
            MuAadh
          </span>
        </motion.p>

        <motion.p
         variants={item}
          className="py-2 transition scale-90 hover:scale-100
        md:hover:scale-110 ease-in-out">
          I have a great passi on for learning and creating, and it brings me a{" "}
          <span className="text-blue text-5xl font-bold">feel of ecstasy</span>
        </motion.p>
        <motion.p  variants={item} className="py-4 scale-90 hover:scale-100 transition md:hover:scale-110 ease-in-out">
          b.w wanna know more about{" "}
          <span>
            my <span className="text-blue font-bold text-5xl">name ?</span>
          </span>
        </motion.p>
        <Button
          childern="Contact me!"
          whereTo="mailto:muadpn434@gmail.com"
        />
      </motion.div>
      <div className="relative justify-items-center ">
        <motion.img
          variants={item}
          src={ProfilePic}
          alt="asa"
          className="max-w-[25rem] transition scale-90 ease-in-out saturate-[0.2] -z-10 md:-rotate-6 hover:rotate-0 duration-500 rounded-full  md:hover:scale-110 hover:ease-in-out "
        />
      </div>
    </section>
  );
};

export default Hero;
