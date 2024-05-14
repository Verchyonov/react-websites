import React from "react";

export const TextReg = (props: any) => {
  return <p className={"text-2xl  " + props.customClass}>{props.text}</p>;
};
