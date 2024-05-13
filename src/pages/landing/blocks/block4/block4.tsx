import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { BUY_LINK } from "../../../../common/urls";

export const Block4 = () => {
  const onBuy = () => {
    window.open(BUY_LINK, "_blank");
  };

  const onPlay = () => {
    window.open("/game", "_blank");
  };
  return (
    <div className="w-full min-h-screen bg-black justify-center align-middle items-center flex flex-col relative">
      <motion.div
        className={
          "w-11/12 md:w-9/12 max-w-screen-2x flex flex-col md:flex-row p-8 gap-4"
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
        <div className="w-full md:w-8/12 flex p-4 flex-col gap-4 text-white items-center justify-around">
          <TextReg
            customClass={"text-[#00BCF8] md:mb-0 mb-16"}
            text="Lorem ipsun ipsun"
          />
          <div className="flex flex-col gap-8 items-start">
            <TextReg
              customClass={"text-[#00BCF8] text-left"}
              text={"•  Lorem ipsun ipsun ipsun ipsun"}
            />

            <TextReg
              customClass={"text-[#00BCF8] text-left"}
              text={"•  Lorem ipsun ipsun ipsun ipsun"}
            />

            <TextReg
              customClass={"text-[#00BCF8] text-left"}
              text={"•  Lorem ipsun ipsun ipsun"}
            />

            <TextReg
              customClass={"text-[#00BCF8] text-left md:mb-0 mb-8"}
              text={"•  Lorem ipsun ipsun ipsun"}
            />
          </div>
          <div className="flex w-full justify-center">
            <div className="flex justify-center flex-col gap-4 md:gap-16 md:flex-row">
              <img
                onClick={onBuy}
                className=" md:w-4/12 cursor-pointer"
                src="./block4/buy.jpg"
                alt="buy"
              />
              {/* <img
                onClick={onPlay}
                className="md:h-20 md:w-6/12 cursor-pointer"
                src="./block4/play.jpg"
                alt="play"
              /> */}
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12 flex p-4 justify-center items-center text-white">
          <img className="md:h-[50vh]" src="./block4/card.jpg" alt="card" />
        </div>
      </motion.div>
    </div>
  );
};
