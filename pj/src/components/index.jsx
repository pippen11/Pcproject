import { Routes, Route } from "react-router-dom";
import Main from "./main";
import RegistContainer from "./registAccount/RegistContainer";
const Components = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main></Main>}></Route>
      <Route
        path="/registAccount"
        element={<RegistContainer></RegistContainer>}
      ></Route>
    </Routes>
  );
};

export default Components;
