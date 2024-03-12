import { FC } from "react";
import { CatClassifierResult } from "../cat-classifier";
import clsx from "clsx";

interface CatOutputProps {
  result: CatClassifierResult;
}
const CatOutput: FC<CatOutputProps> = ({ result }) => {
  const { success, confidence, info } = result;

  return (
    <div className={clsx("message", success ? "is-primary" : "is-info")}>
      <div className="message-header">
        <p>{success ? "It's a cat!" : "Not a cat"}</p>
      </div>
      <div className="message-body">
        <p>{`We're ${confidence}% sure it's a cat:`}</p>
        <p>{info}</p>
      </div>
    </div>
  );
};
export default CatOutput;
