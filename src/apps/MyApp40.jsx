import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyApp40(props) {
  const [text, setText] = useState("");
  const [list, setList] = useState(["latte", "americano", "mocha"]);
  const [items, setItems] = useState(["pizza", "돈까스", "우동"]);

  function handleKeyUp(e) {
    setText(e.target.value);
  }
  function handleButtonClick() {
    // state가 객체면 , 상태를 확인할때 참조값 검사를 해서
    // 참조값을 넘겨주면서 , >  참조값이 변화하지 않기 때문에 인식 몬함
    // 그래서 새로운 참조값을 만들어서 상태를 변경해야함
    setList(list);
  }
  function handleButtonClick2() {
    const newItems = [...items, "라멘"];
    setText(newItems);
  }

  return (
    <div>
      <Button onClick={handleButtonClick2}>add</Button>
      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>

      <Button>add</Button>
      <ul>
        {list.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <hr />
      <Input onKeyUp={handleKeyUp} />
    </div>
  );
}

export default MyApp40;
