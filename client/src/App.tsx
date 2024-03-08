import "./App.css";
import CatFileInput from "./components/CatFileInput";

function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">Cat Classifier</h1>
        </div>
      </section>
      <section className="section">
        <CatFileInput onSubmit={() => {}} />
      </section>
    </>
  );
}

export default App;
