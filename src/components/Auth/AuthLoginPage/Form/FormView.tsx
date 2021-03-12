import React from "react";
import InputLabel from "@shared/InputLabel";
import { Input } from "@shared/Common";
import {
  ActionsWrapper,
  Content,
} from "@components/Auth/AuthLoginPage/AuthLoginPageStyle";
import Link from "next/link";
import { paths, recaptchaSiteKey } from '@constants';
import Button from "@shared/Button";
import getConfig from "next/config";
import ReCAPTCHA from "react-google-recaptcha";
import { CurrentUserDocument, useLoginMutation } from "@generated/graphql";
import { useFormik } from "formik";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import { useRouter } from "next/router";
import { initialValues } from "./FormUtils";

const { publicRuntimeConfig } = getConfig();

const FormView: React.FC = () => {
  const router = useRouter();
  const handleErrors = useHandleErrors();
  const [login, { loading }] = useLoginMutation({
    onCompleted: () => router.push(paths.editorPanel),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        await login({
          variables: {
            values,
          },
          refetchQueries: [
            {
              query: CurrentUserDocument,
            },
          ],
        });
      } catch (e) {
        handleErrors(e);
      }
    },
  });

  return (
    <Content onSubmit={formik.handleSubmit}>
      <InputLabel title="Adres-email">
        <Input
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="john.doe@mypolitics.pl"
          required
        />
      </InputLabel>
      <InputLabel title="Hasło">
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
            Rejestracja
          </Button>
        </Link>
        <Button type="submit" disabled={loading} loading={loading} showShadow>
          Zaloguj się
        </Button>
      </ActionsWrapper>
    </Content>
  );
};

export default FormView;
