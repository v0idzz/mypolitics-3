import React, { useState } from "react";
import InputLabel from "@shared/InputLabel";
import { Input } from "@shared/Common";
import {
  ActionsWrapper,
  Content,
} from "@components/Auth/AuthLoginPage/AuthLoginPageStyle";
import Link from "next/link";
import { apiPaths, paths, recaptchaSiteKey } from "@constants";
import Button from "@shared/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { CurrentUserDocument } from "@generated/graphql";
import { useFirstTimer } from "@utils/hooks/useFirstTimer";
import { FormValues, initialValues } from "./FormUtils";
import useTranslation from 'next-translate/useTranslation';

const FormView: React.FC = () => {
  const { t } = useTranslation("auth");
  const [loading, setLoading] = useState(false);
  const { setValue } = useFirstTimer();
  const router = useRouter();
  const handleErrors = useHandleErrors();
  const client = useApolloClient();

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit: async (values) => {
      setLoading(true);

      await fetch(apiPaths.auth.login, {
        body: JSON.stringify(values),
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      })
        .then(async (r) => {
          if (!r.ok) {
            throw new Error(JSON.stringify(await r.json()));
          }

          setValue(false);

          await client.query({
            query: CurrentUserDocument,
          });

          await router.push(paths.editorPanel);
        })
        .catch((e) => {
          handleErrors(JSON.parse(e.message));
        });

      setLoading(false);
    },
  });

  return (
    <Content onSubmit={formik.handleSubmit}>
      <InputLabel title={t("form.email")}>
        <Input
          name="username"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="john.doe@mypolitics.pl"
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
        sitekey={recaptchaSiteKey}
      />
      <ActionsWrapper>
        <Link href={paths.authSignup} passHref>
          <Button as="a" background="gray">
            {t("loginActions.alternative")}
          </Button>
        </Link>
        <Button type="submit" disabled={loading} loading={loading} showShadow>
          {t("loginActions.main")}
        </Button>
      </ActionsWrapper>
    </Content>
  );
};

export default FormView;
