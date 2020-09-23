import {call, put} from 'redux-saga/effects'

import axios from 'axios'

const UPDATE_IMG_URL = "UPDATE_IMG_URL";


export const api = (apiUrl) => {
    // axios call to the api
    axios.get(
        apiUrl,
        {
          "Content-Type": "application/json; charset=utf-8",
        }
      ).then(res => res.data.results[0].urls.regular)
    }

    export function* fetchImageUrl(action) {
        try {
            const url = yield call(api, "https://api.unsplash.com/search/photos?client_id=WyJ4goHzLyxZc4g0LBHUewtvEwIPSKPHrz7-l7twCDM&query=cat")

            yield put({ type: UPDATE_IMG_URL, url: url })
        } catch (e) {
            console.log(e)
        }
    }