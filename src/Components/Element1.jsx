import React from "react";
var _ = require("lodash");
const Element1 = () => {
  return (
    <div>
      <h1> {_.snakeCase("Ovo je neki string")}</h1>
    </div>
  );
};

export default Element1;
