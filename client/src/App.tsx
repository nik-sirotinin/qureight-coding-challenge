import { useState } from "react";
import "./App.css";
import CatFileInput from "./components/CatFileInput";
import { fetchIsThisACat } from "./cat-classifier";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [catResult, setCatResult] = useState(null);

  const uploadCatFile = async (file: File) => {
    setLoading(true);
    const result = await fetchIsThisACat(file);
    setCatResult(result);
    setLoading(false);
  };

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">Cat Classifier</h1>
        </div>
      </section>
      <section className="section">
        <CatFileInput onSubmit={uploadCatFile} isLoading={isLoading} />
        {JSON.stringify(catResult)}
      </section>
    </>
  );
}

export default App;
