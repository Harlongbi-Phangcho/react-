import { useState } from "react";
import Card from "./components/Card";

function App() {

  let myObj = {
    username: 'hitesh',
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-red-400 text-center mb-4">Tailwind test</h1>
      <Card username="chai aur code" someObj={newArr} year="2026"/>
      <Card username="hitesh"/>
    </>
  );
}

export default App;
