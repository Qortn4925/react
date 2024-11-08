import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";

function App40(props) {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  function fun1() {
    const a = numbers[numbers.length - 1];

    const newArr = [...numbers, a + 1];
    setNumbers(newArr);
  }
  function fun2() {
    const a = numbers[numbers.length - 1];
    const newArr = numbers.filter((i) => i < a);
    // 배열에 pop 있음 ,,
    setNumbers(newArr);
  }

  return (
    <div>
      <Button onClick={fun1}>추가</Button>
      <Button onClick={fun2}>삭제</Button>
      <ul>
        {numbers.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App40;
