import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { AppearWrapper } from "../../../../common/appear-wrapper";
import { useMoveOnScrollHook } from "../../../../hooks/useMoveOnScrollHook";
import { MovingImg } from "../../../../common/moving-img";

export const Block2 = () => {
  const { y, ref } = useMoveOnScrollHook(100);

  return (
    <div className="w-full min-h-screen block2 justify-center items-center flex flex-col relative">
      <AppearWrapper
        customClass={
          "w-full xl:w-10/12 max-w-screen-2x flex flex-col md:flex-row p-4 xl:p-8 gap-4 py-16 md:px-0"
        }
      >
        <div className="w-full lg:w-8/12 flex px-12 py-6 flex-col gap-8 text-black items-center justify-center relative">
          <img
            src="./zadnik.webp"
            alt="card"
            className="w-full absolute top-0 left-0 z-25"
          />
          <div ref={ref} className="flex flex-col gap-2 z-50">
            <div className="flex flex-col justify-center align-center">
              <TextReg
                customClass={
                  "text-5xl xl:text-left text-center mb-4 flex justify-center"
                }
                text={"Tarot Of Meme"}
              />
            </div>
            <TextReg
              customClass={" text-3xl text-center"}
              text={
                "Is a deck of cards with meme pictures used for making crypto predictions."
              }
            />
          </div>
          <div className="flex flex-col gap-8 z-50">
            <TextReg
              customClass={"text-3xl text-center"}
              text={
                "Based on the real-life Tarot deck, it’s designed to be more fun and easy to use. The concept is similar to the Book of Meme or Museum of Meme, but unique. Our goal is to create a tool that uses your wallet address or coin CA to make spiritual predictions about other projects or personal funds."
              }
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 flex p-4 justify-center items-center text-white">
          {/* <img
            className="lg:h-[50vh] text-3xl hover:scale-[1.02] transition-all duration-300"
            src="./block2/gnom.webp"
            alt="gendalph"
          /> */}
          <MovingImg
            y={y}
            imgPath={"./block2/gnom.webp"}
            alt={"gendalph"}
            customClassImg={
              "lg:h-[50vh] text-3xl hover:scale-[1.02] transition-all duration-300"
            }
            ty={10}
            tx={2}
            tz={0}
          />
        </div>
      </AppearWrapper>
    </div>
  );
};
