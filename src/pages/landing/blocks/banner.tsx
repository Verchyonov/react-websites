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
      className="w-full min-h-screen bg-[url(~/public/block1/bg.webp)] bg-black flex justify-center items-center"
    >
      <div className="flex flex-col items-center gap-12 w-11/12 min-h-screen p-16 md:w-6/12">
        <img src="./tarot.webp" />
        <img
          className={
            "w-12/12 md:w-6/12 my-auto cursor-pointer transition duration-500 ease-in-out transform float " +
            (isButtonEnabled ? "hover:scale-[1.05]" : " opacity-50")
          }
          onClick={() => {
            if (isButtonEnabled) {
              props.close();
            }
          }}
          src="./enter.webp"
        />
      </div>
    </div>
  );
};
