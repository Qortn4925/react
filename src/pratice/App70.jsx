import React, { useState } from "react";
import axios from "axios";

function App70(props) {
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);
  return (
    <div>
      <input
        type="text"
        placeholder={"이름"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <input
        accept={"image/*"}
        type="file"
        multiple={true}
        onChange={(e) => setFiles(e.target.files)}
      />
      <button
        onClick={() => {
          axios.postForm("/api/main8/sub4", { name: name, files: files });
        }}
      >
        {" "}
        전송
      </button>
    </div>
  );
}

export default App70;
