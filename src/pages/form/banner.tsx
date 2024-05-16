import { TextReg } from "../../common/text/text-reg";
import React, { useEffect, useMemo, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import type { DialogProps } from "@mui/material";

export const Banner = (props: any) => {
  const isMobile = window.innerWidth < 700 ? true : false;

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    width: isMobile ? "90vw" : "auto",
    bgcolor: "#1B1D28",
    border: "6px solid white",
    color: "text.primary",
    borderRadius: 5,
    boxShadow: 24,
    outline: "none",
    p: 2,
  };

  const [timeLeft, setTimeLeft] = useState<any>(15);
  const [open, setOpen] = useState(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsButtonEnabled(true);
      setTimeLeft(0);
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  const handleClose: DialogProps["onClose"] = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    if (!isButtonEnabled) return;
    setOpen(false);
  };

  return (
    <>
      <Modal
        className={!open ? "pointer-events-none" : ""}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex flex-col items-center h-fit p-4 w-full md:gap-8 text-white text-center form uppercase justify-between">
              <div className="flex w-full justify-center">
                <TextReg
                  customClass={"text-xl md:text-5xl mb-12"}
                  text={"$TOME Airdrop Instructions"}
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-8 justify-center text-lg md:text-3xl">
                <TextReg customClass={""} text={"1) ENTER YOUR SOL ADRESS "} />
                <TextReg customClass={""} text={"2) ENTER YOUR TWITTER @"} />
                <TextReg customClass={""} text={"3) FOLLOW @tarotofmeme"} />
                <TextReg
                  customClass={"mb-6"}
                  text={
                    "4) MAKE A POST USING  $TOME, @tarotofmeme AND PICTURE "
                  }
                />
                <TextReg
                  customClass={""}
                  text={"Example: I am wif $TOME @tarotofmem"}
                />
                <TextReg
                  customClass={""}
                  text={
                    "Twitter account should be 60+ days old and 40+ followers"
                  }
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-2 justify-center align-middle w-full items-center">
                <img
                  className={
                    "w-full md:w-8/12 xl:w-4/12 my-auto cursor-pointer transition duration-500 ease-in-out transform " +
                    (isButtonEnabled ? "hover:scale-[1.1]" : " opacity-50")
                  }
                  // @ts-ignore
                  onClick={handleClose}
                  src="./form/enter.webp"
                />
                <p
                  className={
                    "text-lg md:text-4xl font-bold " +
                    (timeLeft === 0 ? "text-transparent" : "")
                  }
                >
                  {timeLeft}
                </p>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
