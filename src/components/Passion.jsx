import React from "react";
import { HooBankFrontPage, gpt3FrontPage, tettris } from "../assets";

const Passion = () => {
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
    <section className=" py-16 md:py-6 text-2xl grid md:grid-cols-2" id="PASSION">
      <div className="grid md:place-content-center my-12">
        <p className="max-w-xl md:transition md:hover:scale-110 md:ease-in-out">
          Passionate
          <span className="text-blue text-3xl font-semibold">
            {" "}
            self-taught web developer
          </span>{" "}
         with a knack for creating visually stunning and
          <span className="text-blue text-3xl font-semibold ">
            {" "}
            functional websites
          </span>{" "}
          that leave a lasting
          <span className="text-blue text-3xl font-semibold"> impression</span>.
        </p>
      </div>
      <div className="relative grid place-content-center">
        <div className="relative z-10">
          <img
            src={HooBankFrontPage}
            className="max-h-[20rem]  hover:z-10 md:max-w-[26rem] transition ease-in-out animate-pulse duration-500 hover:opacity-100 opacity-80 hover:animate-none "
            alt=""
          />
        </div>
        <div className="absolute top-[10%] grid left-[10%] z-1">
          <img
            src={gpt3FrontPage}
            alt=""
            className="max-w-[20rem] md:max-w-[24rem] hover:z-10 my-auto mx-0 hover:animate-none transition animate-pulse duration-500"
          />
        </div>
        <div className="absolute right-0 bottom-0 md:bottom-auto blue__gradient overflow-hidden  aspect-square h-[25%] w-[40%] -z-6 " />
        <img
          src={tettris}
          alt=""
          className="absolute bottom-0 md:bottom-auto opacity-85 md:opacity-100 right-0 z-10"
        />
      </div>
    </section>
  );
};

export default Passion;
