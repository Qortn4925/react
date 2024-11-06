import React from "react";

function MyApp13(props) {
  return <div> </div>;
}

const a = "hello";
const b = 3.14;
export { a };
export { b };
// export {a,b};

// 이름이 잇는 export  > 받기 편할라고 , ?
// default 는  unnamed
// 파일 내에 하나만 존재함 , > 여러개 존재하면 구분 할수 없으니까
export default MyApp13;
