import { InitialUsername } from "../../types";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { UseFormReturn } from "react-hook-form/dist/types/form";

export interface User {
  username: InitialUsername;
  setUsername: Setter<InitialUsername>;
}

interface FormData {
  birthday: Date | undefined | null;
  country: string | undefined | null;
  gender: "male" | "female" | undefined | null;
}

export type Form = UseFormReturn<FieldValues, FormData>;

type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>;

export interface FormProps {
  form: Form;
  user: User;
}
