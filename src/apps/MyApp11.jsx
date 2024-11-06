import React from "react";

function Comp1() {
  return <h1>컴포1</h1>;
}

function MyApp11(props) {
  return (
    <div>
      <Comp1></Comp1>
    </div>
  );
}

export { Comp1 };
export default MyApp11;
