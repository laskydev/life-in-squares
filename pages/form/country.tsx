import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Button from "../../components/common/Button";
import LayoutForm from "../../components/layouts/LayoutForm";
import Label from "../../components/common/Label";
import dataRaw from "../../data/lifetime-data.json";
import Select from "react-select";
import { FormProps } from "./types";
import { calculateLifetime } from "../../lib/calculateLifetime";

const data = dataRaw.DATA.map((country) => {
  return {
    value: country.NAME,
    label: country.NAME,
  };
});

const Country: FC<FormProps> = ({ form, user }) => {
  const [valueSelect, setValueSelect] = useState("");
  const { push } = useRouter();
  const { setValue } = form;
  const onSubmit = () => {
    push("/form/gender");
    return undefined;
  };

  useEffect(() => {
    setValue("country", valueSelect);
  }, [valueSelect]);

  return (
    <LayoutForm {...form} onSubmit={onSubmit}>
      <Label>
        Selecciona el país donde vives
        <Select
          options={data}
          theme={(theme) => ({
            ...theme,
            color: "#fff",
            backgroundColor: "#000000",
          })}
          onChange={(x) =>
            setValueSelect(typeof x?.value === "string" ? x.value : "")
          }
          className="dark:text-gray-500 dark:bg-gray-700 bg-red-600"
        />
      </Label>
      <div className="flex gap-5">
        <Button
          variant="base"
          type="button"
          onClick={() => {
            push("/form");
            return null;
          }}
        >
          Regresar
        </Button>
        <Button variant="alternative" type="submit">
          Siguiente
        </Button>
      </div>
    </LayoutForm>
  );
};

export default Country;
