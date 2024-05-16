import React from "react";
import { useState } from "react";
import { Block1 } from "./blocks/block1/block1";
import { Block2 } from "./blocks/block2/block2";
import { Block3 } from "./blocks/block3/block3";
import { Block4 } from "./blocks/block4/block4";
import { Block5 } from "./blocks/block5/block5";
import { Banner } from "./blocks/banner";
import { FooterSection } from "../../common/footer";
import { Block6 } from "./blocks/block6/block6";

export const Landing = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner ? (
        <Banner close={setShowBanner} />
      ) : (
        <>
          <Block1 />
          <Block2 />
          <img src="./divider.webp" className="w-full" />
          <Block3 />
          <img src="./divider.webp" className="w-full" />
          <Block4 />
          <img src="./divider.webp" className="w-full" />
          <Block5 />
          <img src="./divider.webp" className="w-full" />
          <Block6 />
          <FooterSection disclaimer={true} />
        </>
      )}
      <img
        className="w-[60vw] lg:w-[20vw] fixed bottom-5 lg:bottom-10 left-1/2 lg:left-10 z-50 lg:translate-x-0 -translate-x-1/2"
        src={"/notl.png"}
        alt="notl"
      />
    </>
  );
};
