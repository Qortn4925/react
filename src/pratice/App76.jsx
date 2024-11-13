import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function App76(props) {
  const [keyword, setKeyword] = useState();
  const [params, setParams] = new URLSearchParams();

  return (
    <Box>
      <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("keyword", keyword);
          setParams(p);
        }}
      ></Button>
      <br />
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("page", 1);
          setParams(p);
        }}
      >
        1
      </Button>
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("page", 2);
          setParams(p);
        }}
      >
        2
      </Button>
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("page", 3);
          setParams(p);
        }}
      >
        3
      </Button>
    </Box>
  );
}

export default App76;
