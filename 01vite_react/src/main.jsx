import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <a>chai</a>
    </>
  );
}

//  const ReactElement = {
//     typeof: 'a',
//     props: {
//         href: 'https://www.google.com/',
//         target: '_blank'
//     },
//     children: 'click me'
// }

const anotherElement = (<a href="https://google.com" target="_blank">google me</a>)

const anotherUser = 'chai'

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit',
  anotherUser
)


createRoot(document.getElementById("root")).render(ReactElement);
