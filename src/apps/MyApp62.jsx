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

      <Button
        onClick={() => {
          axios.post("/api/main2/sub3", {
            name: "son",
            age: 99,
            married: true,
            items: ["1", "2", "3"],
            team: { name: "토트넘", location: "런던" },
          });
        }}
      >
        {" "}
        sub22
      </Button>

      <Button
        onClick={() => {
          axios.post("api/main2/sub4", {
            id: 10,
            name: "상품명",
            availiable: false,
            shops: ["낄낄1", "낄낄2"],
            attributes: { name: "헬로우", value: "지역" },
          });
        }}
      >
        프로덕트
      </Button>

      <Button
        onClick={() => {
          axios.post("api/main2/sub5", ["coffee", "latte", "mocah"]);
        }}
      >
        {" "}
        배열
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub6", [
            { name: "1", age: 5 },
            { name: "hello", age: 15 },
            { name: "gkgkgk", age: 333 },
          ]);
        }}
      >
        자바빈 객체 배열
      </Button>

      <Button
        onClick={() => {
          axios.post("api/main2/sub7", [
            {
              title: "제목",
              author: "작성자",
              content: "내용",
              price: 155,
              quantity: 3,
            },
            {
              title: "제목1",
              author: "작성자1",
              content: "내용1",
              price: 155,
              quantity: 3,
            },
          ]);
        }}
      >
        북{" "}
      </Button>
    </div>
  );
}

export default MyApp62;
