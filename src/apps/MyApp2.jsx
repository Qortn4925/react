// component
// 함수를 만드는데 > 함수 이름이 컴포넌트 명 > 리턴에는 그려야 하는것
function MyComponent() {
  // root 태그는 하나만 존재 , 가장 상위에 존재하는 태그는 하나만
  // 여러 줄로 작성시   ()  꼭 사용
  // return <p>안녕</p> <p>안녕</p  >> 오류 >
  return (
    <div>
      <p> 안녕</p>
      <p> 안녕</p>
    </div>
  );
}

function MyApp2() {
  //react component

  // 만든 component
  // : 함수로 만들어짐
  //  , 컴포넌트명 대문자 시작

  // buillt-in component
  // : 이미 존재하는 html 요소들
  // 소문자 > built-in
  //component 사용시 종료태그 꼭 작성 ,
  // (empty) 태크는 시작태그에 / 꼭 작성

  return (
    <div>
      hello
      <br />
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent></MyComponent>
    </div>
  );
}

export default MyApp2;
