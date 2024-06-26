import React from "react";
import { CopyCa } from "../../../../common/copy-ca";
import { Links } from "../../../../common/links";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { Cards } from "../../../game/cards/cards";
import { useCompensateScrollbar } from "../../../../hooks/useCompensateScrollbar";

export const Block1 = () => {
  useCompensateScrollbar();

  return (
    <div
      className="w-full min-h-[100vh] py-20 block1 justify-center items-center flex flex-col relative overflow-hidden"
      style={{ wordSpacing: "5px" }}
    >
      <img
        className="absolute top-0 left-0 h-[100vh] z-0 w-1/2 opacity-20"
        src="./block1/rain.gif"
      />
      <img
        className="absolute top-0 right-0 h-[100vh] z-0 w-1/2 opacity-20"
        src="./block1/rain.gif"
      />
      <img
        className="absolute top-[-5%] md:top-[-10%] lg:top-[-30%] w-[100vh] img-hor z-50 md:z-10"
        src="./block1/pepe.webp"
      />
      <img
        src="./block1/oblako.webp"
        className="absolute top-[0] left-[-10vh] md:z-50  z-20 w-[30vh] xl:w-[40vh]"
      />
      <img
        src="./block1/oblakol.webp"
        className="absolute top-[0] right-[-10vh] md:z-50 z-20 w-[30vh] xl:w-[40vh]"
      />
      <div
        className={
          "w-11/12 max-w-screen-2xl inside flex flex-col p-4 py-12 gap-12 rounded-xl justify-center items-center z-50 md:z-20"
        }
      >
        <motion.div
          className="w-full flex flex-col justify-center items-center gap-12"
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
          <TextReg
            customClass={
              "mt-4 text-4xl text-center font-bold text-black uppercase"
            }
            text={"Tarot Of Meme $TOME"}
          />
          <CopyCa />
          <Links />

          <div className="flex w-full flex-col gap-4 justify-center items-center">
            <Cards />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
