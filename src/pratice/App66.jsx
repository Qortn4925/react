import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { Box, Input } from "@chakra-ui/react";

function App66(props) {
  const [supplierId, setSupplierId] = useState(0);
  const [supplier, setSupplier] = useState(null);

  function handleButton() {
    axios
      .get(`api/main6/sub2/${supplierId}`)
      .then((res) => setSupplier(res.data));
  }

  return (
    <div>
      <Field label={"번호"}>
        <NumberInputRoot
          value={supplierId}
          onValueChange={(e) => setSupplierId(e.value)}
        >
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleButton}>조회</Button>
      <ViewSupplier supplier={supplier} />
    </div>
  );
}

function ViewSupplier({ supplier }) {
  if (!supplier) {
    return (
      <div>
        <p> 번호를 다시 조회 해보세요</p>
      </div>
    );
  }
  return (
    <Box>
      <Field>
        <Input value={supplier.id} />
      </Field>
      <Field>
        <Input value={supplier.address} />
      </Field>
      <Field>
        <Input value={supplier.city} />
      </Field>
      <Field>
        <Input value={supplier.contact} />
      </Field>
      <Field>
        <Input value={supplier.country} />
      </Field>
      <Field>
        <Input value={supplier.name} />
      </Field>
      <Field>
        <Input value={supplier.phone} />
      </Field>
      <Field>
        <Input value={supplier.postalCode} />
      </Field>
    </Box>
  );
}

export default App66;
