// import types
import { GET_PHONES, PHONES_ERROR } from "../types";

// default state for phones
const initialState = {
  phones: [],
  loading: true,
  phone: null,
};

export default function phoneReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHONES:
      // return an object with all previous state,
      // after that, the object phones contains the action data(action.payload)
      // loading change to false when data is obtained
      return { ...state, phones: action.payload, loading: false };
    // case GET_PHONE:
    //   // return an object with all previous state,
    //   // after that, the object phones contains the action data(action.payload)
    //   // loading change to false when data is obtained
    //   return { ...state, phone: action.payload, loading: false };
    case PHONES_ERROR:
      // if there is no response from the API,
      // the loading is set to false and
      // the error message will send from the action file
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
