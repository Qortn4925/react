import React, { useState } from "react";
import axios from "axios";

function MyApp70(props) {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState();

  const fun1 = () => {
    axios.postForm("/api/main8/sub3", { title: title, files: files });
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="file"
        multiple={true}
        onChange={(e) => setFiles(e.target.files)}
      />
      <button onClick={fun1}> 전송</button>
    </div>
  );
}

export default MyApp70;
