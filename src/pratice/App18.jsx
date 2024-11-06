import React from "react";

function App18(props) {
  return (
    <div>
      <Comp1
        product={{ name: "pizza", price: 3000 }}
        title="소년이운다"
        content={"518"}
        author={"한강"}
      />
    </div>
  );
}

function Comp1({ product, title, content, author }) {
  const { name, price } = product;
  return (
    <div>
      <h3> {name}</h3>
      <h3> {price}</h3>
      <h3>{title}</h3>
      <h3> {content}</h3>
      <h3>{author}</h3>
    </div>
  );
}

export default App18;
