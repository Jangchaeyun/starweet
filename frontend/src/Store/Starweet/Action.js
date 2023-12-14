import { Axios } from "axios";
import { api } from "../../config/api";
import {
  GET_ALL_STARWEETS_FAILURE,
  GET_ALL_STARWEETS_REQUEST,
  GET_USERS_STARWEET_FAILURE,
  GET_USERS_STARWEET_SUCCESS,
} from "./ActionType";

const getAllStarweets = () => async (dispatch) => {
  try {
    const { data } = await api.get("/api/starweets/");
    console.log("get all starweets : ", data);
    dispatch({ type: GET_ALL_STARWEETS_REQUEST, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: GET_ALL_STARWEETS_FAILURE, payload: error.message });
  }
};

const getUserStarweet = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/starweets/user/${userId}`);
    console.log("get all starweets : ", data);
    dispatch({ type: GET_USERS_STARWEET_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: GET_USERS_STARWEET_FAILURE, payload: error.message });
  }
};
