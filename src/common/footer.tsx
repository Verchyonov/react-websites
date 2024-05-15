import React from "react";
import { TgIcon } from "./icons/tg-icon";
import { XIcon } from "./icons/x-icon";
import { TELEGRAM, TWITTER } from "./urls";

const iconClass = "w-6 h-6 fill-white";

export const FooterSection = (props: any) => {
  return (
    <>
      <footer
        className={
          "px-8 pt-1 text-center text-white backdrop-blur transition-colors duration-500 " +
          props.customClass
        }
      >
        <p className="flex flex-row items-center justify-center gap-1">
          <span className="text-sm font-bold sm:text-xl ">
            $TOME &copy; 2024
          </span>
          <span className="inline-flex">
            <a
              href={TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-[2px] rounded p-2 font-bold"
            >
              <XIcon iconClass={iconClass} />
            </a>
            <a
              href={TELEGRAM}
              rel="noopener noreferrer"
              target="_blank"
              className="mx-[2px] rounded p-2 font-bold"
            >
              <TgIcon iconClass={iconClass} />
            </a>
          </span>
        </p>
        <p
          style={{ wordSpacing: "1px" }}
          className="px-2 pb-2 md:text-sm text-xs"
        >
          $TOME is a memecoin with no intrinsic value, and is not a investment
          and simply a community/culture token similar to $TOME. No Promises, No
          Utility, Purely For Entertainment Purposes
        </p>
      </footer>
    </>
  );
};
