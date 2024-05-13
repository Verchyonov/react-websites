import { Bounce, toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

export const FormattedMessages = ({ messages }: { messages: string[] }) => (
  <div>
    {messages.map((msg, index) => (
      <p key={index} style={{ margin: 0 }}>
        {msg}
      </p>
    ))}
  </div>
);

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
  tockenTicker: string;
  dropPublicKey: string;
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
  return toast(<TransactionToast status={status} signature={signature} />, {
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
}: {
  status: string | undefined;
  signature: string | undefined;
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
        <div className="flex flex-row gap-4 justify-start items-center">
          <p>Transaction successful!</p>
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
