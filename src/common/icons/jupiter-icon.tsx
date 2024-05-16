import React from "react";

type Props = {
  iconClass: string;
};

export const JupiterIcon = (props: Props) => {
  return (
    <img src="/icons/jupiter.svg" className={props.iconClass} alt="jupiter" />
  );
};
