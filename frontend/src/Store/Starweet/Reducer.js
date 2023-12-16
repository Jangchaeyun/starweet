import {
  FIND_STARWEET_BY_ID_FAILURE,
  FIND_STARWEET_BY_ID_REQUEST,
  FIND_STARWEET_BY_ID__SUCCESS,
  GET_ALL_STARWEETS_SUCCESS,
  GET_USERS_STARWEET_SUCCESS,
  LIKE_STARWEET_FAILURE,
  LIKE_STARWEET_REQUEST,
  LIKE_STARWEET_SUCCESS,
  REPLY_STARWEET_SUCCESS,
  RESTARWEET_FAILURE,
  RESTARWEET_REQUEST,
  RESTARWEET_SUCCESS,
  STARWEET_CREATE_FAILURE,
  STARWEET_CREATE_REQUEST,
  STARWEET_CREATE_SUCCESS,
  STARWEET_DELETE_FAILURE,
  STARWEET_DELETE_REQUEST,
  STARWEET_DELETE_SUCCESS,
  USER_LIKE_STARWEET_FAILURE,
  USER_LIKE_STARWEET_REQUEST,
  USER_LIKE_STARWEET_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: false,
  data: null,
  error: null,
  starweets: [],
  starweet: null,
};

const starweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case STARWEET_CREATE_REQUEST:
    case STARWEET_DELETE_REQUEST:
    case USER_LIKE_STARWEET_REQUEST:
    case LIKE_STARWEET_REQUEST:
    case RESTARWEET_REQUEST:
    case FIND_STARWEET_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case STARWEET_CREATE_FAILURE:
    case STARWEET_DELETE_FAILURE:
    case USER_LIKE_STARWEET_FAILURE:
    case LIKE_STARWEET_FAILURE:
    case RESTARWEET_FAILURE:
    case FIND_STARWEET_BY_ID_FAILURE:
      return { ...state, loading: true, error: action.payload };
    case STARWEET_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        starweets: [action.payload, ...state.starweets],
      };
    case GET_ALL_STARWEETS_SUCCESS:
    case GET_USERS_STARWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        starweets: action.payload,
      };
    case USER_LIKE_STARWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        likedStarweets: action.payload,
      };
    case LIKE_STARWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        like: action.payload,
      };
    case STARWEET_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        starweets: state.starweets.filter(
          (starweet) => starweet.id !== action.payload
        ),
      };
    case RESTARWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        restarweet: action.payload,
      };
    case FIND_STARWEET_BY_ID__SUCCESS:
    case REPLY_STARWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        starweet: action.payload,
      };
    default:
      return state;
  }
};
