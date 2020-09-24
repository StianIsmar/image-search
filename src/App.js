import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "@equinor/eds-core-react";
import axios from "axios";
import xml2js from "xml2js";
import SwellInfo from "./components/SwellInfo";
import UnsplashImage from "./components/UnsplashImage";
import Time from "./components/Time";
import WindData from "./components/WindData";
import { showSwellActionCreator } from "./actions/swellActions";
import { Global, TimeDiv, ButtonStyle, RotatedH1 } from "./styles";

import { useSelector, useDispatch } from "react-redux";

import { Icon } from "@equinor/eds-core-react";
import {
  info_circle,
  compare,
  trending_flat,
  refresh,
  pool,
} from "@equinor/eds-icons";

import styled from "styled-components";

Icon.add({ trending_flat });
Icon.add({ refresh });
Icon.add({ pool });

const ButtonDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SwellDiv = styled.div`
  background-color: #488286;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  --display: block;
  overflow: auto;

  --flexwrap: wrap;
  width: 100%;
`;

const UnsplashDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 6px;
`;

const App = () => {
  const showSwell = useSelector((state) => {
    return state.swellReducer.showSwell;
  });
  const dispatch = useDispatch();

  return (
    <>
      <Global />
      <SwellDiv>
        <TimeDiv>
          <Time />
        </TimeDiv>
        <TimeDiv>
          <RotatedH1>Swell direction</RotatedH1>
          <h3>
            This API follows oceanographic convention instead of meteorological
            convention, meaning that the value indicates where the waves are
            moving, not where they are coming from.
          </h3>
        </TimeDiv>
        <ButtonStyle>
          <Button
            color="primary"
            onClick={() => dispatch(showSwellActionCreator())}
          > SHOW SWELL DIRECTION BY THE HOUR
            <Icon name="pool" size={40} />
          </Button>
        </ButtonStyle>
        {showSwell && <WindData />}
        <UnsplashImage />
      </SwellDiv>
    </>
  );
};

export default App;
