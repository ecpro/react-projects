import react from "react";
import reactDom from "react-dom/client";

const hey = react.createElement("h1", { key: 1 }, "Hey There"),
  there = react.createElement("h2", { key: 2 }, "I am Learning React");

const root = reactDom.createRoot(document.getElementById("root"));
root.render([hey, there]);
