import React from "react";
import log from "eslint-plugin-react/lib/util/log.js";
import { Button } from "@chakra-ui/react";

function MyApp33(props) {
  function fun1() {
    console.log("클릭 됨");
  }
  const fun2 = function () {
    console.log("이름있는 함수1");
  };
  const fun3 = () => [log("애로우 펑션 !")];

  return (
    <div>
      <button onClick={fun1}>butt</button>
      <button
        onClick={function () {
          console.log("두 번 째");
        }}
      >
        {" "}
        1{" "}
      </button>

      <button
        onClick={() => {
          console.log("너도 클릭");
        }}
      >
        3
      </button>
      <Button onClick={fun3}>1</Button>
      <Button onClick={fun2}>2</Button>
    </div>
  );
}

export default MyApp33;
