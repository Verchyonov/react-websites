import React from "react";
import { TextReg } from "../../../../common/text/text-reg";

import { motion } from "framer-motion";

export const Block2 = () => {
  return (
    <div className="w-full min-h-screen block2 bg-black justify-center items-center flex flex-col relative blurred-border-top">
      <motion.div
        className={
          "w-full xl:w-10/12 max-w-screen-2x flex flex-col md:flex-row p-4 xl:p-8 gap-4"
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
        <div className="w-full md:w-6/12 flex p-4 flex-col gap-4 text-white items-center justify-center">
          <div className="flex flex-col gap-2">
            <TextReg
              customClass={
                "text-[#00BCF8] text-4xl xl:text-left text-center mb-4"
              }
              text={"Tarot Of Meme"}
            />
            <TextReg
              customClass={"text-[#00BCF8] text-2xl xl:text-left text-center"}
              text={
                "is a deck of cards with meme pictures used for making crypto predictions."
              }
            />
          </div>
          <div className="flex flex-col gap-8 my-auto">
            <TextReg
              customClass={"text-[#00BCF8] text-2xl xl:text-left text-center"}
              text={
                "Based on the real-life Tarot deck, it’s designed to be more fun and easy to use. The concept is similar to the Book of Meme or Museum of Meme, but unique. Our goal is to create a tool that uses your wallet address or coin CA to make spiritual predictions about other projects or personal funds."
              }
            />
          </div>
        </div>
        <div className="w-full md:w-6/12 flex p-4 justify-center items-center text-white">
          <img
            className="md:h-[50vh] text-2xl"
            src="./block2/gnom.webp"
            alt="gendalph"
          />
        </div>
      </motion.div>
    </div>
  );
};
