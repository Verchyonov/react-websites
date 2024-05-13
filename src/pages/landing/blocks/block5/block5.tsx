import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";

export const Block5 = () => {
  return (
    <div className="w-full min-h-[60vh] bg-black justify-center items-center flex flex-col relative">
      <img
        className="w-16 md:w-32 absolute bottom-0 left-0"
        src="./block5/chel.jpg"
        alt="chel"
      />
      <img
        className="w-16 md:w-32 absolute bottom-0 right-0"
        src="./block5/chel2.jpg"
        alt="chel"
      />
      <motion.div
        className={
          "w-11/12 md:w-11/12 max-w-screen-2x flex flex-col md:flex-row p-8 gap-4 justify-center items-center"
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
        <div className="w-full flex flex-col justify-between items-center gap-4 md:gap-16">
          <TextReg
            customClass={"text-[#00BCF8]"}
            text={"Lorem ipsun ipsun ipsun"}
          />
          <TextReg
            customClass={"text-[#00BCF8] w-full md:w-6/12"}
            text={
              "Lorem ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun"
            }
          />
        </div>
      </motion.div>
    </div>
  );
};
