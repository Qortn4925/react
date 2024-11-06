import React from "react";

function App24(props) {
  return (
    <div>
      <MyButton color={"yellow"}>클릭할까?</MyButton>
      <hr />
      <MyButton color={"blue"}>클릭</MyButton>
    </div>
  );
}

function MyButton({ color, children }) {
  return <button style={(color = { color })}>{children}</button>;
}

export default App24;
