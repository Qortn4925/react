import React from "react";

function MyApp78(props) {
  /*  >>  react hook!     , 작성 순서대로
  const [, set] = useState();
  useEffect(() => {}, []);
  useParams();
  useSearchParams();
  const [, update] = useImmer();
  useLocation();
    hook 사용시 ,
    // 정확히 같은 순서로 실행되어야 함! , 순서로 인식해서
    조건문, 반복문 , 내에서 사용하면 안됨
    함수 컴포넌트  코드 가장 상위에  작성하는게 관습

   */
  const list = ["coffee", "latte", "mocha"];

  return (
    <div>
      {/* 키 프롭을 이용해서  > 다시그릴건지, 새로 그릴건지 구분하기때문에 , */}
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}

export default MyApp78;
