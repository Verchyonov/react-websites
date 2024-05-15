import React from "react";
import { CopyCa } from "../../../../common/copy-ca";
import { Links } from "../../../../common/links";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { Cards } from "../../../game/cards/cards";

export const Block1 = () => {
  return (
    <div className="w-full min-h-[100vh] bg-opacity-10 py-20 block1 justify-center items-center flex flex-col relative overflow-hidden">
      <img
        className="absolute top-0 left-0 h-[100vh] z-20 w-full"
        src="./rain.gif"
      />
      {/* <img
        className="absolute top-0 right-0 h-[100vh] z-20 w-48 img-hor"
        src="./block1/rain.gif"
      /> */}
      <img
        className="absolute top-[-10%] lg:top-[-30%] w-[100vh] img-hor z-40"
        src="./block1/pepe.webp"
      />
      <img
        src="./block1/oblako.webp"
        className="absolute top-[-10vh] left-[-10vh] z-20 w-[50vh]"
      />
      <img
        src="./block1/oblakol.webp"
        className="absolute top-[-10vh] right-[-10vh] z-20 w-[50vh]"
      />
      <motion.div
        className={
          "w-11/12 max-w-screen-2xl bg-slate-300 flex flex-col p-4 py-12 gap-12 rounded-xl justify-center items-center z-50"
        }
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
        }}
        viewport={{ once: true }}
      >
        <CopyCa />
        <Links />
        <TextReg
          customClass={"mt-4 text-2xl text-center"}
          text={"Lorem ipsun lorem ipsun lorem ipsun"}
        />

        <div className="flex w-full flex-col gap-4 justify-center items-center">
          <Cards />
        </div>
      </motion.div>
    </div>
  );
};
