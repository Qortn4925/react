import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { Table } from "@chakra-ui/react";

function MyBookTableView({ books }) {
  if (!books || books.length == 0) {
    return <div>책 목록을 조회해 주세요.</div>;
  }
  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>title</Table.ColumnHeader>
            <Table.ColumnHeader>content</Table.ColumnHeader>
            <Table.ColumnHeader> price</Table.ColumnHeader>
            <Table.ColumnHeader> author</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {books.map((book) => (
            <Table.Row>
              <Table.Cell>{book.title}</Table.Cell>
              <Table.Cell>{book.content}</Table.Cell>
              <Table.Cell>{book.price}</Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}

function MyApp65(props) {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <MyBookTableView books={books} />
      <Button
        onClick={() => {
          axios.get("/api/main5/sub10").then((res) => {
            setBooks(res.data);
          });
        }}
      >
        {" "}
        btn10
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub1")
            .then((response) => {
              response.data;
            })
            .then((data) => {
              console.log(data);
            });
        }}
      >
        {" "}
        BTN2
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub3")
            .then((response) => response.data)
            .then((data) => console.log(data));
        }}
      >
        btn3
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub4")
            .then((r) => r.data)
            .then((d) => {
              console.log(d);
              console.log(d.age); // d= json을 parsing한 객체
            });
        }}
      >
        {" "}
        직렬화
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub5")
            .then((r) => r.data)
            .then((d) => {
              console.log(d.title, d.content, d.price, d.available);
            });
        }}
      >
        {" "}
        직렬화 테
      </Button>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub6")
            .then((r) => r.data)
            .then((d) => {
              console.log(
                d.name,
                d.items[0],
                d.items[1],
                d.team.name,
                d.team.location,
              );
            });
        }}
      >
        {" "}
        다양한 리턴
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub7")
            .then((res) => res.data)
            .then((d) => {
              console.log(d.product.name);
              console.log(d.product.price);
              console.log(d.company.location[0]);
              console.log(d.company.location[1]);
              console.log(d.product.quantity);
            });
        }}
      >
        btn7
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub8")
            .then((res) => {
              res.data;
            })
            .then((d) => console.log(d));
        }}
      >
        btn8
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub9")
            .then((res) => res.data)
            .then((data) => {
              console.log(data);
              console.log(data.name);
              console.log(data.address);
              console.log(data.married);
              console.log(data.items[0]);
              console.log(data.items[1]);
              console.log(data.company.name);
              console.log(data.company.location);
            });
        }}
      >
        내 버튼
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub10")
            .then((res) => res.data)
            .then((d) => {
              console.log(d[0].title);
              console.log(d[0].price);
              console.log(d[0].content);
              console.log(d[0].author);

              console.log(d[1].title);
              console.log(d[1].price);
              console.log(d[1].content);
              console.log(d[1].author);

              console.log(d[2].title);
              console.log(d[2].price);
              console.log(d[2].content);
              console.log(d[2].author);
            });
        }}
      >
        {" "}
        자바빈 배열
      </Button>
    </div>
  );
}

export default MyApp65;
