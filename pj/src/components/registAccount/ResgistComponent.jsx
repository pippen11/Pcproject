import styled from "styled-components";

import bannerimg from "./img/20230929_122011.png";
import naverimg from "./img/naver.svg";
import kakaoimg from "./img/kakao.svg";
import faceimg from "./img/facebook.svg";
import appleimg from "./img/apple.svg";
import { useState } from "react";

const RegistComponent = ({
  setIdMessage,
  idFunc,
  idMessage,
  setPwMessage,
  pwMessage,
  pwFunc,
  idInput,
  pwInput,
  isId,
  isPw,
  onClick,
}) => {
  const [nameInput, setNameInput] = useState("");
  const [nameMessage, setNameMessage] = useState(null);
  const [isName, setIsName] = useState(false);

  return (
    <MainBox>
      <div>
        <div>홈 | 고객센터</div>
      </div>
      <div>
        <BannerImg src={bannerimg} alt="" />
      </div>
      <Accountdiv>
        <PersonalAccount>개인회원</PersonalAccount>
        <CompanyAccount>기업회원</CompanyAccount>
      </Accountdiv>
      <SocialLogin>
        <div>
          <div className="login-message">소셜로 간편하게 로그인하세요</div>
        </div>
        <div className="img">
          <NaverImg src={naverimg}></NaverImg>
          <KakaoImg src={kakaoimg}></KakaoImg>
          <FacebookImg src={faceimg}></FacebookImg>
          <AppleImg src={appleimg}></AppleImg>
        </div>
      </SocialLogin>
      <InputInfo>
        <div className="Main">
          <div>회원가입하고 다양한 혜택을 누리세요!</div>
          <div>* 필수 입력 정보입니다</div>
        </div>
        <div>
          <NameInput
            onBlur={(e) => {
              setNameMessage(null);
            }}
            // onBlur 포커스벗어났을때 null값으로바꿈
            onInput={(e) => {
              setNameInput(e.target.value);
              if (e.target.value.length > 3) {
                // e.target.value = e.target.value.slice(0, 3);
                setNameMessage("4자미만만 입력가능합니다");
                setIsName(false);
              } else {
                setIsName(true);
              }
            }}
            placeholder="이름(실명)*"
            type="text"
          ></NameInput>
        </div>
        <div>{nameMessage}</div>

        <div>
          <IdInput
            placeholder="아이디"
            onBlur={() => {
              setIdMessage(null);
            }}
            onInput={(e) => {
              idFunc(e.target.value);
            }}
          ></IdInput>
        </div>
        <div>{idMessage}</div>
        <div>
          <PwInput
            placeholder="비밀번호"
            onBlur={() => {
              setPwMessage(null);
            }}
            onInput={(e) => {
              pwFunc(e.target.value);
            }}
          ></PwInput>
        </div>
        <div>{pwMessage}</div>
      </InputInfo>
      <JoinDiv>
        <div
          className="join"
          onClick={() => {
            console.log("클릭");
            if (nameInput && idInput && pwInput !== "") {
              console.log("클릭2");
              console.log(isName);
              console.log(isId);
              console.log(isPw);

              if (isName && isId && isPw == true) {
                console.log("합격");
                onClick(nameInput, idInput, pwInput);
              } else {
                alert("조건을 충족시키지 못했습니다.");
              }
            } else {
              alert("입력을 완료해주세요.");
            }
          }}
        >
          가입하기
        </div>
      </JoinDiv>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #f5f6f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:first-child {
    color: gray;
    width: 30%;
    display: flex;
    justify-content: end;
    padding: 20px;
    font-size: 10px;
  }
`;

const BannerImg = styled.img`
  padding: 40px;
`;

const Accountdiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PersonalAccount = styled.div`
  width: 20%;
  background-color: #3399ff;
  color: white;
  font-size: 25px;
  font-weight: 800;
  padding: 10px;
  text-align: center;
`;

const CompanyAccount = styled.div`
  border-bottom: 2px solid blue;
  padding: 10px;
  width: 10%;
  background-color: white;
  text-align: center;
`;

const SocialLogin = styled.div`
  display: flex;
  background-color: white;
  width: 30%;
  justify-content: space-around;
  padding: 20px;

  .login-message {
    padding-top: 10px;
    font-size: 20px;
  }
  .img {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const NaverImg = styled.img``;

const KakaoImg = styled.img``;

const FacebookImg = styled.img``;

const AppleImg = styled.img``;

const InputInfo = styled.div`
  margin-top: 10px;
  padding: 20px;
  width: 30%;
  background-color: white;
  .Main {
    display: flex;
    justify-content: space-between;

    & > div:first-child {
      font-size: 20px;
    }
    & > div:nth-child(2) {
      color: grey;
      font-size: 15px;
      width: 30%;
      display: flex;
    }
  }
`;

const NameInput = styled.input`
  width: 90%;
  padding: 20px;
  border: 1px solid grey;
  margin-top: 10px;
`;

const IdInput = styled.input`
  width: 90%;
  padding: 20px;
  border: 1px solid grey;
  margin-top: 10px;
`;

const PwInput = styled.input`
  width: 90%;
  padding: 20px;
  border: 1px solid grey;
  margin-top: 10px;
`;

const EmailInput = styled.input`
  width: 90%;
  padding: 20px;
  border: 1px solid grey;
  margin-top: 10px;
`;

const JoinDiv = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #3399ff;
  margin-top: 10px;
  color: white;
  font-size: 25px;
  text-align: center;
  font-weight: 800;

  .join:hover {
    cursor: pointer;
  }
`;

export default RegistComponent;
