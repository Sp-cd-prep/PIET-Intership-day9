import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Greetings from "./Greetings";
import ChildComponent from "./Components/ChildComponent";
import ParentComponent from "./Components/ParentComponent";

const App = () => {
  return (
    <>
      <div className="container">
        <Home />
        <About />
        <Contact />
      </div>
      <Greetings name="Ramesh"/>
      <div>Hello World!</div>
      <h1>The Heading</h1>
      <div className="box"></div>


      {/* <ChildComponent/> */}
      <ParentComponent/>
    </>
  );
};

export default App;
