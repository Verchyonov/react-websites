import React from "react";

const DateTimeDisplay = (props: any) => {
  return (
    <div
      className={
        "px-3 flex items-center flex-row gap-1 font-bold " +
        (props.isDanger ? "text-red-600" : "text-black")
      }
    >
      <p className="text-xl md:text-2xl">{props.value}</p>
      <span className="uppercase text-xl md:text-2xl">{props.type}</span>
    </div>
  );
};

export default DateTimeDisplay;
