import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function MyHome() {
  let location = useLocation();
  let navigate = useNavigate();
  let [params] = useSearchParams();
  console.log(params.toString());
  params.append("age", 33);
  console.log(params.toString());
  // console.log(location.search);
  return (
    <Box>
      <Button onClick={() => navigate("/?page=1")}>1</Button>
      <Button onClick={() => navigate("/?page=2")}>2</Button>
      <Button onClick={() => navigate("/?page=3")}>3</Button>
    </Box>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <MyHome />,
  },
]);
function MyApp75(props) {
  return <RouterProvider router={router} />;
}

export default MyApp75;
