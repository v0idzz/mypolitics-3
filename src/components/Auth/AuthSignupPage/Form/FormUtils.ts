import { CreateUserInput } from "@generated/graphql";

export const initialValues: CreateUserInput & { repeatEmail: string } = {
  email: "",
  repeatEmail: "",
  password: "",
  recaptcha: "",
  name: "",
};
