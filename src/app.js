import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => HTMLElement
const jsxHeading = (
  <h1 id="heading" className="hey">
    Hello React using JSX
  </h1>
);

const Title = () => (
  <h1 className="head" tabIndex="5">
    Hello React using JSX Component 🚀
  </h1>
);

const Title2 = function() {
  return (
    <h1 className="head" tabIndex="5">
    Hello React Component using Old Style function 🚀
  </h1>
  );
}

// react component - just a function that returns a react element
// Component Composition
const HeadingComponent = () => (
    <div id="container">
      {
        jsxHeading
      }
      {
        Title2()
      }
      <Title />
      <h1 className="heading">Hello React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
