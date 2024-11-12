import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub1", { name: "son", age: 99 });
        }}
      >
        {" "}
        버튼
      </Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub22", {
            title: "채식",
            author: "한강",
            content: "비건",
            price: 15000,
            quantity: 3,
          });
        }}
      >
        {" "}
        sub22
      </Button>
    </div>
  );
}

export default MyApp62;
