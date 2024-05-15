import CountdownTimer from "./timer/countdown-timer";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

export const AboutDrop = (props: any) => {
  const { days, hours, seconds, minutes } = props;
  return (
    <div className="flex flex-col xl:flex-row gap-3 xl:gap-12 w-full justify-between items-center p-4 md:p-10 z-50">
      <div className="select-none flex flex-row md:w-[60%] xl:w-[30%] w-full items-center justify-center gap-1 text-center px-2 py-3 lg:px-8 lg:py-7 border-2 rounded-xl text-white border-[#ebebeb]">
        {!props.isLoading ? (
          <CountdownTimer
            days={days}
            hours={hours}
            seconds={seconds}
            minutes={minutes}
          />
        ) : (
          <CircularProgress size={32} />
        )}
      </div>
      <div className="flex flex-col w-full md:w-[60%] xl:w-[33%] items-center xl:items-end justify-center px-1 py-2 md:px-8 lg:py-4 border-2 rounded-xl border-[#ebebeb] text-white text-sm md:text-lg">
        {!props.isLoading ? (
          <>
            <h1 className="font-bold text-center md:text-right">
              Airdrop enrolls: {props.dropInfo.numberOfAirdropUsers}/
              {props.dropInfo.numberOfMaxAirdropUsers}
            </h1>
            <h1 className="font-bold text-center md:text-right">
              Presale enrolls: {props.dropInfo.numberOfPresaleUsers}/
              {props.dropInfo.numberOfMaxPresaleUsers} | Total:{" "}
              {props.dropInfo.presaleSolAmount.toFixed(2)} SOL
            </h1>
          </>
        ) : (
          <div className="flex justify-start items-center self-center justify-self-center py-3">
            <CircularProgress size={32} />
          </div>
        )}
      </div>
    </div>
  );
};
