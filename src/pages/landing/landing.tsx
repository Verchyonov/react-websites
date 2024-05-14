import React from "react";
import { useState } from "react";
import { Block1 } from "./blocks/block1/block1";
import { Block2 } from "./blocks/block2/block2";
import { Block3 } from "./blocks/block3/block3";
import { Block4 } from "./blocks/block4/block4";
import { Block7 } from "./blocks/block7/block7";
import { Banner } from "./blocks/banner";
import { FooterSection } from "../../common/footer";

export const Landing = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* {showBanner ? (
        <Banner close={setShowBanner} />
      ) : ( */}
      <>
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />

        <Block7 />
        <FooterSection />
      </>
      {/* )} */}
    </>
  );
};
