import DateTimeDisplay from "./date-time-display";
import React from "react";

const ShowCounter = (props: any) => {
  return (
    <>
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
    </>
  );
};

export default ShowCounter;
