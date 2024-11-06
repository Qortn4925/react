import React from "react";

function MyApp7(props) {
  //boolean 은 그냥 출력은 되지 않고
  // attriubte 에 적용 여부는 결정해줌
  //  readonly false: > 굳이 출력 안함
  // 변수의 값으로 컴포넌트를 받을수 있다.
  const c = <Comp1 />;
  return (
    <div>
      {c}
      <Comp1 />
    </div>
  );
}

function Comp1() {
  return (
    <div>
      <h1>컴포넌트1</h1>
    </div>
  );
}

export default MyApp7;
