import * as api from "../api";

//Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({type:'FETCH_ALL', payload: data});
  } catch (e) {

    console.log(e.message);
  }
};
