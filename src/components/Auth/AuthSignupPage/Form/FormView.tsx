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
import { initialValues } from "./FormUtils";

const { publicRuntimeConfig } = getConfig();

const FormView: React.FC = () => {
  const { t } = useTranslation("auth");
  const handleErrors = useHandleErrors();
  const [createUser, { loading, data }] = useCreateUserMutation();

  const formik = useFormik({
    initialValues,
    onSubmit: async ({ repeatEmail, ...values }) => {
      try {
        await createUser({
          variables: {
            values,
          },
        });
      } catch (e) {
        handleErrors(e);
      }
    },
  });

  const sitekey =
    publicRuntimeConfig.NODE_ENV === "production"
      ? "6LdUjm0aAAAAAJqiyWXILXdWCqVnNUPTZ12a7zKe"
      : "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  return (
    <Content onSubmit={formik.handleSubmit}>
      <InputLabel title={t("form.fullName")}>
        <Input
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />
      </InputLabel>
      <InputLabel title={t("form.email")}>
        <Input
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="john.doe@mypolitics.pl"
          required
        />
      </InputLabel>
      <InputLabel title={t("form.emailRepeat")}>
        <Input
          name="repeatEmail"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.repeatEmail}
          required
        />
      </InputLabel>
      <InputLabel title={t("form.password")}>
        <Input
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
      </InputLabel>
      <ReCAPTCHA
        onChange={(value) => formik.setFieldValue("recaptcha", value)}
        sitekey={sitekey}
      />
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
