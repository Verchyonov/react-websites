import React from "react";
import ExpiredNotice from "./expired-notice";
import ShowCounter from "./show-counter";

const CountdownTimer = (props: any) => {
  const { days, hours, minutes, seconds } = props;
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <>
        <ShowCounter days={days} hours={hours} minutes={minutes} />
      </>
    );
  }
};

export default CountdownTimer;
