import { CopyCa } from "../../../../common/copy-ca";
import { Links } from "../../../../common/links";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { Cards2 } from "../../../game/cards/cards2";

export const Block1 = () => {
  const onPlay = () => {
    window.open("/game", "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-[#A06767] justify-center items-center flex flex-col relative">
      <motion.div
        className={
          "w-11/12 max-w-screen-2xl bg-white flex flex-col p-4 gap-2 rounded-lg"
        }
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
        }}
        viewport={{ once: true }}
      >
        <CopyCa />
        <Links />
        <TextReg
          customClass={"mt-4"}
          text={"Lorem ipsun lorem ipsun lorem ipsun"}
        />

        <div className="flex w-full flex-col gap-4 justify-center items-center">
          <Cards2 />
        </div>
      </motion.div>
    </div>
  );
};
