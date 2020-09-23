import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ColumnDiv = styled.div`
display: flex;
flex-direction: row;
`;
const Time = (props) => {


  const [currentTime, updateCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => getCurrentTime(), 1000);
  }, []);

  const getCurrentTime = () => {
    var d = new Date();
    updateCurrentTime(d)

    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds(); // => 51


    return;
  };
  return (
    <div>
      <ColumnDiv>
        <div>{`${currentTime.getHours()}:`}</div>
        <div>{`${currentTime.getMinutes()}:`}</div>
        <div>{`${currentTime.getSeconds()}  ` + " "}</div>
      </ColumnDiv>
    </div>
  );
};
export default Time;
