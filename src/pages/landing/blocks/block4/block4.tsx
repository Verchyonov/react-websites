import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { BUY_LINK } from "../../../../common/urls";

import { useEffect, useState } from "react";
import { AppearWrapper } from "../../../../common/appear-wrapper";

const imageArray = Array.from({ length: 77 }, (_, i) => {
  return `./cards/cardio_${i}.webp`;
});

export const Block4 = () => {
  const [count, setCount] = useState(0);
  const onBuy = () => {
    window.open(BUY_LINK, "_blank");
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);

  const image = imageArray[count % imageArray.length];

  return (
    <div className="w-full min-h-screen bg-black justify-center align-middle items-center flex flex-col relative">
      <AppearWrapper
        customClass={
          "w-11/12 md:w-9/12 max-w-screen-2x flex flex-col md:flex-row p-8 gap-4"
        }
      >
        <div className="w-full md:w-8/12 flex p-4 flex-col gap-4 text-white  justify-around">
          <div className="flex flex-col gap-2">
            <TextReg
              customClass={"text-[#00BCF8] text-4xl"}
              text={"Coin Distribution:"}
            />
            <TextReg
              customClass={"text-[#00BCF8] text-2xl"}
              text="We are launching the coin on pump.fun to ensure transparency for the community. There will be a significant developer buy and burn, along with technical solutions for better coin spread."
            />
          </div>
          <div className="flex flex-col gap-8 my-auto items-start">
            <TextReg
              customClass={"text-[#00BCF8] text-left text-2xl"}
              text={"• 40% initial developer buy and burn"}
            />

            <TextReg
              customClass={"text-[#00BCF8] text-left text-2xl"}
              text={"• 10% free airdrop"}
            />

            <TextReg
              customClass={"text-[#00BCF8] text-left text-2xl"}
              text={"• 10% post-Raydium developer buy and burn"}
            />

            <TextReg
              customClass={"text-[#00BCF8] text-left md:mb-0 text-2xl"}
              text={"• 5% team allocation"}
            />
            <TextReg
              customClass={"text-[#00BCF8] text-left md:mb-0 mb-8 text-2xl"}
              text={"• 35% in circulation"}
            />
          </div>
          <div className="flex w-full justify-center">
            <div className="flex flex-col gap-4 md:gap-16 md:flex-row">
              <img
                onClick={onBuy}
                className=" md:w-4/12 cursor-pointer rounded-xl"
                src="./block4/buy.jpg"
                alt="buy"
              />
              {/* <img
                onClick={onPlay}
                className="md:h-20 md:w-6/12 cursor-pointer"
                src="./block4/play.jpg"
                alt="play"
              /> */}
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 flex p-4 justify-center items-center text-white">
          <img className="md:h-[50vh] fade" src={image} alt="card" />
        </div>
      </AppearWrapper>
    </div>
  );
};
