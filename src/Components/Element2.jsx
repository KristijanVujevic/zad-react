import React from "react";
import { string1, string2 } from "../App";
var _ = require("lodash");

const Element2 = () => {
  return (
    <div>
      <h2>{_.kebabCase("Lodash kebab Case ") + string2} </h2>
    </div>
  );
};

export default Element2;
