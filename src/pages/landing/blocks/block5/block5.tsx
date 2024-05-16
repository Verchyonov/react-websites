import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { BUY_LINK } from "../../../../common/urls";
import { AppearWrapper } from "../../../../common/appear-wrapper";

export const Block5 = () => {
  return (
    <>
      <div
        className="w-full min-h-screen  justify-center items-center flex flex-col relative uppercase"
        style={{ wordSpacing: "5px" }}
      >
        <AppearWrapper
          customClass={
            "w-full xl:w-10/12 max-w-screen-2x  justify-around flex flex-col p-4 gap-8 py-16 md:px-0"
          }
        >
          <div className="flex flex-col justify-center">
            <div className="flex flex-col w-full">
              <TextReg
                customClass={"text-3xl md:text-5xl text-center  xl:mb-4"}
                text={
                  "Fully developed by Letto Dev Team. This will be the 10th coin released by our team."
                }
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="w-full md:w-7/12 p-4 flex flex-col gap-8 text-white items-center justify-center text-xl xl:text-3xl">
              <div className="flex flex-col gap-8">
                <TextReg
                  customClass={"text-center xl:text-left"}
                  text={"• AVERAGE ATH MC: $670K"}
                />
                <TextReg
                  customClass={"text-center xl:text-left"}
                  text={"• TOTAL TRADING VOLUME: OVER $17M"}
                />
                <TextReg
                  customClass={"text-center xl:text-left"}
                  text={"• HIGHEST MC: $1.1M"}
                />
                <TextReg
                  customClass={"text-center xl:text-left"}
                  text={"• 1,063 SUBS IN DEV CHANNEL"}
                />
              </div>
            </div>
            <div className="w-full md:w-5/12 flex p-4 justify-center items-center text-white">
              <img
                className="md:h-[50vh] object-contain hover:scale-[1.02] transition-all duration-300"
                src="./block5/naked.webp"
                alt="card"
              />
            </div>
          </div>
        </AppearWrapper>
      </div>
    </>
  );
};
