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
      <div className="w-full min-h-screen bg-black justify-center items-center flex flex-col relative">
        <AppearWrapper
          customClass={
            "w-11/12 md:w-9/12 max-w-screen-2x flex flex-col md:flex-row p-8 gap-4"
          }
        >
          <div className="w-full md:w-6/12 flex p-4 flex-col gap-4 text-white items-center justify-center text-3xl">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <TextReg
                  customClass={"text-[#00BCF8] text-5xl mb-4 "}
                  text={"Developer:"}
                />
                <TextReg
                  customClass={"text-[#00BCF8]"}
                  text={
                    "Fully developed by Letto Dev Team. This will be the 10th coin released by our team."
                  }
                />
              </div>
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={"- Average ATH market cap of our 9 projects: $670k"}
              />
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={"- Total trading volume: over $17m"}
              />
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={"- Highest market cap: $1.1m"}
              />
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={
                  "- Number of subscribers in the developer’s channel: 1,063 subs"
                }
              />
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={"- Developer profit: $0"}
              />
            </div>
          </div>
          <div className="w-full md:w-6/12 flex p-4 justify-center items-center text-white">
            <img className="md:h-[50vh]" src="./block7/naked.webp" alt="card" />
          </div>
        </AppearWrapper>
      </div>
    </>
  );
};