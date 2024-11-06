import React from "react";
import { Button } from "@chakra-ui/react";

function MyApp25(props) {
  return (
    <div>
      <Button colorPalette={"blue"} variant={"ghost"}>
        {" "}
        안녕
      </Button>
      <Button colorPalette={"teal"} variant={"surface"}>
        {" "}
        안녕
      </Button>
      <Button colorPalette={"purple"} variant={"subtle"}>
        {" "}
        안녕
      </Button>
      <Button colorPalette={"pink"} variant={"outline"}>
        {" "}
        안녕
      </Button>
    </div>
  );
}

export default MyApp25;
