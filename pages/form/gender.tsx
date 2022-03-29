import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { FormProps } from "./types";
import Button from "../../components/common/Button";
import Label from "../../components/common/Label";
import LayoutForm from "../../components/layouts/LayoutForm";
import { calculateLifetime } from "../../lib/calculateLifetime";

type Gender = "male" | "female" | null;

const Gender: FC<FormProps> = ({ form, user }) => {
  const [gender, setGender] = useState<Gender>(null);
  const { back, push } = useRouter();

  useEffect(() => {
    if (gender) {
      form.setValue("gender", gender);
      try {
        calculateLifetime({ form, user });
      } catch (e) {
        console.error({ error: e });
      }
      console.log(form.watch());
    }
  }, [gender]);

  return (
    <LayoutForm {...form}>
      <Label>
        Ingresa tu sexo:
        <fieldset className="w-full flex justify-evenly items-center">
          <button
            className="p-4 dark:bg-gray-700 rounded-xl"
            aria-label="Male"
            onClick={() => setGender("male")}
          >
            Masculino
          </button>
          <button
            className="p-4 dark:bg-gray-700 rounded-xl"
            id="female"
            onClick={() => setGender("female")}
          >
            Femenino
          </button>
        </fieldset>
      </Label>
      <div className="flex gap-5">
        <Button
          variant="base"
          type="button"
          onClick={() => {
            back();
            return null;
          }}
        >
          Regresar
        </Button>
        <Button
          variant="alternative"
          type="submit"
          onClick={() => {
            push("/active");
          }}
        >
          Siguiente
        </Button>
      </div>
    </LayoutForm>
  );
};

export default Gender;
