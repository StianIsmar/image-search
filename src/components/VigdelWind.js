import React, { useEffect, useState } from "react";
import axios from "axios";

const VigdelWind = () => {

  const [windStrength, updateWindStrength] = useState()
  const [windDir, updateWindDir] = useState()
  const [gustDir, updateGustDir] = useState()
  const [gustStrength, updateGustStrength] = useState()

  /* need CORS allowed on the server side...
  useEffect(() => {
    const instantaneousWindUrl =
    "http://mobvaer.kystverket.no/v2/api/stations/5265049";


    // request 2
    axios
      (instantaneousWindUrl, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
      }).then(res => {
          const windInfo = res.data
          console.log(windInfo)

      });
  }, []);
  */
  return (
    <div>
      <h1>Live wind at Vigdel</h1>
    </div>
  );
};
export default VigdelWind;
