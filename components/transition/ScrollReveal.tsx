import React from "react";
import { motion } from "framer-motion";
import { fadeBottomVariants } from "@/utils/framerMotionVariants";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const ScrollReveal: React.FC<Props> = React.memo(({ className, children }) => {
  return (
      <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={fadeBottomVariants}
          className={className}
      >
        {children}
      </motion.div>
  );
});

export default ScrollReveal;
