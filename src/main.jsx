import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppGlobalContext } from "./Context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppGlobalContext>
    <App></App>
  </AppGlobalContext>
);
