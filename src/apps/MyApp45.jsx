import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp45(props) {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    // >이래도 1 만 증가됨
    // setNumber(number + 1);
    // setNumber(number + 1);
    // setNumber(number + 1);
    // 이러면 , 3씩 증가되는데 // 값이 변화 할떄마다 출력되니까 > 컴포넌트가 3번 출력하냐?
    //  그게 아님 리액트는 적절한 순간에 판단해서 다시 그리는데, 이경우, 그냥 마지막 값만 출력
    // 하면 되니까 다시 그리지 않음
    setNumber(number + 1);
    setNumber(number + 2);
    setNumber(number + 3);
  };
  console.log("컴포넌트 함수 호출 됨");
  return (
    <div>
      <Button onClick={handleClick}>증가 {number}</Button>
    </div>
  );
}

export default MyApp45;
