import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";

export const Block6 = () => {
  const onClick = () => {
    window.open("/game", "_blank");
  };

  return (
    <motion.div
      className={
        "w-full min-h-screen bg-black justify-center items-center flex flex-col relative"
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
      <div className="w-11/12 md:w-10/12 max-w-screen-2x flex flex-col lg:flex-row p-8 gap-4 justify-center">
        <div className="flex w-full lg:w-2/12 flex-col gap-8 p-4 justify-center align-center items-center">
          <TextReg customClass={"text-[#00BCF8]"} text={"Lorem ipsun"} />
          <img
            className="h-[50vh] lg:h-[60vh]"
            src="./block6/deck.jpg"
            alt="deck"
          />
        </div>
        <div className="flex w-full lg:w-2/12 flex-col gap-8 p-4 justify-center align-center items-center">
          <TextReg customClass={"text-[#00BCF8]"} text={"Lorem ipsun"} />
          <img
            className="h-[50vh] lg:h-[60vh]"
            src="./block6/deck.jpg"
            alt="deck"
          />
        </div>
        <div className="flex w-full lg:w-2/12 flex-col gap-8 p-4 justify-center align-center items-center">
          <TextReg customClass={"text-[#00BCF8]"} text={"Lorem ipsun"} />
          <img
            className="h-[50vh] lg:h-[60vh]"
            src="./block6/deck.jpg"
            alt="deck"
          />
        </div>
        <div className="flex w-full lg:w-2/12 flex-col gap-8 p-4 justify-center align-center items-center">
          <TextReg customClass={"text-[#00BCF8]"} text={"Lorem ipsun"} />
          <img
            className="h-[50vh] lg:h-[60vh]"
            src="./block6/deck.jpg"
            alt="deck"
          />
        </div>

        <div className="flex w-full lg:w-2/12 flex-col gap-8 p-4 justify-center align-center items-center">
          <TextReg customClass={"text-[#00BCF8]"} text={"Lorem ipsun"} />
          <img
            className="h-[50vh] lg:h-[60vh]"
            src="./block6/deck.jpg"
            alt="deck"
          />
        </div>
      </div>

      <img
        onClick={onClick}
        className="w-12/12 px-8 md:w-4/12 cursor-pointer"
        src={"./block1/play.png"}
        alt="play"
      />
    </motion.div>
  );
};
