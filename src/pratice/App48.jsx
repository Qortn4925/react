import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function MyForm({ updateInfo1 }) {
  return (
    <Box>
      <Field label={"이름"}>
        <Input
          onChange={(e) => {
            updateInfo1
          }}
        />
      </Field>
      <Field label={"주소"}>
        <Input />
      </Field>
    </Box>
  );
}
function MyBox({ info }) {
  return (
    <Box>
      <p>이름:{info.name}</p>
      <p>주소:{info.address}</p>
    </Box>
  );
}

function App48(props) {
  const [info, setInfo] = useState({ name: "", address: "" });

  function updateInfo1(a) {
    setInfo(...a,)
  }

  function  updateInfo(b){

    setInfo(...b,address:e.target.value)
  }
  return (
    <div>
      <MyForm updateInfo1={updateInfo1} updateInfo2={updateInfo2} />
      <MyBox info={info} />
    </div>
  );
}

export default App48;
