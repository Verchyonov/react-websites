import React from "react";

type Props = {
  iconClass: string;
};

export const DexscreenerIcon = (props: Props) => {
  return (
    <img src="/icons/dex.svg" className={props.iconClass} alt="dexscreener" />
  );
};
