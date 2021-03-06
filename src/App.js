import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#5D3FD3").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h1>Color Generator:</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#5D3FD3"
            className={error ? "error" : null}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((item, idx) => {
          return <SingleColor key={idx} {...item} idx={idx} hex={item.hex} />;
        })}
      </section>
    </>
  );
}

export default App;
