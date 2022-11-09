import styled from "styled-components";

import { useEffect } from "react";

const IconStyle = styled.div`
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
`;

const Icon = ({ state }) => {
  useEffect(() => {
    checkState();
  }, []);

  const checkState = () => {
    console.log("state : " + state);
    if (state === "좋음") {
      document.getElementById("good_a").style.display = "flex";
      document.getElementById("good_d").style.display = "none";
      document.getElementById("normal_a").style.display = "none";
      document.getElementById("normal_d").style.display = "flex";
      document.getElementById("bad_a").style.display = "none";
      document.getElementById("bad_d").style.display = "flex";
    } else if (state === "보통") {
      document.getElementById("good_a").style.display = "none";
      document.getElementById("good_d").style.display = "flex";
      document.getElementById("normal_a").style.display = "flex";
      document.getElementById("normal_d").style.display = "none";
      document.getElementById("bad_a").style.display = "none";
      document.getElementById("bad_d").style.display = "flex";
    } else if (state === "좋지않음") {
      document.getElementById("good_a").style.display = "none";
      document.getElementById("good_d").style.display = "flex";
      document.getElementById("normal_a").style.display = "none";
      document.getElementById("normal_d").style.display = "flex";
      document.getElementById("bad_a").style.display = "flex";
      document.getElementById("bad_d").style.display = "none";
    }
  };

  return <IconStyle></IconStyle>;
};

export default Icon;
