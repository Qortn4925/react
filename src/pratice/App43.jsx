import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const originPerson = {
  name: "홍길동",
  info: {
    address: "서울",
    email: "gmail",
    description: "자기소갱",
  },
};
function App43(props) {
  const [person, setPerson] = useState(originPerson);

  function fun1(e) {
    const Person = { ...person };
    Person.info = { ...person.info, address: e.target.value };
    setPerson({ ...Person });
  }

  function fun2(e) {
    const Person = { ...person };
    Person.info = { ...person.info, email: e.target.value };
    setPerson({ ...Person });
  }
  function fun3(e) {
    const Person = { ...person };
    Person.info = { ...person.info, description: e.target.value };
    setPerson({ ...Person });
  }
  function fun4() {
    setPerson(originPerson);
  }
  return (
    <div>
      <Field label={"이름"}>
        <Input
          onChange={(e) => {
            setPerson({ ...person, name: e.target.value });
          }}
          value={person.name}
        />
      </Field>
      <Field label={"주소"}>
        <Input onChange={fun1} value={person.info.address} />
      </Field>
      <Field label={"이메일"}>
        <Input onChange={fun2} value={person.info.email} />
      </Field>{" "}
      <Field label={"자기소갱"}>
        <Textarea onChange={fun3} value={person.info.description} />
      </Field>
      <Button colorPalette={"red"} variant={"surface"} onClick={fun4}>
        리셋
      </Button>
    </div>
  );
}

export default App43;
