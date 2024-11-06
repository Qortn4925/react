import React from "react";

function MyApp4(props) {
  //최상위 컴포넌트가 하나 있어야함 , 동일 위치에 있는 컴포가 있으면 안됨
  // + 종료 태그 !!
  // 코드가 자바스크립트로 바뀌어서 ,  자바스크립트 키워드를 사용할수 업슴
  // html attribute 를 대체 사용 해야함
  // : class ->  className
  // : lable for > htmlFor
  // style: 은 객체로 주어야함
  //  주석 !   {/* */}  > ctrl+ /

  return (
    <div className="note">
      <div style={{ color: "yellow", backgroundCcolor: "blue" }}>안녕</div>
      hello4
      <label htmlFor="input1">이름</label>
      <input type="text" id="input1" />
    </div>
  );
}

export default MyApp4;
