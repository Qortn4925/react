import React from "react";
import { Icon, Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";
import { Checkbox } from "../components/ui/checkbox.jsx";
import { Radio, RadioGroup } from "../components/ui/radio.jsx";
import { Switch } from "../components/ui/switch.jsx";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "../components/ui/radio-card.jsx";
import { FaApplePay } from "react-icons/fa6";
import { BiLogoPaypal } from "react-icons/bi";
import { SiNaver, SiSamsungpay } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

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
      <h5> icons</h5>
      <FaApplePay />
      <BiLogoPaypal />
      <SiSamsungpay />
      <SiNaver />
      <h3> radio card</h3>
      <RadioCardRoot>
        <RadioCardLabel />

        <RadioCardItem
          indicator={null}
          label={"삼성"}
          value={2}
          icon={
            <Icon fontSize={"2xl"} color="fg.muted">
              <SiSamsungpay />
            </Icon>
          }
        />

        <RadioCardItem
          indicator={null}
          label={"애플 페이"}
          value={1}
          icon={
            <Icon fontSize={"2xl"} color="fg.muted">
              <FaApplePay />
            </Icon>
          }
        />

        <RadioCardItem
          indicator={null}
          label={"카카오 페이"}
          value={3}
          icon={
            <Icon fontSize={"2xl"} color="fg.muted">
              <RiKakaoTalkFill />
            </Icon>
          }
        />
      </RadioCardRoot>
    </div>
  );
}

export default MyApp28;
