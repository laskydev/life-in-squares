import { FC } from "react";

const Label: FC = ({ children }) => {
  return (
    <label className="text-bold text-2xl flex flex-col gap-5">{children}</label>
  );
};

export default Label;
