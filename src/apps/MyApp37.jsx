import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp37(props) {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <Box> number:{number}</Box>
      <Button
        onClick={() => {
          setNumber(number + 1);
        }}
        증가
      ></Button>

      <Button
        onClick={() => {
          setNumber(number - 1);
        }}
        감소
      ></Button>
    </div>
  );
}

export default MyApp37;
