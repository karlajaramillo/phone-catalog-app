// This file gets data from the API
import { GET_PHONES, PHONES_ERROR } from "../types";
import { getPhones } from "../../api";
// import { GET_PHONES, GET_PHONE, PHONES_ERROR,  } from "../types";
// import { getPhones, getPhoneById } from "../../api";

export const getDataPhones = () => async (dispatch) => {
  try {
    const res = await getPhones();
    dispatch({
      type: GET_PHONES,
      payload: res.data,
      // payload contains the data, passed to phoeReducer
      // and then combineReducer will contain all the data
    });
  } catch (error) {
    dispatch({
      type: PHONES_ERROR,
      payload: error,
    });
  }
};

// export const getDataPhone = (id) => async dispatch => {

//     try{
//         const res = await getPhoneById(id);
//         dispatch( {
//             type: GET_PHONE,
//             payload: res.data
//             // payload contains the data, passed to phoeReducer
//             // and then combineReducer will contain all the data
//         });

//     }
//     catch(error){
//         dispatch( {
//             type: PHONES_ERROR,
//             payload: error,
//         })
//     }

// }
