import DateTimeDisplay from "./date-time-display";

const ShowCounter = (props: any) => {
  return (
    <div className="flex flex-row items-center justify-center px-4 py-3 md:px-8 md:py-6 border-2 rounded-xl border-[#ebebeb]">
      <DateTimeDisplay
        value={props.days}
        type={props.days > 1 || props.days === 0 ? "Days" : "Day"}
        isDanger={props.days <= 3}
      />
      <p>:</p>
      <DateTimeDisplay
        value={props.hours}
        type={props.hours > 1 || props.hours === 0 ? "Hours" : "Hour"}
        isDanger={false}
      />
      <p>:</p>
      <DateTimeDisplay
        value={props.minutes}
        type={props.minutes > 1 || props.minutes === 0 ? "Mins" : "Min"}
        isDanger={false}
      />
    </div>
  );
};

export default ShowCounter;
