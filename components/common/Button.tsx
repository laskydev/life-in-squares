import { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  children = "",
  type = "button",
  variant = "base",
  onClick = () => null,
}) => {
  if (variant === "alternative") {
    return (
      <button
        type={type}
        className={
          "w-full py-3 px-6 rounded mx-auto active:scale-95 dark:bg-gray-900 m-0"
        }
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className="cursor-pointer dark:bg-gray-700 w-full py-3 px-6 rounded mx-auto active:scale-95 m-0"
    >
      {children}
    </button>
  );
};

export default Button;
