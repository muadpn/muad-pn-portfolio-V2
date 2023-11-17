import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Experience } from "../data/data";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
const Work = () => {
  // const [experiancedata, SetExperianceData] = useState(Experience[0]);
  const [CompanyName, SetCompanyName] = useState(Experience[0].Company);
  // const handleChange = (name) => {
  //   const data = Experience.find((items) => items.Company === name);
  //   SetExperianceData(data);
  //   setDisable((prev) => (prev = !prev));
  // };

  return (
    <section className="relative md:py-18" id="WORK">
      <SectionTitle title="Work" direction={`flex-row-reverse`} />
      <div className="flex flex-col items-center py-8 justify-evenly md:flex-row-reverse">
        <div className="flex flex-col md:py-28 md:flex-row-reverse items-center md:justify-center gap-12">
          {Experience.map((item) => {
            return (
              item.Company === CompanyName && (
                <div
                  key={item?.id}
                  className={`${
                    item.Company !== CompanyName && `hidden`
                  } px-2`}>
                  <div className="flex flex-col items-center">
                    <motion.h1
                     initial={{ y: 150, opacity: 0 }}
                     // animate={{ y: [100,0], opacity: 1 }}
                     transition={{ delay: 0.3, ease: "easeInOut" }}
                     whileInView={{ y:0, opacity:1 }}
                      className="text-xl font-medium">
                      {item?.Designation}
                      <span className="text-blue font-semibold animate-pulse">
                        {" "}
                        @
                        <a href={item.Link} target="_blank">
                          
                          {item?.Company}
                        </a>
                      </span>
                    </motion.h1>
                    <motion.h1
                      initial={{ y: 150, opacity: 0 }}
                      // animate={{ y: [100,0], opacity: 1 }}
                      transition={{ delay: 0.4, ease: "easeInOut" }}
                      whileInView={{ y:0, opacity:1 }}
                      className="text-lg font-medium">
                      {item?.Joined} - {item?.Expired}
                    </motion.h1>
                  </div>
                  <div className="flex px-3 md:px-5">
                    <ul className="">
                      {item.Discription.map((lists) => (
                        <motion.li
                        initial={{ y: 150, opacity: 0 }}
                        // animate={{ y: [100,0], opacity: 1 }}
                        transition={{ delay: 0.5, ease: "easeInOut" }}
                        whileInView={{ y:0, opacity:1 }}
                          className="max-w-md py-2 list-image-Polygon  ">
                          {" "}
                          <p className="">{lists}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            );
          })}
          <div className="flex md:flex-col gap-4">
            {Experience.map((expButton, index) => {
              return (
                <div>
                  {/* <input type="hidden" value={expButton.Company} id={expButton.Company} /> */}
                  <Button
                    key={`button${index}`}
                    childern={expButton?.Company}
                    id={expButton?.Company}
                    value={expButton?.Company}
                    color={`w-[7.4rem]  transition ease-in-out ${
                      CompanyName === expButton.Company &&
                      `bg-blue text-black scale-110`
                    } `}
                    onClick={() => SetCompanyName(expButton?.Company)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
// i have a button that allows to change the Experiance Data and render it acordingly.
// First i need to make the data selected at intial state always
// Secondly i need a button that can change the state and update it correspondingly.
// soo the experiance data should not change. and i need a variable that can change the id and render
// according to the id which i have selected.
// do i need a selected data ?
