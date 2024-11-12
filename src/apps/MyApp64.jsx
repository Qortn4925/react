import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp64(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/kim");
        }}
      >
        경로 데이터(path variable)
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/son");
        }}
      >
        경로 데이터(path variable)2
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main4/sub2/9000");
        }}
      >
        경로 데이터(path variable)3
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main4/sub3/ny");
        }}
      >
        경로 데이터(path variable) 주소
      </Button>
    </div>
  );
}

export default MyApp64;
