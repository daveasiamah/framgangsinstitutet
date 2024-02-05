import React from "react";
// import Typography from './Typography';
import { Progress, Typography } from "@material-tailwind/react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBarComponent: React.FC<ProgressBarProps> = ({ progress }) => {
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="grid grid-cols-4 mb-4 bg-base-200 rounded-lg pr-2">
      <Typography
        color="blue"
        variant="h6"
        className="bg-primary text-white rounded-lg pl-2 pr-2 pt-3 pb-3 w-fit progress_count text-sm"
      >
        {progress}%
      </Typography>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 col-span-3 place-self-center">
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 progress_line"
          style={progressStyle}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;
