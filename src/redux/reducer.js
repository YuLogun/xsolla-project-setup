const initialState = {
  reducerData: [],
};

const addData = (data) => {
  return {
    type: "ADD_DATA",
    payload: data,
  };
};

export const fetchData = () => (dispatch) => {
  fetch(
    "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json"
  )
    .then((res) => res.json())
    .then((res) => dispatch(addData(res)));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, reducerData: action.payload };
    default:
      return state;
  }
};

export default reducer;
