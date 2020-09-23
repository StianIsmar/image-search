import React from "react";
import { Button } from "@equinor/eds-core-react";
import styled from "styled-components";
import { UNSPLASH_API_KEY } from "../UNSPLASH_API_KEY.js";

import { useSelector, useDispatch } from "react-redux";

// import {fetchNewUrl} from "../actions/unsplashActions";
import { updateUrl1 } from "../actions/unsplashActions";
const ButtonDiv = styled.div`

    justify-content: center;
  margin: 20px;
`;

const OuterDiv = styled.div`
  padding: 20px;
`

const UnsplashImage = (props) => {
  // Getting the state from redux store
  const url = useSelector((state) => {
    return state.unsplashReducer.url;
  });

  const dispatch = useDispatch();

  const getUnsplashImage = () => {
    // fire the dispatch action
    dispatch(updateUrl1()); // dispatching the "normal action creator"
  };
  return (
    <OuterDiv>
      <ButtonDiv>
        <Button onClick={getUnsplashImage}> Get unsplash image</Button>
      </ButtonDiv>

      {url != "google.com" && <imageDiv>
        <img src={url} alt="new" />
      </imageDiv>}
    </OuterDiv>
  );
};

export default UnsplashImage;
