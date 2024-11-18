import React from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";

function MyApp80(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("api/main9/sub1");
        }}
      >
        {" "}
        jwt 얻기
      </Button>
    </div>
  );
}

export default MyApp80;
