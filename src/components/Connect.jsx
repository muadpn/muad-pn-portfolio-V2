import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
const Connect = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="py-12" id="MORE">
      <SectionTitle direction={"flex-row-reverse"} title="Connect" />
      <div className="grid md:grid-cols-2 py-12">
        <div>
          <div>
            <h1 className="text-3xl font-bold">Let's Connect</h1>
            <p className="max-w-sm">
              I`m interested in freelance opportunities. However, if you have
              other request or question, don`t hesitate to contact me
            </p>
          </div>
        </div>
        <div>
          <motion.div
            transition={{ staggerChildren: 0.4 }}
            animate={{}}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col">
            <div className="flex py-2 gap-1">
                <img src="./images/instagram.png" className="max-w-[24px]" alt=""  />
              <motion.a href="https://www.instagram.com/gh0._.st/" target="_blank" >gh0._.st</motion.a>
            </div>
            <div className="flex py-2 gap-1">
                <img src="./images/linkedin.png" className="max-w-[24px]" alt="" />
              <motion.a href="https://www.linkedin.com/in/mouad-pn/" target="_blank">Mouad Pn</motion.a>
            </div>
            <div className="flex py-2 gap-1">
                <img src="./images/steam.png" className="max-w-[24px]" alt="" />
              <motion.a href="https://steamcommunity.com/id/gh0_st/" target="_blank">muadpn434</motion.a>
            </div>
            <div className="flex py-2 gap-1">
                <img src="./images/GitHub.svg" className="max-w-[24px]" alt="" />
              <motion.a href="https://github.com/muadpn" target="_blank">muadpn</motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
