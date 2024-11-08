import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyApp43(props) {
  const originPerson = { name: "홍길동", items: ["키보드", "모니터"] };
  const [person, setPerson] = useState(originPerson);
  const handleButtonClick = (item) => {
    const nextPerson = { ...person }; // 얕은 복사
    // nextPerson.push(item);
    nextPerson.items = [...person.items];
    nextPerson.items.push(item);
    setPerson({ ...nextPerson });
  };
  return (
    <div>
      <Field label={"이름"}>
        <Input
          onChange={(e) => {
            const nextPerson = { ...person, name: e.target.value };
            nextPerson.items = [...person.items];
            setPerson({ ...nextPerson });
          }}
          value={person.name}
        />
      </Field>
      <Button onClick={() => handleButtonClick("핸드폰")}>핸드폰</Button>
      <Button onClick={() => handleButtonClick("자동차")}>자동차</Button>
      <Button onClick={() => handleButtonClick("연필")}>연필</Button>
      <hr />
      <Button colorPallete={"red.500"}>리셋</Button>
      <ul>
        {person.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyApp43;
