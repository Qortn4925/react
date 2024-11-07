import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function App39(props) {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("blue.300");

  function fun1() {
    if (count === 3) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
    switch (count) {
      case 1:
        setColor("blue.300");
        break;
      case 2:
        setColor("red.300");
        break;
      case 3:
        setColor("yellow.300");
        break;
    }

    // setCount(count%3+1) >> , 1,2,3,1,2,3,12,3,1,2,3
  }

  return (
    <div>
      <Button onClick={fun1} bg={color}>
        {count}
      </Button>
      <Box h={20} bg={color}>
        {count}
      </Box>

      {/*<Box h={20} bg={"red.300"} display={count === 2 ? "block" : "none"}>*/}
      {/*  {count}*/}
      {/*</Box>*/}
      {/*<Box h={20} bg={"yellow.300"} display={count === 3 ? "block" : "none"}>*/}
      {/*  {count}*/}
      {/*</Box>*/}

      {/* 이렇게 작성하면 호출되는 양이 줄음, 하는일은 똑같고 */}
      {/*{count === 1 && (*/}
      {/*  <Box h={20} bg={"blue.300"} display={count === 1 ? "block" : "none"}>*/}
      {/*    1*/}
      {/*  </Box>*/}
      {/*)}*/}
    </div>
  );
}

export default App39;
