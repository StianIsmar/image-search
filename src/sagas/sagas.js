// need to catch the actions here (watcher)
import axios from 'axios'
import { takeEvery, put, call, delay } from "redux-saga/effects";


const makeApiCall =  (apiUrl) => {
    // axios call to the api
    return axios.get(
      apiUrl,
      {
        "Content-Type": "application/json; charset=utf-8",
      }
    )
}

export function fetchApiSuccess(data) {
  return {
    type: "UPDATE_IMG_URL_ASYNC",
    url: data,
  };
}

function* updateUrlAsync() {
  // make API call here

  try {
    yield put({type:"LOADING_IMAGE"})
    yield delay(500)
    const randomPage = (Math.floor(Math.random() * 100) + 1).toString()   
    const res  = yield call(makeApiCall, `https://api.unsplash.com/search/photos?client_id=WyJ4goHzLyxZc4g0LBHUewtvEwIPSKPHrz7-l7twCDM&query=mountain&page&page=${randomPage}`);
    const randomInt = Math.floor(Math.random() * 22) + 1  
    console.log(randomInt)
    yield put(fetchApiSuccess(res.data.results[0].urls.regular))

    yield put({type:"LOADED_IMAGE"})

    
  } catch (err) {
    console.log(err);
  }
}
export function* watchApiRequest() {
  // observe every single action which is dispached

  yield takeEvery("UPDATE_IMG_URL", updateUrlAsync);
}


function* handleShowSwellButton() {
  yield put({type: 'SHOW_SWELL'})
}


export function* watchShowSwellButton() {
  yield takeEvery("SHOW_SWELL", handleShowSwellButton)
}




