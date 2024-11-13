import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const router = createBrowserRouter({
  path: "/",
  elemnet: <WholePage />,
  children: [
    { indext: true, element: <div> home</div> },
    { path: "sub1", element: <div> sub1</div> },
    { path: "sub2", element: <div>sub2</div> },
  ],
});
function MyApp72(props) {
  return <RouterProvider router={router} />;
}

function WholePage() {
  return (
    <Box>
      <Box>
        <Flex>
          <Box>navbar</Box>
          <Box>
            <Link to={"/"}>sub1</Link>
          </Box>
          <Box>
            <a href="/sub2"> sub2</a>{" "}
          </Box>
        </Flex>
      </Box>
      <hr />
      <Outlet />
    </Box>
  );
}
export default MyApp72;
