import React from "react";
import { Box, HStack } from "@chakra-ui/react";

function App34(props) {
  return (
    <div>
      <HStack>
        <Box
          bg={"orange"}
          onClick={(e) => {
            console.log(e.target.innerText);
          }}
        >
          Lorem ipsum dolor.
        </Box>
        <Box
          bg={"blue"}
          onClick={(e) => {
            console.log(e.target.innerText);
          }}
        >
          1 ipsum dolor.
        </Box>
        <Box
          bg={"teal"}
          onClick={(e) => {
            console.log(e.target.innerText);
          }}
        >
          {" "}
          dolor.
        </Box>
      </HStack>
    </div>
  );
}

export default App34;
