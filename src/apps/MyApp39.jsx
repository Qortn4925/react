import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp39(props) {
  const [hide, setHide] = useState("숨기기");
  const [show, setShow] = useState(true);

  function handelButtonClick() {
    if (hide === "숨기기") setHide("보이기");
    else {
      setHide("숨기기");
    }
    setShow(!show);
  }

  return (
    <div>
      <Button onClick={handelButtonClick}>{hide}</Button>
      <Box h={20} bg={"blue.300"} dispaly={show ? "block" : "none"}>
        박스
      </Box>
    </div>
  );
}

export default MyApp39;
