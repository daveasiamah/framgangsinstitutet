import { motion } from "framer-motion";
import React, { useMemo } from "react";

type Props = {
  positionClassName: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const BlurCircle: React.FC<Props> = React.memo(({ positionClassName, size = "lg" }: Props) => {
  // Memoize the class names based on size
  const blurClassName = useMemo(() => {
    switch (size) {
      case "sm":
        return "w-[100px] h-[100px] blur-[60px]";
      case "md":
        return "w-[200px] h-[200px] blur-[80px]";
      case "lg":
        return "w-[400px] h-[260px] blur-[100px]";
      case "xl":
        return "w-[400px] h-[400px] blur-[120px]";
      default:
        return "w-[200px] h-[200px] blur-[100px]";
    }
  }, [size]);

  return (
      <motion.div
          animate={{ x: 100, y: 100 }}
          transition={{
            ease: "easeIn",
            repeat: Infinity,
            duration: 10,
            repeatType: "reverse"
          }}
          className={`absolute z-[-1] bg-blur-circle/20 ${blurClassName} ${positionClassName}`}
      ></motion.div>
  );
});

export default BlurCircle;
