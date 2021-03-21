import React, { useState } from "react";
import InputLabel from "@shared/InputLabel";
import UploadInput from "@shared/UploadInput";
import { apiPaths } from "@constants";
import { useFormik } from "formik";
import { CreatePartyInput } from "@generated/graphql";
import { Divider } from "@shared/Common";
import Button from "@shared/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import PartyCard from "@components/Editor/EditorParties/PartyCard";
import CountrySelect from "@shared/CountrySelect";
import useTranslation from "next-translate/useTranslation";
import { initialValues as defaultInitialValues } from "./PartyFormUtils";
import { Input } from "./PartyFormStyle";

library.add(faPlus);

interface Props {
  onSubmit(values: CreatePartyInput): void | Promise<void>;
  initialValues?: CreatePartyInput;
  button: {
    text: string;
    icon: React.ReactNode;
  };
}

const PartyForm: React.FC<Props> = ({ button, onSubmit, initialValues }) => {
  const { t } = useTranslation("editor");
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    values,
    isSubmitting,
  } = useFormik<CreatePartyInput>({
    initialValues: initialValues || defaultInitialValues,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <InputLabel
        title={t("parties.form.logo")}
        preventDefault={false}
        as="div"
      >
        <UploadInput
          endpoint={apiPaths.upload.icon}
          value={values.logoUrl}
          onChange={(value) => setFieldValue("logoUrl", value)}
        />
      </InputLabel>
      <InputLabel title={t("parties.form.country")}>
        <CountrySelect
          value={values.country}
          onChange={(value) => setFieldValue("country", value)}
          color="backgroundDarken"
        />
      </InputLabel>
      <InputLabel
        style={{ gridColumn: "1 / -1" }}
        title={t("parties.form.name")}
      >
        <Input name="name" onChange={handleChange} value={values.name} />
      </InputLabel>
      <Divider />
      <div>
        <PartyCard
          data={{ ...values, viewerCanEdit: false, id: "new" }}
          showActions={false}
        />
        <Button loading={isSubmitting} beforeIcon={button.icon}>
          {button.text}
        </Button>
      </div>
    </form>
  );
};

export default PartyForm;
