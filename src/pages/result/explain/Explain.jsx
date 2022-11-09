import styled from "styled-components";
import goodIcon_activation from "../../../assets/GoodIcon_Activation.png";
import badIcon_activation from "../../../assets/BadIcon_Activation.png";
import normalIcon_activation from "../../../assets/NormalIcon_Activation.png";
import { useEffect } from "react";

const ExplainConatiner = styled.div`
  position: absolute;
  top: 200px;
  left: 20px;

  width: 450px;
  height: 250px;

  border: 2px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;

  .state {
    margin-top: 50px;

    font-family: "Godo M";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    text-align: center;

    color: #000000;
  }

  .icon {
    margin-top: 20px;
    display: none;

    width: 100px;
    height: 100px;
  }
`;

const Explain = ({ explain }) => {
  useEffect(() => {
    checkExplain();
  }, []);

  const checkExplain = () => {
    if (explain === "당신의 상태는 위험합니다.") {
      document.getElementById("bad").styled.display = "flex";
      document.getElementById("good").style.display = "none";
      document.getElementById("normal").style.display = "none";
    } else if (explain === "당신의 상태는 보통입니다.") {
      document.getElementById("bad").style.display = "none";
      document.getElementById("good").style.display = "none";
      document.getElementById("normal").style.display = "flex";
    } else if (explain === "당신의 상태는 매우 좋습니다.") {
      document.getElementById("bad").style.display = "none";
      document.getElementById("good").style.display = "flex";
      document.getElementById("normal").style.display = "none";
    }
  };

  return (
    <ExplainConatiner>
      <div className="state">{explain}</div>
      <div className="imgList">
        <img src={goodIcon_activation} alt="icon" className="icon" id="good" />
        <img
          src={normalIcon_activation}
          alt="icon"
          className="icon"
          id="normal"
        />
        <img src={badIcon_activation} alt="icon" className="icon" id="bad" />
      </div>
    </ExplainConatiner>
  );
};

export default Explain;
