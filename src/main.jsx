import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App37 from "./pratice/App37.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App37 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
