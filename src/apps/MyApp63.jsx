import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp63(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main3/sub1");
        }}
      >
        get1
      </Button>
    </div>
  );
}

export default MyApp63;
