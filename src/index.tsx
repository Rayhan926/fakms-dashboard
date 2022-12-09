import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MasterDataProvider } from "./hooks/useMasterData";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MasterDataProvider>
      <App />
    </MasterDataProvider>
  </React.StrictMode>,
);
