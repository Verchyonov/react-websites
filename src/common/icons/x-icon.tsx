import React from "react";

type Props = {
  iconClass: string;
};

export const XIcon = (props: Props) => {
  return <img src="/icons/x.svg" className={props.iconClass} alt="x" />;
};
