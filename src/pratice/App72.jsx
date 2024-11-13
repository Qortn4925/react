import React from "react";

import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

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
function App72(props) {
  return <RouterProvider router={router} />;
}

function Comp1() {
  return (
    <Box>
      <Flex>
        <Box bg={"red.300"}>
          <Link to="/sub1"> sub1</Link>
        </Box>
        <Box bg={"blue.300"}>
          <Link to="/sub2"> sub2</Link>
        </Box>
      </Flex>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App72;
