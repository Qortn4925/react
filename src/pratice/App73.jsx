import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Comp1 />,
    children: [
      {
        path: "sub1",
        element: <p> comp1 sub1</p>,
      },
      {
        path: "sub2",
        element: <p> comp1 sub2</p>,
      },
    ],
  },
]);
function App73(props) {
  return <RouterProvider router={router} />;
}

function Comp1() {
  let nav = useNavigate();
  return (
    <Box>
      <Flex>
        <Box bg={"red.300"}>
          <Button
            onClick={() => {
              nav("/sub1");
            }}
          >
            sub1
          </Button>
        </Box>
        <Box bg={"blue.300"}>
          <Button
            onClick={() => {
              nav("/sub2");
            }}
          >
            sub1
          </Button>
        </Box>
      </Flex>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App73;
