import React from "react";

function App10(props) {
  const a = [
    { name: "son", age: 30 },
    { name: "rose", age: 10 },
    { name: "faker", age: 40 },
    { name: "hankang", age: 50 },
    { name: "lee", age: 20 },
    { name: "kim", age: 70 },
  ];
  return (
    <div>
      {a
        .filter((e) => e.age >= 30)
        .forEach((k) => (
          <h1>{k.name}</h1>
        ))}
    </div>
  );
}

export default App10;
