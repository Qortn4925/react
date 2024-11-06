import React from "react";
import Hello, { a, b as fa } from "./MyApp13.jsx";
import { b, e } from "./MyApp15.jsx";

//  그래서   13에서 나올거는 확정이니까 >  default export , 람다랑 비슷한 개념이네

function MyApp14(props) {
  return (
    <div>
      <Hello />
      <h1> My 14</h1>
      {a}
      {fa}
      <h1>{b}</h1>
      <h1>{e}</h1>
    </div>
  );
}

export default MyApp14;
