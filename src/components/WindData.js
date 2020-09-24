import React, { useEffect, useState } from "react";
import { Button } from "@equinor/eds-core-react";
import axios from "axios";
import xml2js from "xml2js";
import SwellInfo from "./SwellInfo";
import styled from "styled-components";
import {useSpring, animated} from 'react-spring'


import { Icon } from "@equinor/eds-core-react";
import {
  info_circle,
  compare,
  trending_flat,
  refresh,
} from "@equinor/eds-icons";

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
--padding: 10px;

background-color: #243746;
border-radius:10px;

`;

const ButtonDiv = styled.div`
    width: 100px;
    justify-content: center;
    flex-basis: 100%;
  }
`;

const WindData = () => {
  // use Effect is run only once with the square brackets empty
  useEffect(() => {
    getSwellData();
  }, []);

  const [windDirection, updateWindDirection] = useState([]);

  const url =
    "https://api.met.no/weatherapi/oceanforecast/0.9/?lat=58.7918613&lon=5.5313567";

  const getSwellData = () => {
    console.log("Getting swell data");
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
  };
  return (
    <div>
      {windDirection.length && (
        <Styledul>
          {windDirection.map((data, index) => (
            <SwellInfo data={data} index={index} />
          ))}
           <ButtonDiv>
        <Button color="primary" onClick={getSwellData}>
          {" "}
          <Icon name="refresh" size={40} />
        </Button>
      </ButtonDiv>
        </Styledul>
      )}
     
    </div>
  );
};

export default WindData;
