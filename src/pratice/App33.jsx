import React from "react";
import { Button, Input, Textarea } from "@chakra-ui/react";

function App33(props) {
  return (
    <div>
      <Input
        onKeyUp={() => {
          console.log("인풋에서 손 때");
        }}
      />
      <hr />
      <Button
        onClick={() => {
          console.log(" 버튼에서 손 떼");
        }}
      >
        {" "}
        클릭
      </Button>
      <hr />
      <Textarea
        onMouseEnter={() => {
          console.log("아레아");
        }}
        onMouseLeave={() => {
          console.log("area2");
        }}
      />
    </div>
  );
}

export default App33;
