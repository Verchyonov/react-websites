import { PublicKey } from "@solana/web3.js";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useRef, useState } from "react";
import { saveAs } from "file-saver";
import {
  EnrollToast,
  sendEnrollNotification,
  sendErrorNotification,
  sendWarningNotification,
} from "../../utils";
import { ExampleModal } from "./example-modal";
import { useCompensateScrollbar } from "../../../../hooks/useCompensateScrollbar";
import { toast } from "react-toastify";

export const SignUpUpdate = (props: any) => {
  const [isSending, setIsSending] = useState(true);
  const [twitter, setTwitter] = useState("");
  const [twitterLink, setTwitterLink] = useState("");

  const recaptcha = useRef();
  const [wallet, setWallet] = useState("");

  useCompensateScrollbar();

  const clearForm = () => {
    setTwitter("");
    setTwitterLink("");

    setWallet("");
  };

  const onTwitterChange = (e: any) => {
    setTwitter(e.target.value);
  };
  const onTwitterLinkChange = (e: any) => {
    setTwitterLink(e.target.value);
  };

  const onWalletChange = (e: any) => {
    setWallet(e.target.value);
  };

  const downloadImage = (e: any) => {
    e.preventDefault();
    saveAs("./image.jpeg", "image.jpeg");
    saveAs("./image2.png", "image2.png");
    saveAs("./image3.png", "image3.png");
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
      sendErrorNotification("Invalid Solana wallet address");
      return;
    }

    const xUsername = twitter.replace(/\s/g, "").replace(/^@/, "");
    if (!/^@?[0-9a-zA-Z_]{1,15}$/.test(xUsername)) {
      sendErrorNotification("Invalid X username");
      return;
    }

    const url = new URL(twitterLink.replace(/\s/g, ""));
    const xPostLink = url.origin + url.pathname;
    if (
      !/^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/([a-zA-Z0-9_]{1,15})\/status\/([0-9]+)(\?.*)?$/.test(
        xPostLink
      )
    ) {
      sendErrorNotification("Wrong X Post link");
      return;
    }

    //@ts-ignore
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      sendErrorNotification("Please verify the reCAPTCHA!");
      return;
    }

    const toastId = sendEnrollNotification("pending");

    setIsSending(true);
    axios
      .post(process.env.REACT_APP_SERVER + "/drop/addUpdateAirdropUser", {
        user: {
          wallet: walletToSend,
          xUsername: xUsername,
          xPostLink: xPostLink,
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
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-2xl font-bold text-center">
        Sign up for airdrop / update record
      </p>
      <form className="">
        <div className="relative">
          <p className="text-lg">Solana Wallet</p>
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
          <p className="text-lg">Twitter @</p>
          <input
            value={twitter}
            onChange={onTwitterChange}
            type="text"
            id="twitter"
            className="block w-full p-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937]"
            placeholder="jeet_x_twitter"
            required
          />

          <p className="mb-4 mt-2 text-black">
            Acount should be Blue verified or 60 days old + 50 followers. You
            also must follow @{props.dropInfo.toXFollow}.
          </p>
        </div>
        <div className="relative">
          <p className="text-lg">Twitter Post link</p>
          <div className="w-full flex flex-row space-x-1 lg:space-x-4">
            <input
              value={twitterLink}
              onChange={onTwitterLinkChange}
              type="url"
              id="twitter-post"
              className="block w-[80%] p-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937]"
              placeholder="https://twitter.com/username/status/1234454265263"
              required
            />
            <ExampleModal />
            <button
              onClick={downloadImage}
              className="text-white text-center text-xs lg:text-lg flex justify-center items-center bg-[#1f2937] hover:bg-[#1f2937dc] focus:ring-2 focus:outline-none focus:ring-[#1f293785] hover:scale-[1.02] font-medium rounded-lg px-3 py-4 transition-transform duration-75 ease-in-out"
            >
              Images
            </button>
          </div>
          <p className="mb-4 mt-2 text-black">
            Your post must include tag to our account @
            {props.dropInfo.toXFollow}, our ticker ${props.dropInfo.tokenTicker}{" "}
            and some related image.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <button
            disabled={isSending}
            onClick={onSignUpUpdate}
            type="submit"
            className={
              "text-white w-full bg-[#1f2937]  focus:outline-none font-medium rounded-lg px-6 py-4 transition-transform duration-75 ease-in-out" +
              (isSending
                ? " opacity-70 cursor-not-allowed"
                : "hover:bg-[#1f2937dc] focus:ring-2 focus:ring-[#1f293785] hover:scale-[1.02]")
            }
          >
            Sign up / Update record
          </button>
          <ReCAPTCHA
            ref={recaptcha as any}
            sitekey={process.env.REACT_APP_SITE_KEY as string}
          />
        </div>

        <p className="text-center mt-4">
          <span className="font-bold uppercase">
            {props.dropInfo.airdropTokenAmount}% of tokens
          </span>{" "}
          from the Dev Buy will be distributed among{" "}
          {props.dropInfo.maxAirDropUsers} people equaly.
        </p>
      </form>
    </div>
  );
};
