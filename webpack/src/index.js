import { add }  from "./calc";
import("./index.css")
import React from "react";
import  ReactDOM  from "react-dom";
import Icon from './images.jpg';



console.log(add(1,2));

console.log(add(1,22));

//const h1 = document.createElement("h1");
//h1.innerText = "Hello";
//h1.classList.add("redcolor");


//document.getElementById("root").appendChild(h1);




ReactDOM.render(
  //  React.createElement("h1", 
  //  { className: "redcolor"},
  //  [
  //      "hello Ash and ",
  //  React.createElement("i", null , "React")
  //  ]),  // mul elemnts use array
  //  document.getElementById("root")


  <h1 className="redcolor">
      Hello {" "}

      <i className="text">Ash <b>Bold</b>
      
      </i> {" "}
  </h1>, //JSX
document.getElementById("root")
);

/*"use strict";

React.createElement("h1", {
  className: "redcolor"
}, "Hello ", " ", /*#__PURE__*/
//React.createElement("i", {
  //className: "text"
//}, "Ash ", /*#__PURE__*/React.createElement("b", null, "Bold")), " ", " ");



//------------//babel convert it to this


/* <h1 className="redcolor">
Hello {" "}

<i className="text">Ash <b>Bold</b>

</i> {" "}
</h1>*/


