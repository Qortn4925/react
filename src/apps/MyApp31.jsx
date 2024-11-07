import React from "react";
import { Box } from "@chakra-ui/react";

function MyApp31(props) {
  return (
    <div>
      <h5> 반응형 responsive design</h5>
      <Box
        h={5}
        bg={{
          base: "gray.300",
          sm: "cyan.subtle",
          md: "orange",
          lg: "blue.subtle",
          xl: "purple.200",
          "2xl": "red.300",
        }}
      ></Box>

      <Box
        h={5}
        w={{ sm: "5/6", md: "2/3", lg: "50%", xl: "1/3", "2xl": "1/4" }}
        bg={"orangered"}
      ></Box>
    </div>
  );
}

export default MyApp31;
