import React from "react";
import {
  SkillImage,
  CssLogo,
  ExpressLogo,
  HtmlLogo,
  JsLogo,
  MySqlLogo,
  NodeJsLogo,
  ReactLogo,
  FramerMotionLogo,
  GitLogo,
  Nextjs,
  TailwindCss,
  MongoDb
  // TailwindCss
} from "../assets";
import SectionTitle from "./SectionTitle";
import { motion, stagger } from "framer-motion";
const Skills = () => {
  const container = {
    hidden: { y: 100, opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // delayChildren: 0.5,
        staggerChildren: 0.1,

        duration: 2,
      },
    },
  };
  const item = {
    hidden: { y: 300, opacity: -10 },
    show: { y: 0, opacity: [0, 0.5, 0.9, 1], duration: 2 },
  };
  return (
    <section className="py-12 md:py-16" id="SKILLS">
      <SectionTitle
        title="Skills"

      />
      <div className="md:grid md:grid-cols-2 py-6 gap-8 md:py-32">
        <div className="py-6 grid place-content-center">
          <img src={SkillImage} alt="" className="animate-[wiggle_1s_ease-in-out_infinite]" />
        </div>
        <motion.div variants={container}
          initial="hidden"
          whileInView="show" className="flex group flex-wrap gap-12 justify-center items-center">
          <motion.img variants={item} src={Nextjs} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2 " />
          <motion.img variants={item} src={HtmlLogo} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2" />
          <motion.img variants={item} src={CssLogo} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2" />
          <motion.img variants={item} src={JsLogo} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2" />
          <motion.img variants={item} src={ReactLogo} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2" />
          <motion.img variants={item} src={FramerMotionLogo} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2" />
          <motion.img variants={item} src={MongoDb} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2" />
          <motion.img variants={item} src={TailwindCss} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2 max-w-[150px] max-h-[97px]" />
          <motion.img variants={item} src={ExpressLogo} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2" />
          <motion.img variants={item} src={NodeJsLogo} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2" />
          <motion.img variants={item} src={MySqlLogo} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2" />
          <motion.img variants={item} src={GitLogo} alt="" className="hover:scale-110 hover:translate-x-2 transition-all ease-in-out hover:-translate-y-2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
