import CountdownTimer from "./timer/countdown-timer";

export const AboutDrop = (props: any) => {
  const { days, hours, seconds, minutes } = props;
  return (
    <div className="flex flex-col xl:flex-row gap-3 xl:gap-12 w-full justify-between items-center p-4 md:p-10 z-50">
      <div className="flex flex-col items-center md:items-start gap-2">
        <h1 className="font-bold uppercase">Drop ends in:</h1>
        <CountdownTimer
          days={days}
          hours={hours}
          seconds={seconds}
          minutes={minutes}
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-end">
        <h1 className="text-xl font-bold text-center md:text-right">
          Airdrop signups: {props.dropInfo.numberOfAirdropUsers}/
          {props.dropInfo.numberOfMaxAirdropUsers}
        </h1>
        <h1 className="text-xl font-bold text-center md:text-right">
          Presale signups: {props.dropInfo.numberOfPresaleUsers}/
          {props.dropInfo.numberOfMaxPresaleUsers}
        </h1>
        <h1 className="text-xl font-bold text-center md:text-right">
          Presale SOL: {props.dropInfo.presaleSolAmount.toFixed(1)}
        </h1>
      </div>
    </div>
  );
};
