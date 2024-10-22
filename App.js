import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "namaste React new react"
// );

// console.log(heading); heading code = jsxHeading code

const elem = <span>React Element</span>

const Title = () =>  (
  <h1 id="heading" className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);

const number = 1000;

// Component Composition(keeping one component to another component)
const HeadingComponent = () => (
  <div id="container">
    {/* <Title/>
    <Title></Title>
    {Title()} */}
    
    <Title/>
    <h2>{10*200}</h2>
    {console.log("executes js code using {}")}
    <h1 className="heading">Namaste React Fucntional Component</h1>
  </div>
   
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
