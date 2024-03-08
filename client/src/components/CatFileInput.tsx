import { ChangeEventHandler, FC, useState } from "react";

type ValidationState = "blank" | "valid" | "wrong-format";

interface CatFileInputProps {
  onSubmit: (file: File) => void;
}

const CatFileInput: FC<CatFileInputProps> = ({ onSubmit }) => {
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
    <form onSubmit={handleSubmit}>
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
        <div className="control">
          <button
            className="button is-link"
            type="submit"
            disabled={validationState !== "valid"}
          >
            Upload
          </button>
        </div>
      </div>
    </form>
  );
};

export default CatFileInput;
