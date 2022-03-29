import React, { FC } from "react";
import { FormEventHandler } from "react";

interface Props {
  handleSubmit: (x: any) => FormEventHandler<HTMLFormElement> | undefined;
  onSubmit?: () => FormEventHandler<HTMLFormElement> | undefined;
}

const LayoutForm: FC<Props> = ({ handleSubmit, onSubmit, children }) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="dark:bg-gray-800 w-fit py-8 px-10 mx-auto rounded-2xl flex flex-col gap-5 text-center max-w-full"
    >
      <p className="block max-w-sm">
        Necesitamos una información primero para calcular tu tiempo en cuadrados
      </p>
      {children}
    </form>
  );
};

export default LayoutForm;
