import React from "react";

function Comp({ score, name }) {
  return (
    <div>
      <li> {score}</li>
      <li> {name}</li>
      <li></li>
    </div>
  );
}

function Comp2({ city, mail, children }) {
  return (
    <div>
      <li> {city}</li>
      <li> {mail}</li>
      <li> {children}</li>
    </div>
  );
}

function Comp3(props) {
  return <div>{props.children}</div>;
}

function MyApp22(props) {
  return (
    <div>
      <Comp score={99} name={"faker"} />
      <hr />
      {/* 안에 내용은 childer prop 으로 전달 */}
      <Comp>some Context </Comp>

      <Comp2 city={"city"} mail={"gmail"}>
        안녕
      </Comp2>
      <Comp3>
        <h2>Lorem ipsum dolor.</h2>
        <p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            dolore doloremque eligendi expedita, facere hic id laboriosam nam,
            quas quia quidem quis reiciendis saepe similique, vel. Repudiandae
            suscipit veniam veritatis.
          </span>
        </p>
      </Comp3>
    </div>
  );
}

export default MyApp22;
