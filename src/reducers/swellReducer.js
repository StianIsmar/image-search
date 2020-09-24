const initialState = {
   showSwell: false
  };
  
  const swellReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SHOW_SWELL":
        return { ...state, showSwell: true };
      default:
        return state;
    }
  };
  
  export default swellReducer;
  