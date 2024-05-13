import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Tweet } from "react-tweet";

import { useMemo, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const ExampleModal = (props: any) => {
  const TweetEmbed = useMemo(() => {
    return (
      <div className="w-full light updated-dark">
        <Tweet id={"1789800076900024353"} />
      </div>
    );
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        className="text-white bg-[#1f2937] hover:bg-[#1f2937dc] focus:ring-2 focus:outline-none focus:ring-[#1f293785] hover:scale-[1.02] font-medium rounded-lg px-3 py-2 transition-transform duration-75 ease-in-out"
        onClick={handleOpen}
      >
        Example post
      </button>
      <Modal
        keepMounted
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
            <Box position={"absolute"} top={5} right={5}>
              <IconButton
                aria-label="delete"
                onClick={handleClose}
                size="large"
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <h2 className="text-2xl font-bold text-center">Example</h2>
            {TweetEmbed}
            <h3 className="text-lg font-bold text-center mb-2">
              Feel free to add any image or text
            </h3>
            <a
              href="/example-image.jpg"
              download="x_image"
              className="text-white bg-[#1f2937] hover:bg-[#1f2937dc] focus:ring-2 focus:outline-none focus:ring-[#1f293785] hover:scale-[1.02] font-medium rounded-lg px-3 py-2 transition-transform duration-75 ease-in-out"
            >
              Download Example Image
            </a>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
