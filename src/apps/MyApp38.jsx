import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp38(props) {
  const [boxColor, setBoxColor] = useState("gray.200");
  return (
    <div>
      <Button colorPalette={"red"} onClick={() => setBoxColor("red.500")}>
        빨강
      </Button>
      <Button colorPalette={"blue"} onClick={() => setBoxColor("blue.500")}>
        파랑
      </Button>
      <Button colorPalette={"yellow"} onClick={() => setBoxColor("yellow.500")}>
        노랑
      </Button>

      <Box bg={boxColor} h={20}>
        박스
      </Box>
    </div>
  );
}

export default MyApp38;
