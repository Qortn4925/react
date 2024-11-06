import React from "react";

function Compp1(props) {
  return (
    <div>
      {props.children}
      {props.children}
    </div>
  );
}

function Comp2({ a, b, c, children }) {
  return (
    <div>
      <h1> com2</h1>
      {/*  세 개의 li 출력되도록 */}
      <li>{a}</li>
      <li>{b}</li>
      <li>{c}</li>
      {children}
    </div>
  );
}

function App22(props) {
  return (
    <div>
      <Compp1>
        <h3>Lorem ipsum dolor.</h3>
        <p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aperiam blanditiis dolore doloribus enim error labore
            provident quasi sequi ut. Consequuntur cumque libero, magni nisi
            quos ratione reprehenderit vero voluptatum?
          </span>
        </p>
      </Compp1>
      <Comp2>
        <li>Lorem ipsum.</li>
        <li>Fuga, placeat.</li>
        <li>Iste, minima.</li>
      </Comp2>
    </div>
  );
}

export default App22;
