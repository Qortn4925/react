import React from "react";
import { useImmer } from "use-immer";
import { Field } from "../components/ui/field.jsx";
import { Button, Input } from "@chakra-ui/react";

const originInfo = { name: "홍길동", items: ["모니터", "cpu"] };
function App44(props) {
  const [info, updateInfo] = useImmer(originInfo);

  function fun1(e) {
    updateInfo((draft) => {
      draft.items.push(e.target.innerText);
    });
  }

  return (
    <div>
      <Field label={"이름"}>
        <Input
          value={info.name}
          onChange={(e) => {
            updateInfo((draft) => {
              draft.name = e.target.value;
            });
          }}
        />
      </Field>
      <Button onClick={fun1}> 키보드</Button>
      <Button onClick={fun1}> 마우스</Button>
      <Button onClick={fun1}> cpu</Button>
      <ul>
        {info.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App44;
