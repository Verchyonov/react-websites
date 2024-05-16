import { PublicKey } from "@solana/web3.js";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";
import {
  EnrollToast,
  InputStatus,
  checkWallet,
  checkXPostLink,
  checkXUsername,
  sanitizeWallet,
  sanitizeXPostLink,
  sanitizeXUsername,
  sendEnrollNotification,
  sendErrorNotification,
  sendWarningNotification,
} from "../../utils";
import { ExampleModal } from "./example-modal";
import { useCompensateScrollbar } from "../../../../hooks/useCompensateScrollbar";
import { toast } from "react-toastify";

export const SignUpUpdate = (props: any) => {
  useCompensateScrollbar();

  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidWallet, setIsValidWallet] = useState(false);
  const [isValidXUsername, setIsValidXUsername] = useState(false);
  const [isValidXPostLink, setIsValidXPostLink] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [xUser, setXUser] = useState("");
  const [xPost, setXPost] = useState("");
  const [wallet, setWallet] = useState("");

  const recaptcha = useRef();

  const clearForm = () => {
    setXUser("");
    setXPost("");
    setWallet("");
  };

  useEffect(() => {
    setIsValid(isValidWallet && isValidXUsername && isValidXPostLink);
  }, [isValidWallet, isValidXPostLink, isValidXUsername]);

  useEffect(() => {
    setIsValidWallet(false);
    const value = sanitizeWallet(wallet);
    if (!checkWallet(value)) return;

    const timeOutId = setTimeout(() => {
      checkFieldExists({ wallet: value }, setIsValidWallet, "Wallet");
    }, 800);
    return () => clearTimeout(timeOutId);
  }, [wallet]);

  useEffect(() => {
    setIsValidXUsername(false);
    const value = sanitizeXUsername(xUser);
    if (!checkXUsername(value)) return;

    const timeOutId = setTimeout(() => {
      checkFieldExists({ xUsername: value }, setIsValidXUsername, "X Username");
    }, 800);
    return () => clearTimeout(timeOutId);
  }, [xUser]);

  useEffect(() => {
    setIsValidXPostLink(false);
    const value = sanitizeXPostLink(xPost);
    if (!checkXPostLink(value, xUser)) return;

    const timeOutId = setTimeout(() => {
      checkFieldExists(
        { xPostLink: value },
        setIsValidXPostLink,
        "X Post Link"
      );
    }, 800);
    return () => clearTimeout(timeOutId);
  }, [xPost]);

  const checkFieldExists = (
    field: { [key: string]: string },
    setState: (state: boolean) => void,
    fieldName: string
  ) => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_SERVER}/drop/airdrop/user`, {
        params: {
          [Object.keys(field)[0]]: Object.values(field)[0],
        },
      })
      .then((response) => {
        const exists = response.data[fieldName];
        if (exists) {
          setState(false);
          sendWarningNotification(`${fieldName} already registered`);
        } else {
          setState(true);
        }
      })
      .catch((error) => {
        sendErrorNotification("Unhandled error happened. Let dev know!");
        setState(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const downloadImage = (e: any) => {
    e.preventDefault();
    saveAs("./image.jpeg", "image.jpeg");
    saveAs("./image2.png", "image2.png");
    saveAs("./image3.png", "image3.png");
  };

  const onSignUpUpdate = (e: any) => {
    e.preventDefault();

    const walletToSend = sanitizeWallet(wallet);
    if (!checkWallet(walletToSend)) {
      sendErrorNotification("Invalid Solana wallet address");
      return;
    }

    const xUserToSend = sanitizeXUsername(xUser);
    if (!checkXUsername(xUserToSend)) {
      sendErrorNotification("Invalid X username");
      return;
    }

    const xPostToSend = sanitizeXPostLink(xPost);
    if (!checkXPostLink(xPostToSend, xUserToSend)) {
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
      .post(process.env.REACT_APP_SERVER + "/drop/aidrop/add", {
        user: {
          wallet: walletToSend,
          xUsername: xUserToSend,
          xPostLink: xPostToSend,
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
    <div className="flex flex-col gap-2 w-full text-white">
      <p className="text-3xl font-bold text-center">Sign up for airdrop</p>
      <form className="">
        <div className="relative">
          <p className="text-lg">Solana Wallet</p>
          <input
            value={wallet}
            onChange={(event) => setWallet(event.target.value)}
            type="text"
            id="wallet"
            className="block w-full p-4 pe-[3rem] lg:pe-0 mb-6 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937]"
            placeholder="G7aCnwX3TEqcsBhwLoeYxhYnzHWPpjPbnodk6cVZkw5A"
            required
          />
          <InputStatus
            style="end-0.5 lg:end-2.5 top-[2.35rem]"
            isValid={isValidWallet}
            isLoading={isLoading}
          />
        </div>
        <div className="relative">
          <p className="text-lg">Twitter Username</p>
          <span>
            <input
              value={xUser}
              onChange={(event) => setXUser(event.target.value)}
              disabled={!isValidWallet}
              type="text"
              id="twitter"
              className={
                "block w-full p-4 pe-[3rem] lg:pe-0 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937] " +
                (!isValidWallet ? "cursor-not-allowed blur-[1px]" : "")
              }
              placeholder="jeet_x_twitter"
              required
            />
            <InputStatus
              style={
                "end-0.5 lg:end-2.5 top-[2.35rem] " +
                (!isValidWallet ? "cursor-not-allowed blur-[1px]" : "")
              }
              isValid={isValidXUsername}
              isLoading={isLoading}
            />
          </span>
          <p className="mb-4 mt-2 text-slate-400">
            Acount should be Blue verified | 60 days old with 50 followers. You
            also must follow{" "}
            <a
              href={`https://twitter.com/${props.dropInfo.toXFollow}`}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-blue-700"
            >
              @{props.dropInfo.toXFollow}
            </a>
            .
          </p>
        </div>
        <div className="relative">
          <p className="text-lg">Twitter Post link</p>
          <div className="w-full flex flex-col lg:flex-row gap-1 lg:gap-2">
            <input
              value={xPost}
              disabled={!isValidXUsername || !isValidWallet}
              onChange={(event) => setXPost(event.target.value)}
              type="url"
              id="twitter-post"
              className={
                "block w-full p-4 pe-[3rem] lg:pe-0 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937] " +
                (!isValidXUsername || !isValidWallet
                  ? "cursor-not-allowed blur-[1px]"
                  : "")
              }
              placeholder="https://twitter.com/username/status/1234454265263"
              required
            />
            <InputStatus
              style={
                "end-0.5 lg:end-[13.2rem] top-[2.35rem] " +
                (!isValidXUsername || !isValidWallet
                  ? "cursor-not-allowed blur-[1px]"
                  : "")
              }
              isValid={isValidXPostLink}
              isLoading={isLoading}
            />
            <div className="flex flex-row gap-1 self-center w-full lg:w-auto">
              <ExampleModal />
              <button
                onClick={downloadImage}
                className="text-white text-center w-1/2 lg:text-lg flex justify-center items-center bg-[#1f2937] hover:bg-[#1f2937dc] focus:ring-2 focus:outline-none focus:ring-[#1f293785] hover:scale-[1.02] font-medium rounded-lg px-4 py-3 transition-transform duration-75 ease-in-out cursor-pointer"
              >
                Images
              </button>
            </div>
          </div>
          <p className="mb-4 mt-2 text-slate-400">
            Your post must include tag to our account @
            <span className="font-bold">{props.dropInfo.toXFollow}</span>, our
            ticker{" "}
            <span className="font-bold">${props.dropInfo.tokenTicker}</span> and
            some related image.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <button
            disabled={isSending || !isValid}
            onClick={onSignUpUpdate}
            type="submit"
            className={
              "text-white w-full bg-[#1f2937]  focus:outline-none font-medium rounded-lg px-6 py-4 transition-transform duration-75 ease-in-out uppercase cursor-pointer " +
              (isSending || !isValid
                ? " opacity-50 cursor-not-allowed"
                : "hover:bg-[#2f4560dc] focus:ring-2 focus:ring-[#1f293785] hover:scale-[1.02] cursor-pointer")
            }
          >
            Sign up for Airdrop
          </button>
          <ReCAPTCHA
            className="min-h-[78px] lg:self-start self-center"
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
