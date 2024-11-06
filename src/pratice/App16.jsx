import React from "react";

function App16(props) {
  return (
    <div>
      <MyCom address={"ny"} city={"seoul"} score={9.88} />
      <MyCom address={"ca"} city={"busan"} score={9.81} />
    </div>
  );
}

function MyCom(param) {
  return (
    <div>
      <h1>
        {" "}
        주소는 : {param.address}, 도시는 :{param.city}, 우리도시는 {param.score}{" "}
        점이야
      </h1>
    </div>
  );
}

export default App16;
