import clsx from "clsx";
import { ChangeEventHandler, FC, useState } from "react";

type ValidationState = "blank" | "valid" | "wrong-format";

interface CatFileInputProps {
  onSubmit: (file: File) => void;
  isLoading: boolean;
}

const CatFileInput: FC<CatFileInputProps> = ({ onSubmit, isLoading }) => {
  const [validationState, setValidationState] =
    useState<ValidationState>("blank");
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File>();

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = (event.currentTarget as HTMLInputElement).files;
    if (files && files.length) {
      const currentFile = files[0];
      setFileName(currentFile.name);
      if (currentFile.type !== "image/jpeg") {
        setValidationState("wrong-format");
        return;
      }

      setValidationState("valid");
      setFile(currentFile);
    }
  };

  const handleSubmit = () => {
    if (!file) {
      console.error("SUBMIT WITH NO FILE");
    } else {
      onSubmit(file);
    }
  };

  const fileLabelText = () => {
    switch (validationState) {
      case "blank":
        return "Choose a file...";
      case "valid":
        return "Seems legit!";
      case "wrong-format":
        return "JPEG only please!";
    }
  };

  return (
    <>
      <div className="field">
        <div className="file has-name is-boxed">
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              name="cat-image"
              onChange={onFileChange}
            />
            <span className="file-cta">
              <span className="file-label">{fileLabelText()}</span>
            </span>
            <span className="file-name">{fileName}</span>
          </label>
        </div>
      </div>
      <div className="field">
        <div className={clsx("control", { "is-loading": isLoading })}>
          <button
            className="button"
            type="submit"
            disabled={validationState !== "valid" || isLoading}
            onClick={() => handleSubmit()}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default CatFileInput;
