import React from "react";

function MyApp10(props) {
  const a = [
    { product: "우유", expired: false },
    { product: "chocolate", expired: true },
    { product: "pizza", expired: false },
    { product: "coffee", expired: true },
  ];
  const b = a.filter((item) => item.expired);
  console.log(b);
  return (
    <div>
      {a
        .filter((item) => item.expired)
        .map((item) => (
          <h1>{item.product}</h1>
        ))}
    </div>
  );
}

export default MyApp10;
