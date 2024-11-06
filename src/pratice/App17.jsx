import React from "react";

function MyCom(props) {
  props.fun1();
  return (
    <div>
      <h3> wnth : {props.address}</h3>
      <h3> 나이: {props.age}</h3>
      <input type="text" readOnly={props.readonly} value={3} />
      <ul>
        {props.list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <hr />
      <h3>상품병 :{props.product.name}</h3>
      <h3>rkrur :{props.product.price}</h3>
    </div>
  );
}

function App17(props) {
  return (
    <div>
      <MyCom
        address={"주소"}
        age={31}
        readonly={true}
        fun1={() => {
          console.log("실행할 함수");
        }}
        list={[1, 2, 3, 4]}
        product={{ prodcut: "상품", price: 10.0 }}
      />
    </div>
  );
}

export default App17;
