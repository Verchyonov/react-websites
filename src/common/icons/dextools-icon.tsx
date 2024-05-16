import React from "react";

type Props = {
  iconClass: string;
};

export const DextoolsIcon = (props: Props) => {
  return (
    <img src="/icons/dextool.svg" className={props.iconClass} alt="dextools" />
  );
};
