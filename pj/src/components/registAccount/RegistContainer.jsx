import { useEffect, useState } from "react";
import RegistComponent from "./ResgistComponent";
import axios from "axios";

const RegistContainer = () => {
  const [idMessage, setIdMessage] = useState(null);
  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [pwMessage, setPwMessage] = useState(null);
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  useEffect(() => {
    console.log(idInput);
  }, [idInput]);
  // useEffect로 idInput값 변환될때 인식해서 콘솔바로 찍어줌

  const idFunc = (value) => {
    setIdInput(value);
    const idRegExp = /^[a-zA-Z0-9]{6,13}$/;
    // 정규표현식 .test내장메서드가있음
    if (!idRegExp.test(value)) {
      setIdMessage("6-13사이 대소문자 또는 숫자만 입력해주세요");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  const pwFunc = (value) => {
    setPwInput(value);
    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!pwRegExp.test(value)) {
      setPwMessage(
        "숫자+영문자+특수문자 조합으로 8자리이상 25자리 미만으로 입력해주세요"
      );
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호 입니다");
      setIsPw(true);
    }
  };

  const onClick = async (name, id, pw) => {
    // let formData = new FormData();
    // formData.append("name", name);
    // formData.append("name", id);
    // formData.append("name", pw);
    const data = await axios.post("http://localhost:8080/api/regist/confirm", {
      sdf: "sdf",
    });
    console.log(data.data);
  };

  return (
    <RegistComponent
      setIdMessage={setIdMessage}
      idFunc={idFunc}
      idMessage={idMessage}
      setPwMessage={setPwMessage}
      pwMessage={pwMessage}
      pwFunc={pwFunc}
      idInput={idInput}
      pwInput={pwInput}
      isId={isId}
      isPw={isPw}
      onClick={onClick}
    ></RegistComponent>
  );
};

export default RegistContainer;
