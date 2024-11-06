import React from "react";

function Comp1() {
  return;
}

function Comp2() {
  return (
    // div가 필요하지 않는데 최상위 뭐시기가 필요해서 넣은거임
    <div>
      <h3>Lorem.</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

function Comp3() {
  // <> fragment   (<>  </>   > 최상위 컴포넌트를 그리지 않음 > h3,p만 춫력
  return (
    <>
      <div>
        <h3>Lorem ipsum dolor.</h3>
        <p> Lorem ipsum dolor sit.</p>
      </div>
    </>
  );
}

function MyApp5(props) {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
}

export default MyApp5;
