import React, { useState } from "react";
import axios from "axios";

function App69(props) {
  const [title, setTitle] = useState("");
  const [attached, setAttached] = useState(null);
  const handleClick = () => {
    axios.postForm("/api/main8/sub2", { title: title, attached: attached });
  };
  return (
    <div>
      <input
        type="text"
        placeholder={"제목"}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="file"
        placeholder={"파일선택"}
        onChange={(e) => setAttached(e.target.files[0])}
      />
      <button onClick={handleClick}>전송</button>
    </div>
  );
}

export default App69;
