import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input } from "@chakra-ui/react";

function App41(props) {
  const [book, setBook] = useState({ title: "", content: "" });

  function fun1(e) {
    book.title = e.target.value;
    console.log(book.title);
    const Book = { ...book };
    // Book.title = e.target.value;
    setBook(Book);
  }
  function fun2(e) {
    const Book = { ...book };
    Book.content = e.target.value;
    setBook(Book);
  }

  return (
    <div>
      <Field label={"제목"}>
        <Input onKeyUp={fun1} />
      </Field>
      <Field label={"본문"}>
        <Input onKeyUp={fun2} />
      </Field>

      <Field label={"제목"} readOnly>
        <Input value={book.title} />
      </Field>

      <Field label={"본문"} readOnly>
        <Input value={book.content} />
      </Field>
    </div>
  );
}

export default App41;
