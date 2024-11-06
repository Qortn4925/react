import React from "react";

function MyApp19(props) {
  return (
    <div>
      <Comp address={"seoul"} city={"강남"} />
      <Comp city={"시티보이"} />
      <Comp address={"주소보이"} />
    </div>
  );
}

function Comp({ address = "서울", city = "기본값" }) {
  return (
    <div>
      <h3> comp</h3>
      <li>{address}</li>
      <li>{city}</li>
    </div>
  );
}
export default MyApp19;
