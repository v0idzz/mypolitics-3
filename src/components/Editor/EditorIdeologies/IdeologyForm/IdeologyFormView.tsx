import React, { useState } from "react";
import InputLabel from "@shared/InputLabel";
import UploadInput from "@shared/UploadInput";
import { apiPaths } from "@constants";
import InternationalizedInput from "@shared/InternationalizedInput";
import { useFormik } from "formik";
import { CreateIdeologyInput } from "@generated/graphql";
import { TwitterPicker } from "react-color";
import { Divider } from "@shared/Common";
import { IdeologyCard } from "@components/Editor";
import Button from "@shared/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import useTranslation from "next-translate/useTranslation";
import { ColorInputWrapper, BlockPickerWrapper } from "./IdeologFormStyle";
import {
  colors,
  initialValues as defaultInitialValues,
} from "./IdeologyFormUtils";

library.add(faPlus);

interface Props {
  onSubmit(values: CreateIdeologyInput): void | Promise<void>;
  initialValues?: CreateIdeologyInput;
  button: {
    text: string;
    icon: React.ReactNode;
  };
}

const IdeologyForm: React.FC<Props> = ({ button, onSubmit, initialValues }) => {
  const { t } = useTranslation("editor");
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    values,
    isSubmitting,
  } = useFormik<CreateIdeologyInput>({
    initialValues: initialValues || defaultInitialValues,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <InputLabel
        title={t("ideologies.form.icon")}
        preventDefault={false}
        as="div"
      >
        <UploadInput
          endpoint={apiPaths.upload.icon}
          value={values.icon.value}
          onChange={(value) => {
            setFieldValue("icon.value", value);
          }}
        />
      </InputLabel>
      <InputLabel title={t("ideologies.form.name")}>
        <InternationalizedInput
          controlled
          value={values.name}
          onChange={(value) => {
            setFieldValue("name", value);
          }}
        />
      </InputLabel>
      <ColorInputWrapper>
        <InputLabel title={t("ideologies.form.color")}>
          <input
            name="color"
            type="color"
            value={values.color}
            onChange={handleChange}
            onClick={(e) => {
              e.preventDefault();
              setShowColorPicker(!showColorPicker);
            }}
          />
        </InputLabel>
        {showColorPicker && (
          <BlockPickerWrapper>
            <TwitterPicker
              color={values.color}
              onChange={(value) => {
                setFieldValue("color", value.hex);
                setShowColorPicker(false);
              }}
              colors={colors}
            />
          </BlockPickerWrapper>
        )}
      </ColorInputWrapper>
      <InputLabel title={t("ideologies.form.description")}>
        <InternationalizedInput
          controlled
          value={values.description}
          onChange={(value) => {
            setFieldValue("description", value);
          }}
        />
      </InputLabel>
      <Divider />
      <div>
        <IdeologyCard
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

export default IdeologyForm;
