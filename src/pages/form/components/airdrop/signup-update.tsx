import { PublicKey } from "@solana/web3.js";
import axios from "axios";
import { useState } from "react";
import {
  EnrollToast,
  sendEnrollNotification,
  sendErrorNotification,
  sendSuccessNotification,
  sendWarningNotification,
} from "../../utils";
import { ExampleModal } from "./example-modal";
import { useCompensateScrollbar } from "../../../../hooks/useCompensateScrollbar";
import { toast } from "react-toastify";

export const SignUpUpdate = (props: any) => {
  const [twitter, setTwitter] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [telegram, setTelegram] = useState("");
  const [wallet, setWallet] = useState("");

  useCompensateScrollbar();

  const clearForm = () => {
    setTwitter("");
    setTwitterLink("");
    setTelegram("");
    setWallet("");
  };

  const onTwitterChange = (e: any) => {
    setTwitter(e.target.value);
  };
  const onTwitterLinkChange = (e: any) => {
    setTwitterLink(e.target.value);
  };

  const onTelegramChange = (e: any) => {
    setTelegram(e.target.value);
  };

  const onWalletChange = (e: any) => {
    setWallet(e.target.value);
  };

  const onSignUpUpdate = (e: any) => {
    e.preventDefault();
    const walletToSend = wallet.replace(/\s/g, "");
    let validWallet = true;
    try {
      new PublicKey(wallet);
    } catch (e) {
      validWallet = false;
    }
    if (wallet.length < 34 || wallet.length > 44 || !validWallet) {
      sendErrorNotification("Wrong solana wallet");
      return;
    }

    const twitterToSend = twitter.replace(/\s/g, "").replace(/^@/, "");
    if (!/^@?[0-9a-zA-Z_]{1,15}$/.test(twitterToSend)) {
      sendErrorNotification("Wrong twitter account profile");
      return;
    }

    const twitterLinkToSend = twitterLink.replace(/\s/g, "");
    if (
      !/^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/[a-zA-Z0-9_]{1,15}\/status\/[0-9]+$/.test(
        twitterLinkToSend
      )
    ) {
      sendErrorNotification("Wrong twitter link");
      return;
    }

    const telegramToSend = telegram.replace(/\s/g, "").replace(/^@/, "");
    if (!/^@?[0-9a-zA-Z_]{5,32}$/.test(telegramToSend)) {
      sendErrorNotification("Wrong telegram account");
      return;
    }

    const toastId = sendEnrollNotification("pending");

    axios
      .post(process.env.REACT_APP_SERVER + "/drop/addUpdateAirdropUser", {
        user: {
          wallet: walletToSend,
          xUsername: twitterToSend,
          xPostLink: twitterLinkToSend,
          tgUsername: telegramToSend,
        },
      })
      .then((response) => {
        if (response.data.isCreated) {
          toast.update(toastId, {
            render: <EnrollToast status="confirmed" text="You've enrolled" />,
            autoClose: 7000,
            closeOnClick: true,
            draggable: true,
          });
        } else if (response.data.isUpdated) {
          toast.update(toastId, {
            render: <EnrollToast status="confirmed" text="Record updated" />,
            autoClose: 7000,
            closeOnClick: true,
            draggable: true,
          });
        }
        clearForm();
      })
      .catch((error) => {
        toast.dismiss(toastId);
        if (error.response.data.errorMsg) {
          sendWarningNotification(error.response.data.errorMsg);
          return;
        }
        sendErrorNotification("Unhandled error happened. Let dev know!");
      })
      .finally(() => {});
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-lg font-bold text-center">
        Sign up for airdrop / update record
      </p>
      <form className="">
        <div className="relative">
          <p>Solana Wallet</p>
          <input
            value={wallet}
            onChange={onWalletChange}
            type="text"
            id="wallet"
            className="block w-full p-4 mb-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937]"
            placeholder="G7aCnwX3TEqcsBhwLoeYxhYnzHWPpjPbnodk6cVZkw5A"
            required
          />
        </div>
        <div className="relative">
          <p>Twitter @</p>
          <input
            value={twitter}
            onChange={onTwitterChange}
            type="text"
            id="twitter"
            className="block w-full p-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937]"
            placeholder="jeet_x_twitter"
            required
          />
          <p className="mb-4 text-xs text-slate-400">
            You must follow our account @{props.dropInfo.toXFollow}
          </p>
        </div>
        <div className="relative">
          <p>Twitter Post link</p>
          <input
            value={twitterLink}
            onChange={onTwitterLinkChange}
            type="url"
            id="twitter-post"
            className="block w-full p-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937]"
            placeholder="https://twitter.com/username/status/1234454265263"
            required
          />
          <p className="mb-4 text-xs text-slate-400">
            Your post must include tag to our account @
            {props.dropInfo.toXFollow} and our ticker $
            {props.dropInfo.tockenTicker}
            {props.dropInfo.tokenTicker}
          </p>
        </div>
        <div className="relative">
          <p>Telegram @</p>
          <input
            value={telegram}
            onChange={onTelegramChange}
            type="text"
            id="tg"
            className="block w-full p-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937]"
            placeholder="jeet_tg"
            required
          />
          <p className="mb-4 text-xs text-slate-400">
            You need to send at least one message in @
            {props.dropInfo.toTGFollow} to confirm your Telegram account.
          </p>
        </div>

        <div className="w-full">
          <button
            onClick={onSignUpUpdate}
            type="submit"
            className="text-white w-full bg-[#1f2937] hover:bg-[#1f2937dc] focus:ring-2 focus:outline-none focus:ring-[#1f293785] hover:scale-[1.02] font-medium rounded-lg px-6 py-4 transition-transform duration-75 ease-in-out"
          >
            Sign up / Update record
          </button>
        </div>
        <p className="text-center mt-4">
          <span className="font-bold uppercase">
            {props.dropInfo.airdropTokenAmount / 10 ** 6} million tokens
          </span>{" "}
          will be distributed among {props.dropInfo.maxAirDropUsers} people
          equaly.
        </p>
      </form>
      <div className="relative flex mb-4 justify-between w-full flex-col gap-2 items-center">
        <ExampleModal />
      </div>
    </div>
  );
};
