import { LifetimeData } from "./../data/types";
import { FieldValues, UseFormReturn } from "react-hook-form/dist/types";
import { Form, User } from "../pages/form/types";

interface CalculateLifetimeArgs {
  form: Form;
  user: User;
}

export type CalculateLifetime = (args: CalculateLifetimeArgs) => void;

export type GetAverageFunction = (data?: LifetimeData) => number | undefined;
