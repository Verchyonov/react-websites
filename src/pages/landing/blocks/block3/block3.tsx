import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { AppearWrapper } from "../../../../common/appear-wrapper";

export const Block3 = () => {
  return (
    <div className="w-full min-h-[60vh] bg-black justify-center items-center flex flex-col relative">
      <AppearWrapper
        customClass={
          "w-11/12 xl:w-10/12 max-w-screen-2x flex flex-col md:flex-row gap-4 justify-center items-center"
        }
      >
        <div className="flex flex-wrap justify-center align-center">
          <div className="flex w-full justify-around">
            <img
              className="w-3/12 md:w-[23%] rounded-2xl p-2"
              src="./block3/old.gif"
              alt="card"
            />
            <img
              className="w-3/12 md:w-[23%] rounded-2xl p-2"
              src="./block3/treasure.webp"
              alt="card"
            />
            <img
              className="w-3/12 md:w-[23%] rounded-2xl p-2"
              src="./block3/hand.gif"
              alt="card"
            />
            <img
              className="w-3/12 md:w-[23%] rounded-2xl p-2"
              src="./block3/tavern.webp"
              alt="card"
            />
          </div>
          <div className="flex w-full justify-around">
            <div className="flex flex-col items-center w-3/12 md:w-[23%] gap-4 p-2">
              <TextReg customClass={"text-[#00BCF8]"} text={"Stage 1:"} />
              <TextReg
                customClass={"text-[#00BCF8] text-center"}
                text={
                  "Web and social media release Start of marketing Concept promotion"
                }
              />
            </div>
            <div className="flex flex-col items-center w-3/12 md:w-[23%] gap-4 p-2">
              <TextReg
                customClass={"text-[#00BCF8] text-center"}
                text={"Stage 2:"}
              />
              <TextReg
                customClass={"text-[#00BCF8] text-center"}
                text={
                  "Accumulate attention Open airdrop sign-up Project launch on pump.fun"
                }
              />
            </div>
            <div className="flex flex-col items-center w-3/12 md:w-[23%] gap-4 p-2">
              <TextReg customClass={"text-[#00BCF8]"} text={"Stage 3:"} />
              <TextReg
                customClass={"text-[#00BCF8] text-center"}
                text={
                  "Dev burn before Raydium Screener updates Airdrop delivery within an hour after launch"
                }
              />
            </div>
            <div className="flex flex-col items-center w-3/12 md:w-[23%] gap-4 p-2">
              <TextReg customClass={"text-[#00BCF8]"} text={"Stage 4:"} />
              <TextReg
                customClass={"text-[#00BCF8] text-center"}
                text={
                  "100 SOL + 10% developer buy and burn at 2 million market cap Launch Tarot predictions by coin CA (tool) Marketing to stabilize the coin"
                }
              />
            </div>
          </div>
        </div>
      </AppearWrapper>
    </div>
  );
};
