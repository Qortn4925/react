import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp68(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub1");
        }}
      >
        {" "}
        200 ok
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main7/sub2");
        }}
      >
        {" "}
        404
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main7/sub3");
        }}
      >
        20
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub4");
        }}
      >
        20
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main7/sub6");
        }}
      >
        ㅁㄴㅇ
      </Button>
      <br />
      <Button onClick={() => [axios.get("/api/main7/sub9")]}>405</Button>
      <Button onClick={() => [axios.get("/api/main7/sub10")]}>202</Button>
      <Button onClick={() => [axios.get("/api/main7/sub11")]}>403</Button>

      <Button
        onClick={() => [
          axios.get("/api/main7/sub12").catch((error) => {
            console.log("200번대 x");
            console.log(error);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.data.name);
          }),
        ]}
      >
        405
      </Button>
    </div>
  );
}

export default MyApp68;
