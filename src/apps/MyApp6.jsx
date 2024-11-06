import React from "react";

function MyApp6(props) {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
}

function Comp1() {
  console.log("자바스크립트 코드");
  // jsx 내에서 javascript 사용 가능  {} 안에 기술 된 내용은  jsp 로 인식하겠다
  // 출력용 으로 , 화면을 그리는 코드 안에서 출력할 내용이 있을때,
  //그래서 보통 ,  스트링, 넘버 , 배열
  const a = "hello";
  const d = { name: "son", age: 30 };
  return (
    <div>
      comp1
      {console.log("jsx내의 js 코드")}
      {/*/!*{d}* 오류/ }*/}
    </div>
  );
}

function Comp2() {
  const a = "donald";
  const b = 123.456;
  const c = ["apt", "black", "pink"];
  const d = { name: "rose", city: "seoul" };
  return (
    <div>
      <h2> Comp2 변수 리스트</h2>
      <ul>
        <li>{a}</li>
        <li>{b}</li>
        <li>{c[0]}</li>
        <li>{c[1]}</li>
        <li>{c[2]}</li>
        <li>{d.name}</li>
        <li>{d.city}</li>
      </ul>
    </div>
  );
}

function Comp3() {
  const a = "note";
  const b = 3.14;

  // attribute(property , prop)에 값으로 넣을 수 있다

  return (
    <div>
      <h1>{a}</h1>
      <h2 className={a}> {b}</h2>
      <input type="text" value={b} />
    </div>
  );
}

export default MyApp6;
