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
          <div className="flex flex-col md:flex-row w-full justify-around py-16 md:px-0 gap-6 md:gap-0">
            <img
              className="w-full md:w-[23%] rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300"
              src="./block3/old.gif"
              alt="card"
            />
            <div className="md:hidden flex-col items-center w-full md:w-[23%] gap-2 p-2 flex text-center text-2xl">
              <TextReg customClass={"text-3xl mb-2"} text={"Stage 1:"} />
              <TextReg customClass={""} text={"• WEB RELEASE"} />
              <TextReg customClass={""} text={"• CONCEPT PROMOTION"} />
              <TextReg customClass={""} text={"• MARKETING"} />
            </div>
            <img
              className="w-full md:w-[23%] rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300"
              src="./block3/treasure.gif"
              alt="card"
            />
            <div className="md:hidden flex-col items-center w-full md:w-[23%] gap-2 p-2 flex text-center text-2xl">
              <TextReg customClass={"text-3xl mb-2"} text={"Stage 2:"} />
              <TextReg customClass={""} text={"• ACCUMULATE ATTENTION "} />
              <TextReg customClass={""} text={"• AIRDROP SIGN-UP"} />
              <TextReg customClass={""} text={"• PUMP.FUN LAUNCH"} />
            </div>
            <img
              className="w-full md:w-[23%] rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300"
              src="./block3/hand.gif"
              alt="card"
            />
            <div className="flex flex-col items-center w-full md:w-[23%] gap-2 p-2 md:hidden text-center text-2xl">
              <TextReg customClass={"text-3xl mb-2"} text={"Stage 3:"} />
              <TextReg customClass={""} text={"• DEV BURN"} />
              <TextReg customClass={""} text={"• SCREENERS UPDATE"} />
              <TextReg customClass={""} text={"• AIRDROP DELIVERY"} />
            </div>
            <img
              className="w-full md:w-[23%] rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300"
              src="./block3/tavern.png"
              alt="card"
            />
            <div className="flex flex-col items-center w-full md:w-[23%] gap-2 p-2 md:hidden text-center text-2xl">
              <TextReg customClass={"text-3xl mb-2"} text={"Stage 4:"} />
              <TextReg customClass={""} text={"• DEV BUY BURN"} />
              <TextReg customClass={""} text={"• LAUNCH TAROT  (TOOL)"} />
              <TextReg customClass={""} text={"• MARKETING"} />
            </div>
          </div>
          <div className="hidden flex-row w-full justify-around md:flex uppercase text-center text-xl md:text-2xl">
            <div className="flex flex-col items-center w-full md:w-[23%] gap-2 p-2">
              <TextReg
                customClass={"md:text-3xl text-4xl mb-2"}
                text={"Stage 1:"}
              />
              <TextReg customClass={""} text={"• WEB RELEASE"} />
              <TextReg customClass={""} text={"• CONCEPT PROMOTION"} />
              <TextReg customClass={""} text={"• MARKETING"} />
            </div>
            <div className="flex flex-col items-center w-full md:w-[23%] gap-2 p-2">
              <TextReg
                customClass={"text-center text-3xl mb-2"}
                text={"Stage 2:"}
              />
              <TextReg customClass={""} text={"• ACCUMULATE ATTENTION "} />
              <TextReg customClass={""} text={"• AIRDROP SIGN-UP"} />
              <TextReg customClass={""} text={"• PUMP.FUN LAUNCH"} />
            </div>
            <div className="flex flex-col items-center w-full md:w-[23%] gap-2 p-2">
              <TextReg
                customClass={"text-center text-3xl mb-2"}
                text={"Stage 3:"}
              />
              <TextReg customClass={""} text={"• DEV BURN"} />
              <TextReg customClass={""} text={"• SCREENERS UPDATE"} />
              <TextReg customClass={""} text={"• AIRDROP DELIVERY"} />
            </div>
            <div className="flex flex-col items-center w-full md:w-[23%] gap-2 p-2">
              <TextReg
                customClass={"text-center text-3xl mb-2"}
                text={"Stage 4:"}
              />
              <TextReg customClass={""} text={"• DEV BUY BURN"} />
              <TextReg customClass={""} text={"• LAUNCH TAROT  (TOOL)"} />
              <TextReg customClass={""} text={"• MARKETING"} />
            </div>
          </div>
        </div>
      </AppearWrapper>
    </div>
  );
};
