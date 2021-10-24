import React from "react";
import ReactDOM from "react-dom";

const firstName = "Nikki";
const lastName = "Peralta";
var pokemon1 = "bulbasaur";
var pokemon2 = "cyndaquil";
var pokemon3 = "treecko";

ReactDOM.render(
  <div>
    <h1>
      Here are {firstName} {lastName}'s favourite starter pokemon
    </h1>
    <ul>
      <li>{pokemon1}</li>
      <li>{pokemon2}</li>
      <li>{pokemon3}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
