import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function Comp1() {
  return (
    <Box>
      <p> 여기는 com1</p>
    </Box>
  );
}
function Comp2() {
  return (
    <Box>
      <p> 여기는 comp2</p>
    </Box>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> 여기는 홈 페이지</div>,
  },
  {
    path: "/path1",
    element: (
      <div>
        {" "}
        여기는 1번 경로 <hr /> <Outlet />{" "}
      </div>
    ),
    children: [
      { path: "", element: <div> 경로1 메인</div> },
      { path: "sub1", element: <p>sub1</p> },
      { path: "sub2", element: <p>sub2</p> },
    ],
  },
  { path: "/path2", element: <div>여기는 2번 경로</div> },
  {
    path: "/path3",
    element: (
      <div>
        <Comp1 /> <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <p> 인덱스</p> },
      { path: "sub1", element: <p> sub1 </p> },
      { path: "sub2", element: <p> sub2 </p> },
    ],
  },
]);
function MyApp71(props) {
  return <RouterProvider router={router} />;
}

export default MyApp71;
