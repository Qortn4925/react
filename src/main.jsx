import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp24 from "./apps/MyApp24.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp24 />
  </StrictMode>,
);
