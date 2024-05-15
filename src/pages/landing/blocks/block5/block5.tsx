import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { BUY_LINK } from "../../../../common/urls";
import { AppearWrapper } from "../../../../common/appear-wrapper";

export const Block5 = () => {
  const onPlay = () => {
    window.open("/game", "_blank");
  };

  const onBuy = () => {
    window.open(BUY_LINK, "_blank");
  };

  return (
    <>
      <div className="w-full min-h-screen  justify-center items-center flex flex-col relative">
        <AppearWrapper
          customClass={
            "w-full xl:w-9/12 max-w-screen-2x  justify-around flex flex-col p-4 gap-8"
          }
        >
          <div className="flex flex-col justify-center">
            <div className="flex flex-col w-full">
              <TextReg
                customClass={"text-3xl md:text-5xl text-center  xl:mb-4 "}
                text={"Developer:"}
              />
              <TextReg
                customClass={"text-center text-3xl"}
                text={
                  "Fully developed by Letto Dev Team. This will be the 10th coin released by our team."
                }
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="w-full md:w-6/12 p-4 flex flex-col gap-8 text-white items-center justify-center text-xl xl:text-3xl">
              <div className="flex flex-col gap-8">
                <TextReg
                  customClass={"text-center xl:text-left"}
                  text={"• Average ATH market cap of our 9 projects: $670k"}
                />
                <TextReg
                  customClass={"text-center xl:text-left"}
                  text={"• Total trading volume: over $17m"}
                />
                <TextReg
                  customClass={"text-center xl:text-left"}
                  text={"• Highest market cap: $1.1m"}
                />
                <TextReg
                  customClass={"text-center xl:text-left"}
                  text={
                    "• Number of subscribers in the developer’s channel: 1,063 subs"
                  }
                />
                <TextReg
                  customClass={"text-center xl:text-left"}
                  text={"• Developer profit: $0"}
                />
              </div>
            </div>
            <div className="w-full md:w-6/12 flex p-4 justify-center items-center text-white">
              <img
                className="md:h-[50vh] object-contain hover:scale-[1.02] transition-all duration-300"
                src="./block7/naked.webp"
                alt="card"
              />
            </div>
          </div>
        </AppearWrapper>
      </div>
    </>
  );
};
