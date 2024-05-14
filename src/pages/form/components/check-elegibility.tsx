import axios from "axios";
import { useState } from "react";
import {
  FormattedMessages,
  sendErrorNotification,
  sendSuccessNotification,
  sendWarningNotification,
} from "../utils";

export const SERVER = process.env.SERVER;

export const CheckElegibility = () => {
  const [wallet, setWallet] = useState("");

  const onWalletChange = (e: any) => {
    setWallet(e.target.value);
  };

  const onCheck = (e: any) => {
    e.preventDefault();

    const walletToSend = wallet.replace(/\s/g, "");
    if (wallet.length < 34 || wallet.length > 44) {
      sendErrorNotification("Wrong solana wallet");
      return;
    }

    axios
      .post(process.env.REACT_APP_SERVER + "/drop/checkUserByWallet", {
        wallet: walletToSend,
      })
      .then((response) => {
        const { isValidWallet, isAirdropEnrolled, errorMsgs } = response.data;
        if (isValidWallet && isAirdropEnrolled) {
          let msgs: string[] = [];
          if (isAirdropEnrolled) msgs.push(`Airdrop enrolled`);
          let formattedMessages = <FormattedMessages messages={msgs} />;
          sendSuccessNotification(formattedMessages);
        } else {
          let formattedMessages = (
            <FormattedMessages messages={errorMsgs.slice(0, 1)} />
          );
          sendWarningNotification(formattedMessages);
        }
      })
      .catch((error) => {
        sendErrorNotification("Unhandled error:" + error);
      });
  };

  return (
    <div className="flex flex-col gap-2 w-full justify-center mt-4 p-4 md:p-10">
      <p className="text-2xl font-bold text-center">Check account enrollment</p>
      <form onSubmit={onCheck}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-black sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 mt-[20px] text-black dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <p className="text-lg">Solana Wallet</p>
          <input
            value={wallet}
            onChange={onWalletChange}
            type="text"
            id="solana-check-wallet"
            className="block w-full p-4 ps-10 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937]"
            placeholder="G7aCnwX3TEqcsBhwLoeYxhYnzHWPpjPbnodk6cVZkw5A"
            required
          />
          <button
            onClick={onCheck}
            className="text-white absolute end-2.5 bottom-2.5 bg-[#1f2937] hover:bg-[#1f2937dc] focus:ring-4 focus:outline-none focus:ring-[#1f2937] font-medium rounded-lg text-sm px-4 py-2"
          >
            Validate
          </button>
        </div>
      </form>
    </div>
  );
};
