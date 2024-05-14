import { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useCompensateScrollbar } from "../../../../hooks/useCompensateScrollbar";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  TransactionToast,
  sendErrorNotification,
  sendTxNotification,
  sendWarningNotification,
} from "../../utils";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { WalletSendTransactionError } from "@solana/wallet-adapter-base";
import { Id, toast } from "react-toastify";
import axios from "axios";

export const PresaleForm = (props: any) => {
  useCompensateScrollbar();
  const [solAmount, setSolAmount] = useState<number>(0.1);
  const [solBalance, setSolBalance] = useState(0.0);
  const [isSending, setIsSending] = useState(true);

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  useEffect(() => {
    if (!publicKey) {
      return;
    }
    connection.getBalance(publicKey).then((balance) => {
      setSolBalance(balance / LAMPORTS_PER_SOL);
    });
  }, [publicKey, connection, sendTransaction]);

  const clearForm = () => {
    setSolAmount(Number(props.dropInfo.presaleMinSolAmount));
  };

  const onSolAmountChange = (e: any) => {
    setSolAmount(Number(e.target.value));
  };

  const onPresale = async (e: any) => {
    e.preventDefault();
    let toastId: Id = "";

    if (!publicKey) {
      sendErrorNotification("Please, connect the wallet first");
      return;
    }

    if (
      solAmount < props.dropInfo.presaleMinSolAmount ||
      solAmount > props.dropInfo.presaleMaxSolAmount
    ) {
      sendErrorNotification("Wrong amount of SOL");
      return;
    }

    try {
      setIsSending(true);
      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(props.dropInfo.dropPublicKey),
          lamports: solAmount * LAMPORTS_PER_SOL,
        })
      );
      const signature = await sendTransaction(tx, connection);

      toastId = sendTxNotification("pending", signature);

      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();
      await connection.confirmTransaction(
        {
          blockhash,
          lastValidBlockHeight,
          signature,
        },
        "processed"
      );

      axios
        .post(process.env.REACT_APP_SERVER + "/drop/addUpdatePresaleUser", {
          user: {
            wallet: publicKey,
            solAmount: solAmount,
            txEnroll: signature,
          },
        })
        .then((response) => {
          if (response.data.isCreated) {
            toast.update(toastId, {
              render: (
                <TransactionToast
                  status="confirmed"
                  signature={signature}
                  text="You've enrolled"
                />
              ),
              autoClose: 7000,
              closeOnClick: true,
              draggable: true,
            });
          } else if (response.data.isUpdated) {
            toast.update(toastId, {
              render: (
                <TransactionToast
                  status="confirmed"
                  signature={signature}
                  text="Record updated"
                />
              ),
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
    } catch (error) {
      if (
        error instanceof WalletSendTransactionError &&
        error.message.includes("User rejected")
      ) {
        sendWarningNotification("Transaction was rejected by the user.");
      } else {
        toast.dismiss(toastId);
        sendErrorNotification("Unhandled error happened. Let dev know!.");
      }
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full justify-between">
      <p className="text-lg font-bold text-center">Sign up for presale</p>
      <form className="">
        <div className="relative flex mb-4 justify-between w-full flex-col gap-2 items-center">
          <WalletMultiButton />
          <p className="text-xs text-slate-400">
            Your balance: {solBalance.toFixed(2)} SOL
          </p>
        </div>
        <div className="relative">
          <p>Solana Amount</p>
          <input
            value={solAmount}
            onChange={onSolAmountChange}
            type="number"
            id="sol-amount"
            className="block w-full p-4 text-sm text-black border border-black rounded-lg bg-white"
            placeholder={props.dropInfo.presaleMinSolAmount}
            required
          />
          <p className="mb-4 text-xs text-slate-400">
            Min: {props.dropInfo.presaleMinSolAmount} SOL, Max:{" "}
            {props.dropInfo.presaleMaxSolAmount} SOL
          </p>
        </div>
        <div className="w-full">
          <button
            disabled={isSending}
            onClick={onPresale}
            type="submit"
            className={
              "text-white w-full bg-[#1f2937]  focus:outline-none font-medium rounded-lg px-6 py-4 transition-transform duration-75 ease-in-out" +
              (isSending
                ? " opacity-70 cursor-not-allowed"
                : "hover:bg-[#1f2937dc] focus:ring-2 focus:ring-[#1f293785] hover:scale-[1.02]")
            }
          >
            Buy Presale
          </button>
        </div>
        <p className="text-center mt-4">
          <span className="font-bold uppercase">
            {props.dropInfo.presaleTokenAmount}% of tokens
          </span>{" "}
          from the Dev Buy will be will be distributed among people depending on
          the amount of SOL sent.
        </p>
      </form>
    </div>
  );
};
