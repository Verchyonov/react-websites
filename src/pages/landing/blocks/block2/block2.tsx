import { TextReg } from "../../../../common/text/text-reg";

import { motion } from "framer-motion";

export const Block2 = () => {
  return (
    <div className="w-full min-h-screen bg-black justify-center items-center flex flex-col relative">
      <motion.div
        className={
          "w-11/12 md:w-11/12 max-w-screen-2x flex flex-col md:flex-row p-8 gap-4"
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
        <div className="w-full md:w-6/12 flex p-4 flex-col gap-4 text-white items-center justify-around">
          <TextReg customClass={"text-[#00BCF8]"} text={"Lorem ipsun"} />
          <div className="flex flex-col gap-8">
            <TextReg
              customClass={"text-[#00BCF8]"}
              text={"Lorem ipsun Lorem ipsun Lorem ipsun"}
            />
            <TextReg
              customClass={"text-[#00BCF8]"}
              text={"Lorem ipsun Lorem ipsun Lorem ipsun"}
            />
            <TextReg
              customClass={"text-[#00BCF8]"}
              text={"Lorem ipsun Lorem ipsun Lorem ipsun"}
            />
          </div>
          <img className="w-8/12" src={"./block2/cards.jpg"} alt="cards" />
        </div>
        <div className="w-full md:w-6/12 flex p-4 justify-center items-center text-white">
          <img
            className="md:h-[80vh]"
            src="./block2/gendalph.jpg"
            alt="gendalph"
          />
        </div>
      </motion.div>
    </div>
  );
};
