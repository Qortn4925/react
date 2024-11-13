import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Box, Button, Input } from "@chakra-ui/react";

function MyHome() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  return (
    <Box>
      <Input
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("keyword", keyword);
          setParams(p);
        }}
      ></Button>
      <Button
        onClick={() => {
          // const p = new URLSearchParams();
          // p.append("keyword", keyword);
          // params.append("page", 1);
          // setParams(params);
          const nextParm = new URLSearchParams(params);
          nextParm.set("page", 1);
          setParams(nextParm);
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MyHome />,
  },
]);
function MyApp76(props) {
  return <RouterProvider router={router} />;
}

export default MyApp76;
