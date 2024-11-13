import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomeContent /> },
      { path: "sub1", element: <SubContent1 /> },
      { path: "sub2", element: <SubContent2 /> },
    ],
  },
]);
function MyApp74(props) {
  return <RouterProvider router={router} />;
}

function HomeContent({}) {
  return <Box> 홈 페이지 1</Box>;
}

function SubContent1() {
  return <Box> sub 1</Box>;
}
function SubContent2() {
  return <Box> sub2</Box>;
}
function Navbar() {
  let navigate = useNavigate();
  return (
    <Flex gap={5}>
      <Box onClick={() => navigate("/")}> home</Box>
      <Box onClick={() => navigate("/sub1")}> sub1</Box>
      <Box onClick={() => navigate("/sub2")}> sub2</Box>
    </Flex>
  );
}
function RootPage() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default MyApp74;
