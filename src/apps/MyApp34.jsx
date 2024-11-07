import React from "react";
import { Button } from "../components/ui/button.jsx";
import { toaster } from "../components/ui/toaster.jsx";

function MyApp34(props) {
  return (
    <div>
      <Button
        onCick={() => {
          toaster.create({
            title: "제목",
            description: "내용",
            duration: 1000,
          });
        }}
      >
        ㅇㄴㅇㄴ
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내메시지", type: "success" });
        }}
      >
        안녕
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내메시지", type: "warning" });
        }}
      >
        안녕
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내메시지", type: "info" });
        }}
      >
        안녕
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내메시지", type: "error" });
        }}
      >
        안녕
      </Button>
    </div>
  );
}

export default MyApp34;
