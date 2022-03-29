import { FC } from "react";

const Error: FC = ({ children }) => {
  return (
    <p className="block w-fit mx-auto dark:bg-orange-900 py-2 px-6 rounded">
      {children}
    </p>
  );
};

export default Error;
