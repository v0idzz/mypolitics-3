import React from "react";
import InputLabel from "@shared/InputLabel";
import { Input } from "@shared/Common";
import {
  ActionsWrapper,
  Content,
} from "@components/Auth/AuthLoginPage/AuthLoginPageStyle";
import Link from "next/link";
import { paths } from "@constants";
import Button from "@shared/Button";
import getConfig from "next/config";
import ReCAPTCHA from "react-google-recaptcha";
import { useCreateUserMutation } from "@generated/graphql";
import { useFormik } from "formik";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import Alert from "@shared/Alert";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { object, string, ref } from "yup";
import { initialValues } from "./FormUtils";

const { publicRuntimeConfig } = getConfig();

const FormView: React.FC = () => {
  const { t } = useTranslation("auth");
  const handleErrors = useHandleErrors();
  const [createUser, { loading, data }] = useCreateUserMutation();

  const schema = object().shape({
    name: string()
      .min(2, t("errors.shortName"))
      .max(50, t("errors.longName"))
      .required(t("errors.required")),
    email: string()
      .email(t("errors.invalidMail"))
      .required(t("errors.required")),
    repeatEmail: string()
      .email(t("errors.invalidMail"))
      .oneOf([ref("email"), null], t("errors.differentMail"))
      .required(t("errors.required")),
    password: string()
      .min(6, t("errors.shortPassword"))
      .matches(/[A-Z]/, t("errors.passwordValidation"))
      .required(t("errors.required")),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async ({ repeatEmail, ...values }) => {
      if (!values.recaptcha) {
        handleErrors({
          code: 12,
          text: "Missing reCAPTCHA",
        });
      } else {
        try {
          await createUser({
            variables: {
              values,
            },
          });
        } catch (e) {
          handleErrors(e);
        }
      }
    },
    validationSchema: schema,
  });

  const sitekey =
    publicRuntimeConfig.NODE_ENV === "production"
      ? "6LdUjm0aAAAAAJqiyWXILXdWCqVnNUPTZ12a7zKe"
      : "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  return (
    <Content onSubmit={formik.handleSubmit}>
      {!data?.createUser.id && (
        <>
          <InputLabel title={t("form.fullName")}>
            <Input
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              isInvalid={!!(formik.touched.name && formik.errors.name)}
            />
            {formik.touched.name && formik.errors.name && (
              <Alert type="error">{formik.errors.name}</Alert>
            )}
          </InputLabel>
          <InputLabel title={t("form.email")}>
            <Input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="john.doe@mypolitics.pl"
              required
              isInvalid={!!(formik.touched.email && formik.errors.email)}
            />
            {formik.touched.email && formik.errors.email && (
              <Alert type="error">{formik.errors.email}</Alert>
            )}
          </InputLabel>
          <InputLabel title={t("form.emailRepeat")}>
            <Input
              name="repeatEmail"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.repeatEmail}
              required
              isInvalid={
                !!(formik.touched.repeatEmail && formik.errors.repeatEmail)
              }
            />
            {formik.touched.repeatEmail && formik.errors.repeatEmail && (
              <Alert type="error">{formik.errors.repeatEmail}</Alert>
            )}
          </InputLabel>
          <InputLabel title={t("form.password")}>
            <Input
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
              isInvalid={!!(formik.touched.password && formik.errors.password)}
            />
            {formik.touched.password && formik.errors.password && (
              <Alert type="error">{formik.errors.password}</Alert>
            )}
          </InputLabel>
          <ReCAPTCHA
            onChange={(value) => formik.setFieldValue("recaptcha", value)}
            sitekey={sitekey}
          />
        </>
      )}
      {data?.createUser.id && (
        <Alert type="success">
          <Trans
            i18nKey="auth:createUserSuccess"
            components={[<span key="0" />, <b key="1" />]}
          />
        </Alert>
      )}
      <ActionsWrapper>
        <Link href={paths.authLogin} passHref>
          <Button as="a" background="gray">
            {t("signUpActions.alternative")}
          </Button>
        </Link>
        <Button type="submit" disabled={loading} loading={loading} showShadow>
          {t("signUpActions.main")}
        </Button>
      </ActionsWrapper>
    </Content>
  );
};

export default FormView;
