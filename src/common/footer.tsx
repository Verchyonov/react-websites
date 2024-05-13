import { TgIcon } from "./icons/tg-icon";
import { XIcon } from "./icons/x-icon";
import { TELEGRAM_DEV, TWITTER_DEV } from "./urls";

const iconClass = "w-6 h-6 fill-white";

export const FooterSection = () => {
  return (
    <footer className="px-8 pt-1 text-center bg-[#1f2937] text-white backdrop-blur transition-colors duration-500">
      <p className="flex flex-row items-center justify-center gap-1">
        <span className="text-sm font-bold sm:text-xl ">$ &copy; 2024</span>
        <span className="inline-flex">
          <a
            href={TWITTER_DEV}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[2px] rounded p-2 font-bold"
          >
            <XIcon iconClass={iconClass} />
          </a>
          <a
            href={TELEGRAM_DEV}
            rel="noopener noreferrer"
            target="_blank"
            className="mx-[2px] rounded p-2 font-bold"
          >
            <TgIcon iconClass={iconClass} />
          </a>
        </span>
      </p>
      <p className="px-2 pb-2 md:text-sm text-xs">
        $ is a memecoin with no intrinsic value, and is not a investment and
        simply a community/culture token similar to $. No Promises, No Utility,
        Purely For Entertainment Purposes
      </p>
    </footer>
  );
};
