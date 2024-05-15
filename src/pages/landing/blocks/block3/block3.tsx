import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { AppearWrapper } from "../../../../common/appear-wrapper";

export const Block3 = () => {
  return (
    <div className="w-full min-h-screen justify-center items-center flex flex-col relative">
      <AppearWrapper
        customClass={
          "w-11/12 xl:w-10/12 max-w-screen-2x flex flex-col md:flex-row gap-4 justify-center items-center"
        }
      >
        <div className="flex flex-wrap justify-center align-center">
          <div className="flex flex-col md:flex-row w-full justify-around">
            <img
              className="w-full md:w-[23%] rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300"
              src="./block3/old.gif"
              alt="card"
            />
            <div className="md:hidden flex-col items-center w-full md:w-[23%] gap-4 p-2 flex">
              <TextReg customClass={"text-xl"} text={"Stage 1:"} />
              <TextReg
                customClass={"text-center"}
                text={
                  "Web and social media release Start of marketing Concept promotion"
                }
              />
            </div>
            <img
              className="w-full md:w-[23%] rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300"
              src="./block3/treasure.webp"
              alt="card"
            />
            <div className="md:hidden flex-col items-center w-full md:w-[23%] gap-4 p-2 flex">
              <TextReg customClass={"text-xl text-center"} text={"Stage 2:"} />
              <TextReg
                customClass={"text-center"}
                text={
                  "Accumulate attention Open airdrop sign-up Project launch on pump.fun"
                }
              />
            </div>
            <img
              className="w-full md:w-[23%] rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300"
              src="./block3/hand.gif"
              alt="card"
            />
            <div className="flex flex-col items-center w-full md:w-[23%] gap-4 p-2 md:hidden">
              <TextReg customClass={"text-xl"} text={"Stage 3:"} />
              <TextReg
                customClass={"text-center"}
                text={
                  "Dev burn before Raydium Screener updates Airdrop delivery within an hour after launch"
                }
              />
            </div>
            <img
              className="w-full md:w-[23%] rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300"
              src="./block3/tavern.webp"
              alt="card"
            />
            <div className="flex flex-col items-center w-full md:w-[23%] gap-4 p-2 md:hidden">
              <TextReg customClass={"text-xl"} text={"Stage 4:"} />
              <TextReg
                customClass={"text-center"}
                text={
                  "100 SOL + 10% developer buy and burn at 2 million market cap Launch Tarot predictions by coin CA (tool) Marketing to stabilize the coin"
                }
              />
            </div>
          </div>
          <div className="hidden flex-row w-full justify-around md:flex">
            <div className="flex flex-col items-center w-full md:w-[23%] gap-4 p-2">
              <TextReg customClass={"text-center text-3xl"} text={"Stage 1:"} />
              <TextReg
                customClass={"text-center text-xl xl:text-2xl"}
                text={
                  "Web and social media release Start of marketing Concept promotion"
                }
              />
            </div>
            <div className="flex flex-col items-center w-full md:w-[23%] gap-4 p-2">
              <TextReg customClass={"text-center text-3xl"} text={"Stage 2:"} />
              <TextReg
                customClass={"text-center text-xl xl:text-2xl"}
                text={
                  "Accumulate attention Open airdrop sign-up Project launch on pump.fun"
                }
              />
            </div>
            <div className="flex flex-col items-center w-full md:w-[23%] gap-4 p-2">
              <TextReg customClass={"text-center text-3xl"} text={"Stage 3:"} />
              <TextReg
                customClass={"text-center text-xl xl:text-2xl"}
                text={
                  "Dev burn before Raydium Screener updates Airdrop delivery within an hour after launch"
                }
              />
            </div>
            <div className="flex flex-col items-center w-full md:w-[23%] gap-4 p-2">
              <TextReg customClass={"text-center text-3xl"} text={"Stage 4:"} />
              <TextReg
                customClass={"text-center text-xl xl:text-2xl"}
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
