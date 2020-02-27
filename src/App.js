import React from "react";
import "./styles.css";
import SimpleForm from "./redux-form/SimpleForm";

export default function App() {
  return (
    <div className="App">
      <SimpleForm onSubmit={val => console.log(val)} />
    </div>
  );
}
