import React, { useState } from "react";
import axios from "axios";
import {
  FormattedMessages,
  sendErrorNotification,
  sendSuccessNotification,
  sendWarningNotification,
} from "../utils";
import SearchIcon from "@mui/icons-material/Search";

export const SERVER = process.env.REACT_APP_SERVER;

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
      .post(process.env.REACT_APP_SERVER + "/drop/check", {
        wallet: walletToSend,
      })
      .then((response) => {
        const {
          isValidWallet,
          isPresaleEnrolled,
          isAirdropEnrolled,
          errorMsgs,
          presaleAmount,
        } = response.data;
        if (isValidWallet && (isPresaleEnrolled || isAirdropEnrolled)) {
          let msgs: string[] = [];
          if (isAirdropEnrolled) msgs.push(`Airdrop enrolled`);
          if (isPresaleEnrolled)
            msgs.push(`Presale enrolled with ${presaleAmount.toFixed(2)} SOL`);
          let formattedMessages = <FormattedMessages messages={msgs} />;
          sendSuccessNotification(formattedMessages);
        } else {
          let formattedMessages = <FormattedMessages messages={errorMsgs} />;
          sendWarningNotification(formattedMessages);
        }
      })
      .catch((error) => {
        sendErrorNotification("Unhandled error:" + error);
      });
  };

  return (
    <div className="flex flex-col gap-2 w-full justify-center mt-4 p-4 md:p-10">
      <p className="text-2xl font-bold text-center text-white">
        Check account enrollment
      </p>
      <form onSubmit={onCheck}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-black sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 top-[1.8rem] start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon color="action" />
          </div>
          <p className="text-lg text-white">Solana Wallet</p>
          <input
            value={wallet}
            onChange={onWalletChange}
            type="text"
            id="solana-check-wallet"
            className="block w-full p-4 ps-10 pe-[6.5rem] lg:pe-0 text-sm text-white border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937]"
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
