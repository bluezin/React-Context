import React from "react";
import "./App.css";
import useSWR from "swr";
import Animals from "./Animals";

function fetcher(url) {
  return fetch(url).then((response) => response.json());
}

function App() {
  const { data } = useSWR("https://api.thecatapi.com/v1/categories/1", fetcher);

  if (!data) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h1>{data.name}</h1>
      <Animals />
    </div>
  );
}

export default App;
