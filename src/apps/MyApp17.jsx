import React from "react";

function Comp2() {
  return <h1> 컴프 2</h1>;
}

function MyApp17(props) {
  return (
    <div>
      <Comp
        name={"hello"}
        age={3.14}
        foods={["pizza", "burger"]}
        book={{ title: "소년이 온다", author: "한강" }}
        info={function () {
          console.log("프랍으로 넘긴 함수");
        }}
        desc={() => console.log("프랍 애로우 ")}
        elem={<Comp2 />}
      />
    </div>
  );
}

function Comp(props) {
  console.log(props.name);
  console.log(props.book.title, props.book.author);
  props.info();
  props.desc();
  return <div></div>;
}
export default MyApp17;
