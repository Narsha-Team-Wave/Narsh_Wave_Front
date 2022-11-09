import { useEffect } from "react";
import styled from "styled-components";
import goodIcon_activation from "../../../assets/GoodIcon_Activation.png";
import goodIcon_deactivation from "../../../assets/GoodIcon_Deactivation.png";
import badIcon_activation from "../../../assets/BadIcon_Activation.png";
import badIcon_deactivation from "../../../assets/BadIcon_Deactivation.png";
import normalIcon_activation from "../../../assets/NormalIcon_Activation.png";
import normalIcon_deactivation from "../../../assets/NormalIcon_Deactivation.png";

const StateContainer = styled.div`
  position: absolute;
  top: 480px;
  left: 20px;

  width: 450px;
  height: 580px;

  border: 2px solid black;

  display: flex;
  flex-direction: column;

  .state {
    margin-top: 45px;

    font-family: "Godo M";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    text-align: center;

    color: #000000;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: center;

    img {
      width: 50px;
      height: 50px;

      margin-top: 40px;
      margin-left: 30px;
      margin-right: 30px;
    }

    img[class$="aactivation"] {
      display: none;
    }
  }
`;

const State = ({ stressState, healthState, mentalState }) => {
  useEffect(() => {
    checkStressState();
    checkHealthState();
    checkMentalState();
  }, []);

  const checkStressState = () => {
    console.log("stress : " + stressState);
    if (stressState === "좋음") {
      document.getElementById("stress_good_a").style.display = "flex";
      document.getElementById("stress_good_d").style.display = "none";
      document.getElementById("stress_normal_a").style.display = "none";
      document.getElementById("stress_normal_d").style.display = "flex";
      document.getElementById("stress_bad_a").style.display = "none";
      document.getElementById("stress_bad_d").style.display = "flex";
    } else if (stressState === "보통") {
      document.getElementById("stress_good_a").style.display = "none";
      document.getElementById("stress_good_d").style.display = "flex";
      document.getElementById("stress_normal_a").style.display = "flex";
      document.getElementById("stress_normal_d").style.display = "none";
      document.getElementById("stress_bad_a").style.display = "none";
      document.getElementById("stress_bad_d").style.display = "flex";
    } else if (stressState === "좋지않음") {
      document.getElementById("stress_good_a").style.display = "none";
      document.getElementById("stress_good_d").style.display = "flex";
      document.getElementById("stress_normal_a").style.display = "none";
      document.getElementById("stress_normal_d").style.display = "flex";
      document.getElementById("stress_bad_a").style.display = "flex";
      document.getElementById("stress_bad_d").style.display = "none";
    }
  };
  const checkMentalState = () => {
    console.log("stress : " + mentalState);
    if (mentalState === "좋음") {
      document.getElementById("mental_good_a").style.display = "flex";
      document.getElementById("mental_good_d").style.display = "none";
      document.getElementById("mental_normal_a").style.display = "none";
      document.getElementById("mental_normal_d").style.display = "flex";
      document.getElementById("mental_bad_a").style.display = "none";
      document.getElementById("mental_bad_d").style.display = "flex";
    } else if (mentalState === "보통") {
      document.getElementById("mental_good_a").style.display = "none";
      document.getElementById("mental_good_d").style.display = "flex";
      document.getElementById("mental_normal_a").style.display = "flex";
      document.getElementById("mental_normal_d").style.display = "none";
      document.getElementById("mental_bad_a").style.display = "none";
      document.getElementById("mental_bad_d").style.display = "flex";
    } else if (mentalState === "좋지않음") {
      document.getElementById("mental_good_a").style.display = "none";
      document.getElementById("mental_good_d").style.display = "flex";
      document.getElementById("mental_normal_a").style.display = "none";
      document.getElementById("mental_normal_d").style.display = "flex";
      document.getElementById("mental_bad_a").style.display = "flex";
      document.getElementById("mental_bad_d").style.display = "none";
    }
  };
  const checkHealthState = () => {
    console.log("stress : " + stressState);
    if (healthState === "좋음") {
      document.getElementById("health_good_a").style.display = "flex";
      document.getElementById("health_good_d").style.display = "none";
      document.getElementById("health_normal_a").style.display = "none";
      document.getElementById("health_normal_d").style.display = "flex";
      document.getElementById("health_bad_a").style.display = "none";
      document.getElementById("health_bad_d").style.display = "flex";
    } else if (healthState === "보통") {
      document.getElementById("health_good_a").style.display = "none";
      document.getElementById("health_good_d").style.display = "flex";
      document.getElementById("health_normal_a").style.display = "flex";
      document.getElementById("health_normal_d").style.display = "none";
      document.getElementById("health_bad_a").style.display = "none";
      document.getElementById("health_bad_d").style.display = "flex";
    } else if (healthState === "좋지않음") {
      document.getElementById("health_good_a").style.display = "none";
      document.getElementById("health_good_d").style.display = "flex";
      document.getElementById("health_normal_a").style.display = "none";
      document.getElementById("health_normal_d").style.display = "flex";
      document.getElementById("health_bad_a").style.display = "flex";
      document.getElementById("health_bad_d").style.display = "none";
    }
  };

  return (
    <StateContainer>
      <div className="stress_box">
        <div className="state">스트레스 상태</div>
        <div className="icon">
          <div className="good">
            <img
              src={goodIcon_activation}
              alt="good_activation"
              className="good_aactivation"
              id="stress_good_a"
            />
            <img
              src={goodIcon_deactivation}
              alt="good_deactivation"
              className="good_deactivation"
              id="stress_good_d"
            />
          </div>
          <div className="nomal">
            <img
              src={normalIcon_activation}
              alt="normal_activation"
              className="normal_aactivation"
              id="stress_normal_a"
            />
            <img
              src={normalIcon_deactivation}
              alt="normal_deactivation"
              className="normal_deactivation"
              id="stress_normal_d"
            />
          </div>
          <div className="bad">
            <img
              src={badIcon_activation}
              alt="bad_activation"
              className="bad_aactivation"
              id="stress_bad_a"
            />
            <img
              src={badIcon_deactivation}
              alt="bad_deactivation"
              className="bad_deactivation"
              id="stress_bad_d"
            />
          </div>
        </div>
      </div>
      <div className="mental_box">
        <div className="state">정신 상태</div>
        <div className="icon">
          <div className="good">
            <img
              src={goodIcon_activation}
              alt="good_activation"
              className="good_aactivation"
              id="mental_good_a"
            />
            <img
              src={goodIcon_deactivation}
              alt="good_deactivation"
              className="good_deactivation"
              id="mental_good_d"
            />
          </div>
          <div className="nomal">
            <img
              src={normalIcon_activation}
              alt="normal_activation"
              className="normal_aactivation"
              id="mental_normal_a"
            />
            <img
              src={normalIcon_deactivation}
              alt="normal_deactivation"
              className="normal_deactivation"
              id="mental_normal_d"
            />
          </div>
          <div className="bad">
            <img
              src={badIcon_activation}
              alt="bad_activation"
              className="bad_aactivation"
              id="mental_bad_a"
            />
            <img
              src={badIcon_deactivation}
              alt="bad_deactivation"
              className="bad_deactivation"
              id="mental_bad_d"
            />
          </div>
        </div>
      </div>
      <div className="health_box">
        <div className="state">건강 상태</div>
        <div className="icon">
          <div className="good">
            <img
              src={goodIcon_activation}
              alt="good_activation"
              className="good_aactivation"
              id="health_good_a"
            />
            <img
              src={goodIcon_deactivation}
              alt="good_deactivation"
              className="good_deactivation"
              id="health_good_d"
            />
          </div>
          <div className="nomal">
            <img
              src={normalIcon_activation}
              alt="normal_activation"
              className="normal_aactivation"
              id="health_normal_a"
            />
            <img
              src={normalIcon_deactivation}
              alt="normal_deactivation"
              className="normal_deactivation"
              id="health_normal_d"
            />
          </div>
          <div className="bad">
            <img
              src={badIcon_activation}
              alt="bad_activation"
              className="bad_aactivation"
              id="health_bad_a"
            />
            <img
              src={badIcon_deactivation}
              alt="bad_deactivation"
              className="bad_deactivation"
              id="health_bad_d"
            />
          </div>
        </div>
      </div>
    </StateContainer>
  );
};

export default State;
