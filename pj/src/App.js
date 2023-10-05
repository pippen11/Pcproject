import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Components from "./components/index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Components></Components>
    </BrowserRouter>
  );
};

export default App;
