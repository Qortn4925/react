import React from "react";

function App19(props) {
  return (
    <div>
      <MyComp title={"채식주의자"} content={"비건"} author={"한강"} />
      <MyComp title={"채식주의자"} content={"비건"} />
      <MyComp title={"채식주의자"} author={"한강"} />
      <MyComp author={"한강"} />
    </div>
  );
}

function MyComp({ title = "기본 제목", content = "내용", author = "한강" }) {
  return (
    <div>
      {title},{content},{author}
    </div>
  );
}
export default App19;
