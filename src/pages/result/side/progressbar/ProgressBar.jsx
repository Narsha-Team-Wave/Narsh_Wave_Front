import styled from "styled-components";

const ProgressBarStyle = styled.div`
  .progress_filler {
    margin-top: 40px;
    margin-left: 30px;
    width: 180px;
    height: 15px;
    background-color: #d9effb;
    border-radius: 10px;
  }

  .progress_bar {
    width: 10px;
    margin-left: ${(prop) => `${prop.score}%`};
    height: 15px;
    background-color: #0c71a8;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  .show_score {
    display: flex;
    justify-content: space-between;
  }
`;

const ProgressBar = ({ score }) => {
  return (
    <ProgressBarStyle score={score}>
      <div className="progress_filler">
        <div className="progress_bar"></div>
        <div className="show_score">
          <div>0</div>
          <div>100</div>
        </div>
      </div>
    </ProgressBarStyle>
  );
};

export default ProgressBar;
