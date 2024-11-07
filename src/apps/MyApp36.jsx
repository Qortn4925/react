import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp36(props) {
  // 리액트는 컴포넌트를 한 번 그리고 보통 다시 그리지 않음
  // 다시 화면에 그리는 상황은 : 상태가 변경되면 > 다시 화면에 그림 ,  상태(state) ?? (re render)
  // useState(): 로  상태를 관리함, 초기 상태 결정 , 상태를 저장한 변수와  , 상태를 변경하는 함수를 리턴함
  // useState();  배열을 리턴함 , 0번 인덱스에 , 상태를 저장한 변수 , 1번 인덱스에 상태를 변경하는 함수;
  // 상태는 직접 변경하면 안되고 , 함수를 통해서 변경을 할때만 > rerender함
  const [message, setMessage] = useState("처음 상태");
  let text = "hello";
  function fun1() {
    text = "안녕";
  }

  return (
    <div>
      <Button> 클릭</Button>
      <Box w={20} h={20} bg={"blue"} color={"white"} onClick={fun1}>
        {text}
      </Box>
      <Box
        bg={"purple.300"}
        onClick={() => {
          setMessage("셋함수를 이용한 상태 변경");
        }}
      >
        {message}
      </Box>
    </div>
  );
}

export default MyApp36;
