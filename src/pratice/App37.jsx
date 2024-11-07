import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function App37(props) {
  const [text, setText] = useState("");
  // p가 없다치고 , 컴포넌트를 만들어서 안에 텍스트를 넌다하면 ,
  // {text} 라는 내용안에 > <p> {text></p> 가 들어가면 되나 ?
  return (
    <div>
      <Input
        onKeyUp={(e) => {
          const t2 = <p>{e.target.value} </p>;
          setText(t2);
        }}
      />

      {text}
      {/*<p> {text} </p>*/}
    </div>
  );
}

export default App37;
