import React from "react";
import { Box } from "@chakra-ui/react";

function MyApp30(props) {
  return (
    <div>
      <h5> 컴포넌트 색 !</h5>
      <Box h={5} bg={"cyan.400"}></Box>
      <Box h={5} bg={"blue.300"}></Box>
      <Box h={5} bg={"red.fg"}></Box>
      <Box h={5} bg={"purple.solid"}></Box>
      <Box h={5} bg={"green.600"}></Box>
      <Box h={5} bg={""}></Box>
      <h5>컴포넌트 크기 </h5>
      <Box bg={"blue.200"} h={"5"} w={"1/3"}>
        h2
      </Box>
      <Box bg={"blue.200"} h={"5"} w={"1/3"}>
        h2
      </Box>
      <Box bg={"blue.200"} h={"5"} w={"1/3"}>
        h2
      </Box>
      <Box width={"200px"} height={"100px"} bg={"green.300"}>
        차크라 ui 박스
      </Box>
      <Box w={"200px"} h={"100px"} bg={"green.300"} p={"2.5"} ml={"2.5"}>
        차크라 ui 박스
      </Box>
      <div
        style={{
          backgroundColor: "green",
          width: "200px",
          height: "100px",
          marginLeft: "10px",
        }}
      >
        컴포넌트
      </div>
    </div>
  );
}

export default MyApp30;
