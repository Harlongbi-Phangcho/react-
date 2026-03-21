import { useState } from 'react'
import Chai from "./Chai.jsx";

function App() {
  const username = 'histesh'
  return (
    <>
      <Chai />
      <a>hello {username}</a>
    </>
  )
}

export default App
