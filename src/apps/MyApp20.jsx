import React from "react";

function Comp1(price, title, author) {
  return (
    <div>
      <h3> comp</h3>
      <li>{title}</li>
      <li>{price}</li>
      <li>{author}</li>
    </div>
  );
}

function MyApp20(props) {
  const obj = {
    title: "채식주의자",
    price: 5000,
  };

  return (
    <div>
      <Comp1 {...obj} />
      <Comp1 {...obj} author={"한강"} />
    </div>
  );
}

export default MyApp20;
