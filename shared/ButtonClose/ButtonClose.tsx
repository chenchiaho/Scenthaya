import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface ButtonCloseProps {
  className?: string;
  IconclassName?: string;
  onClick?: () => void;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({
  className = "",
  IconclassName = "w-5 h-5",
  onClick = () => {},
}) => {
  return (
    <button
      className={`h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-500 ${className} `}
      onClick={onClick}
    >
      <XMarkIcon className={IconclassName} />
    </button>
  );
};

export default ButtonClose;
