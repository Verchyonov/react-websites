import { motion } from "framer-motion";

export const MovingImg = (props: any) => {
  return (
    <motion.div
      className={"" + props.customClassWrapper}
      style={{ y: props.y }}
    >
      {/*  MAYBE MOVE THIS WRAPPER SEPARETE IF WE NEED TO REUSE IT  */}
      <motion.div
        className="w-fit flex justify-center"
        initial={{
          transform: `translateZ(${props.tz}px) translateY(${props.ty}px) translateX(${props.tx}px)`,
        }}
        animate={{
          transform: `translateZ(${props.tz * 3}px) translateY(${
            props.ty * 4
          }px) translateX(${props.tx * 5}px)`,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <img
          className={props.customClassImg + " select-none"}
          src={props.imgPath}
          alt={props.alt}
        />
      </motion.div>
    </motion.div>
  );
};
