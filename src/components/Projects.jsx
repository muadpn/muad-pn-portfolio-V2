import React from "react";
import SectionTitle from "./SectionTitle";
import { ProjectsData } from "../data/data";
import { motion } from "framer-motion";
const Projects = () => {
  const container = {
    hidden: { y: 100, opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // delayChildren: 0.5,
        staggerChildren: 0.5,
        duration: 5,
      },
    },
  };
  const item = {
    hidden: { y: 300 },
    show: { y: 0, opacity: { ease: "linear" }, duration: 5 },
  };
  return (
    <section className="py-6" id="PROJECTS">
      <SectionTitle title="Projects" /> 
      <motion.div
        variants={container}
        className="flex flex-wrap items-center justify-center md:grid md:items-start md:justify-start md:gap-12 grid-flow-col gap-4 overflow-y-hidden overflow-x-scroll  py-12">
        {ProjectsData.map((EachProject) => {
          return (
            <motion.div
              variants={item}
              key={EachProject.Title}
              initial="hidden"
              whileInView="show"
              className="w-[20rem] border-gray-400 border-[1px]">
              <div className="">
                <img
                  src={`./images/${EachProject.Image}`}
                  className=""
                  alt=""
                />
              </div>
              <div className="border-t-[1px] border-b-[1px] flex flex-wrap gap-2 px-4 py-2">
                {EachProject.Stack.map((each) => (
                  <>
                    <p> {each}</p>
                  </>
                ))}
              </div>
              <div className="px-4 py-4">
                <h1>{EachProject.Title}</h1>
                <h1>{EachProject.Description}</h1>
                <div className="flex gap-5 py-4">
                  {EachProject.website && (
                    <button className="border-blue border-2 py-1 px-4">
                      <a href={`${EachProject.webLink}`} target="_blank">
                        Live
                      </a>
                    </button>
                  )}
                  {EachProject.GitHub && (
                    <button className="border-blue border-2 py-1 px-4">
                      <a href={`${EachProject.GitLink}`} target="_blank">
                        GitHub
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
