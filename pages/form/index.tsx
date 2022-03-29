import React, { FC } from "react";
import { useRouter } from "next/router";
import Button from "../../components/common/Button";
import LayoutForm from "../../components/layouts/LayoutForm";
import Error from "../../components/common/Error";
import Label from "../../components/common/Label";
import { FormProps } from "./types";

const Index: FC<FormProps> = ({ form }) => {
  const { push } = useRouter();
  const { register, formState } = form;
  const errors = formState.errors;
  const handleSubmit = () => {
    push("/form/country");
    return undefined;
  };

  return (
    <>
      <LayoutForm {...form} onSubmit={handleSubmit}>
        <Label>
          Ingresa tu fecha de nacimiento
          <input
            type="date"
            className="dark:bg-gray-900 rounded p-2 uppercase text-base"
            {...register("birthday", { required: true })}
          />
        </Label>
        {errors.birthday && <Error>Selecciona una fecha válida</Error>}
        <Button type="submit" variant="alternative">
          Siguiente
        </Button>
      </LayoutForm>
    </>
  );
};

export default Index;
