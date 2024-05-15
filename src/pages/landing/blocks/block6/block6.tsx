import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { BUY_LINK } from "../../../../common/urls";
import { AppearWrapper } from "../../../../common/appear-wrapper";

export const Block6 = () => {
  const onPlay = () => {
    window.open("/game", "_blank");
  };

  const onBuy = () => {
    window.open(BUY_LINK, "_blank");
  };

  return (
    <>
      <div className="w-full min-h-screen justify-center items-center flex flex-col relative bg-black">
        <AppearWrapper
          customClass={
            "w-full md:w-10/12 max-w-screen-2x flex flex-col md:flex-row p-4 xl:p-8 gap-4"
          }
        >
          <div className="w-full md:w-4/12 flex p-4 justify-center items-center text-white">
            <img
              className="md:h-[50vh] rounded-xl hover:scale-[1.02] transition-all duration-300"
              src="./game/back.webp"
              alt="card"
            />
          </div>
          <div className="w-full md:w-8/12 flex p-4 flex-col gap-4 text-white items-center justify-around">
            <div className="flex flex-col gap-16">
              <TextReg
                customClass={"text-3xl md:text-4xl text-center"}
                text={
                  "All these metrics can be verified by checking the history of the developer's channel. For the launch of the 10th coin, we have decided to significantly increase the initial developer buy and add numerous scripts to combat bots and large purchases in the early stages."
                }
              />

              <div className="flex w-full justify-center">
                <div className="flex flex-col justify-center gap-4 md:gap-16 md:flex-row">
                  <img
                    onClick={onBuy}
                    className="justify-center cursor-pointer  md:w-4/12 rounded-xl "
                    src="./block4/buy.jpg"
                    alt="buy"
                  />
                </div>
              </div>
            </div>
          </div>
        </AppearWrapper>
      </div>
    </>
  );
};
