import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { Box, Input } from "@chakra-ui/react";

function MyApp66(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState(null);

  const handleButtonClick = () => {
    axios
      .get(`/api/main6/sub1/${customerId}`)
      .then((res) => setCustomer(res.data));
  };
  return (
    <div>
      <Field label={"고객번호"}>
        <NumberInputRoot
          value={customerId}
          onValueChange={(e) => setCustomerId(e.value)}
        >
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleButtonClick}>조회</Button>
      <CustomerView customer={customer} />
    </div>
  );
}
function CustomerView({ customer }) {
  if (!customer) {
    return (
      <Box>
        {" "}
        <p>조회된 고객이 없습니다.</p>
      </Box>
    );
  }
  return (
    <Box>
      <Field readOnly label={"id"}>
        <Input value={customer.id} />
      </Field>
      <Field readOnly label={"이름"}>
        <Input value={customer.name} />
      </Field>
      <Field readOnly label={"주소"}>
        <Input value={customer.address} />
      </Field>
      <Field readOnly label={"계약명"}>
        <Input value={customer.contact} />
      </Field>
      <Field readOnly label={"도시"}>
        <Input value={customer.city} />
      </Field>
      <Field readOnly label={"국가"}>
        <Input value={customer.country} />
      </Field>
      <Field readOnly label={"우편번호"}>
        <Input value={customer.postalCode} />
      </Field>
    </Box>
  );
}

export default MyApp66;
