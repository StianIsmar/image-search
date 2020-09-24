import React from "react";
import { Button } from "@equinor/eds-core-react";
import styled from "styled-components";
import { UNSPLASH_API_KEY } from "../UNSPLASH_API_KEY.js";

import {useSpring, animated} from 'react-spring'

import {ButtonStyle} from '../styles'


import { useSelector, useDispatch } from "react-redux";

// import {fetchNewUrl} from "../actions/unsplashActions";
import { updateUrl1 } from "../actions/unsplashActions";

import { CircularProgress } from "@equinor/eds-core-react";

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FlexCol = styled.div`
display: flex;
--flex: 1;
justify-content: center;
flex-direction: column;
margin: 50px;
`;

const ProgressSpinnerDiv = styled.div`
  justify-content: center !important;
  height: 50px;
`;

const SpinnerWrapper = styled.div`
  height: 50px;
  width: 100%;
  text-align: center;
`;

const ImageDiv = styled.div`
display: flex;

align-items: center;
justify-content: center;
`;
const StyledImg = styled.img`
width:auto;
height:auto;
`

const UnsplashImage = (props) => {


  // Getting the state from redux store

  const url = useSelector((state) => {
    return state.unsplashReducer.url;
  });

  const loading = useSelector((state) => {
    return state.unsplashReducer.loadingImage;
  });

  const loaded = useSelector((state) => {
    return state.unsplashReducer.loadedImage;
  });

  const dispatch = useDispatch();

  const getUnsplashImage = () => {
    // fire the dispatch action
    dispatch(updateUrl1()); // dispatching the "normal action creator"
  };
  return (
    <div>
      <ButtonDiv>
        <FlexCol>
          <ButtonStyle>
          <Button onClick={getUnsplashImage}> Get unsplash image</Button>
          </ButtonStyle>
          <SpinnerWrapper>
            {loading && (
              <ProgressSpinnerDiv>
                <CircularProgress />
              </ProgressSpinnerDiv>
            )}
          </SpinnerWrapper>
        </FlexCol>
      </ButtonDiv>
      <ImageDiv>{loaded && 
      <animated.div style={props}>
      <StyledImg src={url} alt="new" /></animated.div>}</ImageDiv>
      
    </div>
  );
};

export default UnsplashImage;
