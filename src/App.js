import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "@equinor/eds-core-react";
import axios from "axios";
import xml2js from "xml2js";
import Time from './components/Time'
import SwellInfo from './components/SwellInfo'
import UnsplashImage from './components/UnsplashImage'

import { Icon } from "@equinor/eds-core-react";
import {
  info_circle,
  compare,
  trending_flat,
  refresh,
} from "@equinor/eds-icons";

import styled from "styled-components";

Icon.add({ trending_flat });
Icon.add({ refresh });

const OuterDiv = styled.div`
background-color: #1f1f1f;
height: 100%;
margin: 0;
position: fixed;
bottom: 0;
right: 0;
left: 0;
top: 0;
display:flex;
justify-content: center;
  `;

  const TimeDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 32px;
  color: white;
  color: #333;
  `
  const Styledul = styled.ul`¨
    
    height: 100%;
    padding: 40px;
    margin: 0;

    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:row;
    flex-wrap: wrap;

    margin: auto;
    width: 50%;
    border: 3px;
    padding: 10px;

    background-color: #333;
    border-radius:10px;
    
  `;

  const ButtonDiv = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
  `;

  const SwellDiv = styled.div`
    background-color: #488286;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    border-radius:10px;
    margin: 40px;
    display: block;
    overflow: auto;
    

  `

  const UnsplashDiv = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  margin: 6px;
`

const App = () => {
  
  const [windDirection, updateWindDirection] = useState([]);


  const url =
    "https://api.met.no/weatherapi/oceanforecast/0.9/?lat=58.7918613&lon=5.5313567";


    const getSwellData = () =>{
      console.log("Getting swell data")
      axios
      .get(url, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((res) => {
        console.log(res);

        let parser = new xml2js.Parser();
        parser.parseString(res.data, (err, result) => {
          var windDirections = [];
          for (
            var i = 0;
            i < result["mox:Forecasts"]["mox:forecast"].length;
            i++
          ) {
            var singleWindDir =
              result["mox:Forecasts"]["mox:forecast"][i][
                "metno:OceanForecast"
              ][0][["mox:meanTotalWaveDirection"]][0]["_"];

            windDirections.push(singleWindDir);
          }
          updateWindDirection(windDirections);
        });
      });
    }

  // use Effect is run only once with the square brackets empty
  useEffect(() => {
    getSwellData()
  }, []);

  return (
    <OuterDiv className="App">

      <SwellDiv>
      <TimeDiv><Time/></TimeDiv>
      <TimeDiv><h1>Swell direction</h1>
      </TimeDiv>      
      <div className="wind-section">
        {windDirection.length && (
          <Styledul>

            {windDirection.map((data, index) => (
              <SwellInfo data={data} index={index}/>
            ))}
          </Styledul>
        )}
        <ButtonDiv>
          <Button color="primary" onClick={getSwellData}>
            {" "}
            <Icon name="refresh" size={40} />
          </Button>


        </ButtonDiv>
      </div>
      <UnsplashDiv>
        <UnsplashImage/>      
        </UnsplashDiv>
      </SwellDiv>

    </OuterDiv>
  );
};

export default App;
