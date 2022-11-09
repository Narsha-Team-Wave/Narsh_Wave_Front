import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/Logo.png";

const HomeStyle = styled.div`
  width: 100%;
  height: 100vh;

  background: linear-gradient(
    180deg,
    #1c92d2 0%,
    #4ba9db 21.88%,
    #6fbbe3 39.06%,
    #f1fbfd 100%
  );

  .logo {
    position: absolute;
    width: 365px;
    height: 288px;
    left: 777px;
    top: 137px;
  }

  input {
    border: none;
  }

  .input {
    position: absolute;
    left: 682px;
    top: 443px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .number {
    width: 555px;
    height: 80px;

    border-radius: 44px;
    font-size: 20px;
    text-align: center;

    &::placeholder {
      font-family: "Godo M";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 40px;
      /* identical to box height */

      text-align: center;

      color: #000000;
    }
  }

  .name {
    margin-top: 20px;
    width: 265px;
    height: 80px;

    border-radius: 44px;
    font-size: 20px;
    text-align: center;

    &::placeholder {
      font-family: "Godo M";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 40px;
      /* identical to box height */

      text-align: center;

      color: #000000;
    }
  }

  .gender {
    margin-left: 20px;
    width: 265px;
    height: 80px;

    border-radius: 44px;
    border: none;

    font-family: "Godo M";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    /* identical to box height */

    text-align: center;

    color: #000000;

    appearance: none;
  }

  .button {
    margin-top: 50px;

    width: 556px;
    height: 80px;

    background: #ffffff;
    border-radius: 44px;
    border: none;

    font-family: "Godo M";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    /* identical to box height */

    text-align: center;

    color: #000000;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [gender, setGender] = useState("남");

  const onChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const navigateResult = async () => {
    navigate(`/result/${data.number}/${data.name}/${gender}`);
  };

  return (
    <HomeStyle>
      <img src={logo} alt="logo" className="logo" />
      <div className="input">
        <input
          type="text"
          className="number"
          name="number"
          placeholder="전화번호"
          onChange={onChangeData}
        />
        <div className="transverse">
          <input
            type="text"
            className="name"
            name="name"
            placeholder="이름"
            onChange={onChangeData}
          />
          <select
            name="gender"
            className="gender"
            placeholder="성별"
            onChange={onChangeGender}
          >
            <option value="남" name="gender">
              남
            </option>
            <option value="여" name="gender">
              여
            </option>
          </select>
        </div>
        <button type="submit" className="button" onClick={navigateResult}>
          출력하기
        </button>
      </div>
    </HomeStyle>
  );
};

export default Home;
