import React from "react";

function MyApp24(props) {
  return (
    <div>
      <Box color="yellow" bg="black" text="대통령은 누굴까" />
      <Box color="blue" bg="black" text="해리스다" />
      <Box color="beige" bg="black" text="트럼프다" />
    </div>
  );
}

function Box({ color, bg, text }) {
  return <div style={{ color: color, backgroundColor: bg }}>{text}</div>;
}

export default MyApp24;
