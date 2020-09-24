import styled, { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    background-color: #eaeaea;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
`;

const TimeDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 32px;
  color: white;
  color: #243746;
`;

const ButtonStyle = styled.div`
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

const RotatedH1 = styled.h1`
  --transform: rotate(270deg);
  writing-mode:vertical-rl;
  text-align: center;
  transform:rotate(180deg);



  --transform-origin: center;

  `

  const StyledH3 = styled.h3`
  
  `  

export { Global, TimeDiv, ButtonStyle, RotatedH1 };
