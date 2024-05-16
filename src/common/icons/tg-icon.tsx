import React from "react";

type Props = {
  iconClass: string;
};

export const TgIcon = (props: Props) => {
  return <img src="/icons/tg.svg" className={props.iconClass} alt="tg" />;
};
