import React, { useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

const router = createBrowserRouter({
  path: "/",
  elemnet: <WholePage />,
  children: [
    { index: true, element: <div> home</div> },
    { path: "sub1", element: <div> sub1</div> },
    { path: "sub2", element: <div>sub2</div> },
  ],
});
function MyApp73(props) {
  return <RouterProvider router={router} />;
}

function WholePage() {
  const [count, setCount] = useState();
  let nav = useNavigate();
  return (
    <Box>
      <Box>
        <Flex>
          <Box>navbar</Box>
          <Box>
            <Button onClick={() => nav("/")}>sub1</Button>
          </Box>
          <Box>
            <Button onClick={() => nav("sub1")}>sub1</Button>
          </Box>
          <Button onClick={() => nav("/sub2")}>sub1</Button>
        </Flex>
      </Box>
      <Outlet />
    </Box>
  );
}

export default MyApp73;
