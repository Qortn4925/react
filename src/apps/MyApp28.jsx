import React from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";
import { Checkbox } from "../components/ui/checkbox.jsx";
import { Radio, RadioGroup } from "../components/ui/radio.jsx";
import { Switch } from "../components/ui/switch.jsx";

function MyApp28(props) {
  return (
    <div style={{ margin: "10px" }}>
      <Field label="Email" required>
        <Input placeholder="me@example.com" variant="subtle" />
      </Field>
      <Input placeholder="이메일을 입력해주세요" bg="blue.200" />
      <hr />
      <input type="text" placeholder={"이메일을 입력해주세요"} />
      <hr />
      <RadioGroup>
        <Radio> 1</Radio>
        <Radio> 2</Radio>
        <Radio> 3</Radio>
      </RadioGroup>
      <Checkbox> hi</Checkbox>
      <Textarea
        variant={"subtle"}
        placeholder={"자기소개 100자"}
        colorPalette={"green"}
        bg={"green.300"}
      />

      <h5> switch</h5>
      <Switch variant="raised" colorPalette="purple">
        {" "}
        Label
      </Switch>
    </div>
  );
}

export default MyApp28;
