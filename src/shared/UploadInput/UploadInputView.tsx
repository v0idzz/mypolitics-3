import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Label, ImageWrapper, ActionButton } from "./UploadInputStyle";

library.add(faImage, faTimes);

interface Props {
  endpoint: string;
  value?: string;
  onChange(value: string);
}

const UploadInput: React.FC<Props> = ({ endpoint, value, onChange }) => {
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("file", selectedFile);

    fetch(endpoint, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then(onChange);
  };

  useEffect(() => {
    if (selectedFile) {
      handleSubmission();
    }
  }, [selectedFile]);

  if (value) {
    return (
      <ImageWrapper as="div" onClick={(e) => e.preventDefault()}>
        <img src={value} alt={value} />
        <ActionButton danger onClick={() => onChange(undefined)}>
          <FontAwesomeIcon icon={faTimes} />
        </ActionButton>
      </ImageWrapper>
    );
  }

  return (
    <Label>
      <input type="file" name="file" onChange={changeHandler} />
      <FontAwesomeIcon icon={faImage} />
      <span>Wybierz</span>
    </Label>
  );
};

export default UploadInput;
