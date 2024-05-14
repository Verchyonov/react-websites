import React from "react";
import { motion } from "framer-motion";

export const AppearWrapper = (props: any) => {
  return (
    <motion.div
      className={props.customClass + ""}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.div>
  );
};
