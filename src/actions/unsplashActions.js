
// action types. Could have in a separate file

const UPDATE_IMG_URL = "UPDATE_IMG_URL";
const LOADING_IMAGE = "LOADING_IMAGE"
const LOADED_IMAGE = "LOADED_IMAGE"

// Only this one here is running
export const updateUrl1 = () => {
  return { type: UPDATE_IMG_URL};
};


/* 
With thunk:

/*
 * action creators
 */

/*
export const fetchUrlData = (url) => {
  return { type: UPDATE_IMG_URL, url: url };
};

export const fetchNewUrl = () => (dispatch) =>{
  console.log("ACTION IS CALLED NOW!");

  // make API call here
  yield axios
    .get(
      "https://api.unsplash.com/search/photos?client_id=WyJ4goHzLyxZc4g0LBHUewtvEwIPSKPHrz7-l7twCDM&query=mountain",
      {
        "Content-Type": "application/json; charset=utf-8",
      }
    )
    .then((res) => {
      console.log(
        "IN ACTION :::: ###############THIS IS URL",
        res.data.results[0].urls.regular
      );
      dispatch(fetchUrlData(res.data.results[0].urls.regular))
    });
};

*/

