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
  const [imageOpacity, setImageOpacity] = useState(1);

  const onBuy = () => {
    window.open(BUY_LINK, "_blank");
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setImageOpacity(0);
      setTimeout(() => {
        setCount((c) => (c + 1) % imageArray.length);
        setImageOpacity(1);
      }, 500);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);

  const image = imageArray[count % imageArray.length];
  const imageStyle = { transition: "opacity 0.5s ease-in-out" };

  return (
    <div className="w-full min-h-screen bg-black justify-around align-middle items-center flex flex-col relative uppercase">
      <AppearWrapper
        customClass={
          "w-full xl:w-10/12 max-w-screen-2x flex flex-col p-4 xl:p-8 gap-8 py-16 md:px-0"
        }
      >
        <div className="flex flex-col gap-8">
          <TextReg
            customClass={"text-5xl md:text-5xl mb-4 text-center"}
            text={"Coin Distribution"}
          />
          <TextReg
            customClass={"text-2xl md:text-3xl text-center"}
            text="LAUNCHING AT PUMP.FUN. THERE WILL BE A SIGNIFICANT DEVELOPER BUY AND BURN, ALONG WITH TECHNICAL SOLUTIONS FOR BETTER COIN SPREAD."
          />
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="w-full md:w-7/12 p-8 flex flex-col gap-8 text-white justify-center text-2xl md:text-3xl text-center xl:text-left">
            <div className="flex flex-col gap-8 justify-center align-middle">
              <TextReg
                customClass={""}
                text={"• 40% INITIAL DEVELOPER BUY AND BURN"}
              />
              <TextReg customClass={""} text={"• 10% FREE AIRDROP"} />
              <TextReg
                customClass={""}
                text={"• 10% POST-RAYDIUM DEVELOPER BUY AND BURN"}
              />
              <TextReg customClass={""} text={"• 5% TEAM ALLOCATION"} />
              <TextReg customClass={""} text={"• 35% IN CIRCULATION"} />
            </div>
            <a
              onClick={onBuy}
              className="px-8 py-4 md:mt-0 mt-8 self-center w-full md:w-1/2 text-2xl cursor-pointer rounded-xl bg-[#313131] text-white text-center hover:scale-[1.02] transition-all duration-300"
            >
              BUY
            </a>
          </div>
          <div className="w-full md:w-5/12 flex p-4 justify-center items-center text-white">
            <img
              className="md:h-[50vh] object-contain hover:scale-[1.02] transition-all duration-300"
              src={image}
              alt="card"
            />
          </div>
        </div>
      </AppearWrapper>
    </div>
  );
};
