import { Axios } from "axios";
import { api } from "../../config/api";
import {
  FIND_STARWEET_BY_ID_FAILURE,
  FIND_STARWEET_BY_ID__SUCCESS,
  GET_ALL_STARWEETS_FAILURE,
  GET_ALL_STARWEETS_REQUEST,
  GET_USERS_STARWEET_FAILURE,
  GET_USERS_STARWEET_SUCCESS,
  LIKE_STARWEET_FAILURE,
  LIKE_STARWEET_SUCCESS,
  REPLY_STARWEET_FAILURE,
  REPLY_STARWEET_SUCCESS,
  RESTARWEET_FAILURE,
  RESTARWEET_SUCCESS,
  STARWEET_CREATE_FAILURE,
  STARWEET_CREATE_SUCCESS,
  STARWEET_DELETE_FAILURE,
  STARWEET_DELETE_SUCCESS,
  USER_LIKE_STARWEET_FAILURE,
  USER_LIKE_STARWEET_SUCCESS,
} from "./ActionType";

export const getAllStarweets = () => async (dispatch) => {
  try {
    const { data } = await api.get("/api/starweets/");
    console.log("get all starweets : ", data);
    dispatch({ type: GET_ALL_STARWEETS_REQUEST, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: GET_ALL_STARWEETS_FAILURE, payload: error.message });
  }
};

export const getUserStarweet = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/starweets/user/${userId}`);
    console.log("get user starweets : ", data);
    dispatch({ type: GET_USERS_STARWEET_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: GET_USERS_STARWEET_FAILURE, payload: error.message });
  }
};

export const findStarweetsByLikeContaineUser = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/starweets/user/${userId}/likes`);
    console.log("user like starweets : ", data);
    dispatch({ type: USER_LIKE_STARWEET_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: USER_LIKE_STARWEET_FAILURE, payload: error.message });
  }
};

export const findStarweetsById = (starweetId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/starweets/${starweetId}`);
    console.log("find starweet by id : ", data);
    dispatch({ type: FIND_STARWEET_BY_ID__SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: FIND_STARWEET_BY_ID_FAILURE, payload: error.message });
  }
};

export const createStarweet = (starweetData) => async (dispatch) => {
  try {
    const { data } = await api.post(`/api/starweets/create`, starweetData);
    console.log("created starweet : ", data);
    dispatch({ type: STARWEET_CREATE_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: STARWEET_CREATE_FAILURE, payload: error.message });
  }
};

export const createStarweetReply = (starweetData) => async (dispatch) => {
  try {
    const { data } = await api.post(`/api/starweets/reply`, starweetData);
    console.log("reply starweet : ", data);
    dispatch({ type: REPLY_STARWEET_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: REPLY_STARWEET_FAILURE, payload: error.message });
  }
};

export const createReStarweet = (starweetId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/starweets/${starweetId}/restarweet`);
    console.log("Restarweet : ", data);
    dispatch({ type: RESTARWEET_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: RESTARWEET_FAILURE, payload: error.message });
  }
};

export const likeStarweet = (starweetId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/${starweetId}/like`);
    console.log("like starweet : ", data);
    dispatch({ type: LIKE_STARWEET_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: LIKE_STARWEET_FAILURE, payload: error.message });
  }
};

export const deleteStarweet = (starweetId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/starweet/${starweetId}`);
    console.log("deleted starweet : ", data);
    dispatch({ type: STARWEET_DELETE_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error - ", error);
    dispatch({ type: STARWEET_DELETE_FAILURE, payload: error.message });
  }
};
