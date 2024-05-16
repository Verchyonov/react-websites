import React from "react";

type Props = {
  iconClass: string;
};

export const RaydiumIcon = (props: Props) => {
  return (
    <img src="/icons/raydium.svg" className={props.iconClass} alt="raydium" />
  );
};
