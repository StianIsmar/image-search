const initialState = {
  url: "google.com",
  loadedImage: false,
  loadingImage: false,
};

const unsplashReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_IMG_URL_ASYNC":
      return { ...state, url: action.url };
    case "LOADING_IMAGE":
      return { ...state, loadingImage: true, loadedImage:false };
    case "LOADED_IMAGE":
      return { ...state, loadedImage: true, loadingImage: false };
    default:
      return state;
  }
};

export default unsplashReducer;
