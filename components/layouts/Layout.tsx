import React, { FC } from "react";
const Layout: FC = ({ children }) => {
  return (
    <div className="min-h-screen w-full dark:bg-gray-900 dark:text-slate-400 p-4">
      {children}
    </div>
  );
};

export default Layout;
