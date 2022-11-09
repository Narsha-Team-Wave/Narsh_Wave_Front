import styled from "styled-components";
import ProgressBar from "./progressbar/ProgressBar";

const SideContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 500px;

  width: 240px;
  height: 860px;

  border: 2px solid black;

  .total {
    margin-top: 70px;
    font-family: "Godo M";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
    /* identical to box height */

    text-align: center;

    color: #000000;
  }

  div[class$="box"] {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .box_text {
    margin-top: 130px;

    font-family: "Godo M";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    text-align: center;

    color: #000000;
  }
`;

const Side = ({ total, stress, mental, health }) => {
  return (
    <SideContainer>
      <div className="total">
        <div>총 점수</div>
        <div className="score">{total} / 100</div>
      </div>
      <div className="stress_box">
        <div className="box_text">스트레스</div>
        <ProgressBar score={stress}></ProgressBar>
      </div>
      <div className="mental_box">
        <div className="box_text">정신</div>
        <ProgressBar score={mental}></ProgressBar>
      </div>
      <div className="health_box">
        <div className="box_text">건강</div>
        <ProgressBar score={health}></ProgressBar>
      </div>
    </SideContainer>
  );
};

export default Side;
