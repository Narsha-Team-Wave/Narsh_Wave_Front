import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Explain from "./explain/Explain";
import Side from "./side/Side";
import State from "./state/State";
import { useEffect, useState } from "react";
import { getUserStateData } from "../../api/data/Data.api";

const ResultStyle = styled.div`
  position: absolute;

  top: 10px;
  left: 10px;

  width: 775px;
  height: 1105px;

  border: 5px solid black;
`;

const TitleConatiner = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
  }

  .titleLogo {
    width: 139px;
    height: 88px;
    margin-top: 13px;
    margin-left: 312px;

    font-family: "Bauhaus 93";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 88px;
    /* identical to box height */

    color: #000000;
  }

  .createdAt {
    margin-top: 75px;
    margin-right: 10px;

    font-family: "Godo M";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    color: #000000;
  }

  .titleLine {
    margin-top: 5px;
    width: 770px;

    border: 1px solid black;
  }
`;

const InfoContainer = styled.div`
  font-family: "Godo M";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;

  color: #000000;

  .info {
    display: flex;
    justify-content: space-between;

    margin-top: 13px;
    margin-left: 55px;
    margin-right: 130px;
  }

  .infoLine {
    margin-top: 13px;
    width: 770px;

    border: 1px solid black;
  }
`;

const Result = () => {
  const location = useLocation();
  const number = location.pathname.split("/")[2];
  const name = decodeURI(location.pathname.split("/")[3]);
  const gender = decodeURI(location.pathname.split("/")[4]);
  const [data, setData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await getUserStateData(number, name, gender);

    console.log(response);
    setData(response);
  };

  return (
    <ResultStyle>
      {data && (
        <>
          <TitleConatiner>
            <div className="title">
              <div className="titleLogo">Wave</div>
              <div className="createdAt">{data.createdAt}</div>
            </div>
            <div className="titleLine"></div>
          </TitleConatiner>
          <InfoContainer>
            <div className="info">
              <div className="number"> 전화번호 : {number}</div>
              <div className="name">이름 : {data.name}</div>
              <div className="gender">성별 : {data.gender}</div>
            </div>
            <div className="infoLine"></div>
          </InfoContainer>
          <Explain explain={data.explain}></Explain>
          <State
            stressState={data.stressState}
            healthState={data.healthState}
            mentalState={data.mentalState}
          ></State>
          <Side
            total={data.score}
            stress={data.stress}
            health={data.health}
            mental={data.mental}
          ></Side>
        </>
      )}
    </ResultStyle>
  );
};

export default Result;
