import React from "react";

export const TextReg = (props: any) => {
  return <p className={" " + props.customClass}>{props.text}</p>;
};
