import { QuizLicense } from "@generated/graphql";

export const LicenseLinks: Record<QuizLicense, string> = {
  [QuizLicense.Commercial]: "",
  [QuizLicense.Mit]: "https://opensource.org/licenses/MIT",
};
