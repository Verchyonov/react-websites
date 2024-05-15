import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { AppearWrapper } from "../../../../common/appear-wrapper";

export const Block2 = () => {
  return (
    <div className="w-full min-h-screen block2 justify-center items-center flex flex-col relative blurred-border-top">
      <AppearWrapper
        customClass={
          "w-full xl:w-10/12 max-w-screen-2x flex flex-col md:flex-row p-4 xl:p-8 gap-4"
        }
      >
        <div className="w-full md:w-8/12 flex p-4 flex-col gap-8 text-white items-center justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-center align-center">
              <TextReg
                customClass={
                  "text-[#00BCF8] text-5xl xl:text-left text-center mb-4 flex justify-center"
                }
                text={"Tarot Of Meme"}
              />
            </div>
            <TextReg
              customClass={"text-[#00BCF8] text-3xl text-center"}
              text={
                "Is a deck of cards with meme pictures used for making crypto predictions."
              }
            />
          </div>
          <div className="flex flex-col gap-8 ">
            <TextReg
              customClass={"text-[#00BCF8] text-3xl text-center"}
              text={
                "Based on the real-life Tarot deck, it’s designed to be more fun and easy to use. The concept is similar to the Book of Meme or Museum of Meme, but unique. Our goal is to create a tool that uses your wallet address or coin CA to make spiritual predictions about other projects or personal funds."
              }
            />
          </div>
        </div>
        <div className="w-full md:w-4/12 flex p-4 justify-center items-center text-white">
          <img
            className="md:h-[50vh] text-3xl"
            src="./block2/gnom.webp"
            alt="gendalph"
          />
        </div>
      </AppearWrapper>
    </div>
  );
};
