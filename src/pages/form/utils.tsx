import { Bounce, toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { PublicKey } from "@solana/web3.js";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import React from "react";

export const FormattedMessages = ({ messages }: { messages: string[] }) => (
  <div>
    {messages.map((msg, index) => (
      <p key={index} style={{ margin: 0 }}>
        {msg}
      </p>
    ))}
  </div>
);

export const checkWallet = (wallet: string) => {
  let validWallet = true;
  try {
    new PublicKey(wallet);
  } catch (e) {
    validWallet = false;
  }
  return wallet.length >= 34 && wallet.length <= 44 && validWallet;
};

export const checkXUsername = (username: string) => {
  return /^@?[0-9a-zA-Z_]{1,15}$/.test(username);
};

export const checkXPostLink = (link: string, username: string) => {
  const regex =
    /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/([a-zA-Z0-9_]{1,15})\/status\/([0-9]+)(\?.*)?$/;
  return (
    regex.test(link) && link.toLowerCase().includes(username.toLowerCase())
  );
};

export const sanitizeWallet = (wallet: string) => {
  return wallet.replace(/\s/g, "");
};

export const sanitizeXUsername = (username: string) => {
  return username.replace(/\s/g, "").replace(/^@/, "");
};

export const sanitizeXPostLink = (link: string) => {
  if (!link) return "";
  const url = new URL(link.replace(/\s/g, ""));
  return url.origin + url.pathname;
};

export interface DropInfo {
  numberOfMaxAirdropUsers: number;
  numberOfMaxPresaleUsers: number;
  numberOfAirdropUsers: number;
  numberOfPresaleUsers: number;
  deadline: number;
  toXFollow: string;
  toTGFollow: string;
  presaleMaxSolAmount: number;
  presaleMinSolAmount: number;
  presaleSolAmount: number;
  presaleTokenAmount: number;
  airdropTokenAmount: number;
  tokenTicker: string;
  dropPublicKey: string;
  xFollowers: number;
  xAge: number;
}

export const sendSuccessNotification = (text: string | JSX.Element) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

export const sendWarningNotification = (text: string | JSX.Element) => {
  toast.warning(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

export const sendErrorNotification = (text: string | JSX.Element) => {
  toast.error(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

export const sendEnrollNotification = (status: string | undefined) => {
  return toast(<EnrollToast status={status} text={undefined} />, {
    position: "top-right",
    hideProgressBar: false,
    pauseOnHover: true,
    autoClose: false,
    closeOnClick: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

export const sendTxNotification = (
  status: string | undefined,
  signature: string | undefined
) => {
  return toast(
    <TransactionToast status={status} signature={signature} text={undefined} />,
    {
      position: "top-right",
      hideProgressBar: false,
      pauseOnHover: true,
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    }
  );
};

export function EnrollToast({
  status,
  text,
}: {
  status: string | undefined;
  text: string | undefined;
}) {
  return (
    <div>
      {status === "pending" && (
        <div className="flex flex-row gap-4 justify-start items-center">
          <CircularProgress size={24} />
          <p>Processing enrollment...</p>
        </div>
      )}
      {status === "confirmed" && (
        <div className="flex flex-row gap-4 justify-start items-center">
          <p>{text ? text : "Success"}</p>
        </div>
      )}
    </div>
  );
}

export function TransactionToast({
  status,
  signature,
  text,
}: {
  status: string | undefined;
  signature: string | undefined;
  text: string | undefined;
}) {
  const getTxUrl = () => `https://solscan.io/tx/${signature}`;

  return (
    <div>
      {status === "pending" && (
        <div className="flex flex-row gap-4 justify-start items-center">
          <CircularProgress size={24} />
          <p>Processing transaction...</p>
        </div>
      )}
      {status === "confirmed" && (
        <div className="flex flex-row gap-4 justify-between items-center">
          <p>{text ? text : "Success"}</p>
          <button
            className="px-2 py-1 rounded-lg border-2 border-white"
            onClick={() => window.open(getTxUrl(), "_blank")}
          >
            View TX
          </button>
        </div>
      )}
    </div>
  );
}

export function InputStatus({
  isLoading,
  isValid,
  style,
}: {
  isLoading: boolean;
  isValid: boolean;
  style: string;
}) {
  return (
    <>
      {isLoading ? (
        <div className={"absolute font-medium px-4 py-1 " + style}>
          <CircularProgress />
        </div>
      ) : !isValid ? (
        <div className={"absolute text-red-500 px-4 py-1 " + style}>
          <CloseIcon />
        </div>
      ) : isValid ? (
        <div
          className={
            "absolute flex items-center text-green-500 px-4 py-1 " + style
          }
        >
          <DoneIcon />
        </div>
      ) : null}
    </>
  );
}
