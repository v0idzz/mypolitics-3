export interface FormValues {
  username: string;
  password: string;
  recaptcha: string;
}

export const initialValues: FormValues = {
  username: "",
  password: "",
  recaptcha: "",
};
