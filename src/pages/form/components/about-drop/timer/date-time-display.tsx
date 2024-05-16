import React from "react";

const DateTimeDisplay = (props: any) => {
  return (
    <div
      className={
        "px-3 flex items-center flex-row gap-1 font-bold " +
        (props.isDanger ? "text-red-500" : "text-white")
      }
    >
      <p className="text-xl md:text-3xl">{props.value}</p>
      <span className="uppercase md:text-3xl">{props.type}</span>
    </div>
  );
};

export default DateTimeDisplay;
