import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";

function MyBox({ color }) {
  return (
    <>
      {" "}
      <Box
        w={{ base: "100%", md: "3/6", lg: "1/3" }}
        style={{ height: "80px", backgroundColor: color }}
      >
        1
      </Box>
    </>
  );
}

function MyApp32(props) {
  return (
    <div>
      <HStack>
        <Box border={"5px solid black"} w={"1/3"}>
          가
        </Box>
        <Box border={"5px solid black"} w={"1/3"}>
          나
        </Box>
        <Box border={"5px solid black"} w={"1/3"}>
          다
        </Box>
      </HStack>
      <Flex wrap={"wrap"}>
        <MyBox color={"orange"} />
        <MyBox color={"cyan"} />
        <MyBox color={"blue"} />

        <hr />

        <Box
          w={{ base: "100%", md: "3/6", lg: "1/3" }}
          style={{ height: "80px", backgroundColor: "cyan" }}
        >
          2
        </Box>
        <Box
          w={{ base: "100%", md: "3/6", lg: "1/3" }}
          style={{ height: "80px", backgroundColor: "blue" }}
        >
          3
        </Box>
      </Flex>
      <Flex justify={"space-evenly"}>
        <div style={{ height: "80px", backgroundColor: "orange" }}>1</div>
        <div style={{ height: "80px", backgroundColor: "cyan" }}>2</div>
        <div style={{ height: "80px", backgroundColor: "blue" }}>3</div>
      </Flex>
      <hr />
      <Flex wrap={"wrap"}>
        <Box
          w={{ base: "100%", md: "3/6", lg: "1/3" }}
          style={{ height: "80px", backgroundColor: "orange" }}
        >
          1
        </Box>
        <Box
          w={{ base: "100%", md: "3/6", lg: "1/3" }}
          style={{ height: "80px", backgroundColor: "cyan" }}
        >
          2
        </Box>
        <Box
          w={{ base: "100%", md: "3/6", lg: "1/3" }}
          style={{ height: "80px", backgroundColor: "blue" }}
        >
          3
        </Box>
      </Flex>
      <Flex justify={"space-evenly"}>
        <div style={{ height: "80px", backgroundColor: "orange" }}>1</div>
        <div style={{ height: "80px", backgroundColor: "cyan" }}>2</div>
        <div style={{ height: "80px", backgroundColor: "blue" }}>3</div>
      </Flex>

      <div style={{ display: "flex" }}>
        <h5> 컴포넌트 배치 </h5>
        <div style={{ height: "80px", backgroundColor: "orange" }}>1</div>
        <div style={{ height: "80px", backgroundColor: "cyan" }}>2</div>
        <div style={{ height: "80px", backgroundColor: "blue" }}>3</div>
      </div>
      <div>
        <h5> 컴포넌트 배치 </h5>
        <div style={{ height: "80px", backgroundColor: "orange" }}>1</div>
        <div style={{ height: "80px", backgroundColor: "cyan" }}>2</div>
        <div style={{ height: "80px", backgroundColor: "blue" }}>3</div>
      </div>
    </div>
  );
}

export default MyApp32;
