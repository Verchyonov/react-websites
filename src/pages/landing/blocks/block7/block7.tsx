import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { BUY_LINK } from "../../../../common/urls";
import { AppearWrapper } from "../../../../common/appear-wrapper";

export const Block7 = () => {
  const onPlay = () => {
    window.open("/game", "_blank");
  };

  const onBuy = () => {
    window.open(BUY_LINK, "_blank");
  };

  return (
    <>
      <div className="w-full min-h-screen bg-black justify-center items-center flex flex-col relative">
        <AppearWrapper
          customClass={
            "w-11/12 md:w-9/12 max-w-screen-2x flex flex-col md:flex-row p-8 gap-4"
          }
        >
          <div className="w-full md:w-6/12 flex p-4 flex-col gap-4 text-white items-center justify-center">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-2">
                <TextReg
                  customClass={"text-[#00BCF8] text-3xl"}
                  text={"Developer:"}
                />
                <TextReg
                  customClass={"text-[#00BCF8] text-3xl"}
                  text={
                    "Fully developed by Letto Dev Team. This will be the 10th coin released by our team."
                  }
                />
              </div>
              <TextReg
                customClass={"text-[#00BCF8] text-3xl"}
                text={"- Average ATH market cap of our 9 projects: $670k"}
              />
              <TextReg
                customClass={"text-[#00BCF8] text-3xl"}
                text={"- Total trading volume: over $17m"}
              />
              <TextReg
                customClass={"text-[#00BCF8] text-3xl"}
                text={"- Highest market cap: $1.1m"}
              />
              <TextReg
                customClass={"text-[#00BCF8] text-3xl"}
                text={
                  "- Number of subscribers in the developer’s channel: 1,063 subs"
                }
              />
              <TextReg
                customClass={"text-[#00BCF8] text-3xl"}
                text={"- Developer profit: $0"}
              />
            </div>
          </div>
          <div className="w-full md:w-6/12 flex p-4 justify-center items-center text-white">
            <img className="md:h-[50vh]" src="./block7/naked.webp" alt="card" />
          </div>
        </AppearWrapper>
      </div>
      <div className="w-full min-h-screen bg-black justify-center items-center flex flex-col relative">
        <AppearWrapper
          customClass={
            "w-11/12 md:w-9/12 max-w-screen-2x flex flex-col md:flex-row p-8 gap-4"
          }
        >
          <div className="w-full md:w-4/12 flex p-4 justify-center items-center text-white">
            <img
              className="md:h-[50vh] rounded-xl"
              src="./game/back.webp"
              alt="card"
            />
          </div>
          <div className="w-full md:w-8/12 flex p-4 flex-col gap-4 text-white items-center justify-around">
            <div className="flex flex-col gap-16">
              <TextReg
                customClass={"text-[#00BCF8] text-3xl"}
                text={
                  "All these metrics can be verified by checking the history of the developer's channel. For the launch of the 10th coin, we have decided to significantly increase the initial developer buy and add numerous scripts to combat bots and large purchases in the early stages."
                }
              />

              <div className="flex w-full justify-center">
                <div className="flex flex-col justify-center gap-4 md:gap-16 md:flex-row">
                  <img
                    onClick={onBuy}
                    className="justify-center cursor-pointer  md:w-4/12 rounded-xl"
                    src="./block4/buy.jpg"
                    alt="buy"
                  />
                  {/* <img
                    onClick={onPlay}
                    className="cursor-pointer md:h-20 md:w-6/12"
                    src="./block4/play.jpg"
                    alt="play"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </AppearWrapper>
      </div>
    </>
  );
};
