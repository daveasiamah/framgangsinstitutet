import Image from "next/image";
import React from "react";

type Props = {
  sizeClassName?: string;
  positionClassName: string;
  className?: string;
};

const CacingOne: React.FC<Props> = React.memo(({ sizeClassName, positionClassName, className }) => {
  return (
      <div
          className={`absolute ${
              sizeClassName ? sizeClassName : "w-[200px] h-[200px]"
          } ${positionClassName} ${className}`}
      >
        <Image
            src="/graphics/cacing1.png"
            alt="cacing 1"
            fill
            className="object-contain"
        />
      </div>
  );
});

export default CacingOne;
