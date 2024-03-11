import { useState } from "react";
import "./App.css";
import CatFileInput from "./components/CatFileInput";
import { CatClassifierResult, fetchIsThisACat } from "./cat-classifier";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [catResult, setCatResult] = useState<CatClassifierResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const uploadCatFile = async (file: File) => {
    setLoading(true);
    const result = await fetchIsThisACat(file);
    if (result instanceof Error) {
      setErrorMessage(result.message);
      setCatResult(null);
    } else {
      setErrorMessage("");
      setCatResult(result);
    }
    setLoading(false);
  };

  const catResultOutput = () => <p>{JSON.stringify(catResult)}</p>;
  const errorOutput = () => (
    <div className="message is-danger">
      <div className="message-header">
        <p>Error</p>
      </div>
      <div className="message-body">{errorMessage}</div>
    </div>
  );

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">Cat Classifier</h1>
        </div>
      </section>
      <section className="section">
        <CatFileInput onSubmit={uploadCatFile} isLoading={isLoading} />
        {catResult ? catResultOutput() : ""}
        {errorMessage ? errorOutput() : ""}
      </section>
    </>
  );
}

export default App;
