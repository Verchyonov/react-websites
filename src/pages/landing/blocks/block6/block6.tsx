import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { BUY_LINK, TELEGRAM_DEV } from "../../../../common/urls";
import { AppearWrapper } from "../../../../common/appear-wrapper";

export const Block6 = () => {
  const onPlay = () => {
    window.open("/game", "_blank");
  };

  const onBuy = () => {
    window.open(BUY_LINK, "_blank");
  };

  const onTG = () => {
    window.open(TELEGRAM_DEV, "_blank");
  };

  return (
    <>
      <div className="w-full min-h-screen justify-center items-center flex flex-col relative bg-black py-16 md:px-0">
        <AppearWrapper
          customClass={
            "w-full md:w-10/12 max-w-screen-2x flex flex-col md:flex-row p-4 xl:p-8 gap-4"
          }
        >
          <div className="w-full md:w-4/12 flex p-4 justify-center items-center text-white">
            <img
              className="md:h-[50vh] rounded-xl hover:scale-[1.02] transition-all duration-300 object-contain"
              src="./game/back.webp"
              alt="card"
            />
          </div>
          <div className="w-full md:w-8/12 flex p-4 flex-col gap-4 text-white items-center justify-around">
            <div className="flex flex-col gap-16">
              <TextReg
                customClass={"text-3xl md:text-4xl text-center"}
                text={
                  "THESE METRICS ARE VERIFIABLE IN THE DEVELOPER'S CHANNEL HISTORY. FOR THE 10TH COIN LAUNCH, WE'LL BOOST THE INITIAL DEVELOPER BUY AND ADD SCRIPTS TO COUNTER BOTS AND LARGE EARLY PURCHASES."
                }
              />

              <div className="flex w-full justify-center gap-8">
                <a
                  onClick={onBuy}
                  className="px-8 py-4 w-full md:w-4/12 text-2xl cursor-pointer rounded-xl bg-[#313131] text-white text-center hover:scale-[1.02] transition-all duration-300"
                >
                  BUY
                </a>
                <a
                  onClick={onTG}
                  className="px-8 py-4 w-full md:w-4/12 text-2xl cursor-pointer rounded-xl bg-[#313131] text-white text-center hover:scale-[1.02] transition-all duration-300"
                >
                  DEV CHANNEL
                </a>
              </div>
            </div>
          </div>
        </AppearWrapper>
      </div>
    </>
  );
};
