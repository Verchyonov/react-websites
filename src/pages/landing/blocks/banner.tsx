import React, { useEffect, useState } from "react";

export const Banner = (props: any) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // Initialize button state as disabled

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsButtonEnabled(true);
    }, 1 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id={"banner"}
      className="w-full min-h-screen bg-black flex justify-center items-center"
    >
      <div className="flex flex-col items-center gap-12 w-11/12 min-h-screen p-16 md:w-6/12">
        <img src="./tarot.png" />
        <img
          className="w-12/12 md:w-6/12 my-auto cursor-pointer"
          onClick={() => {
            if (isButtonEnabled) {
              props.close();
            }
          }}
          src="./enter.png"
        />
      </div>
    </div>
  );
};
