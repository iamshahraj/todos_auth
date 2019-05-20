import {
  AUTH_START,
  AUTH_END,
  AUTH_FAIL,
  AUTH_SUCCESS,
  CLEAN_UP,
} from '../actions/authTypes';

const initState = {
  error: null,
  loading: false,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_START:
      return {
        ...state,
        loading: true
      };

    case AUTH_END:
      return {
        ...state,
        loading: false
      };

    case AUTH_FAIL:
      return {
        ...state,
        error: payload
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        error: false
      };

    case CLEAN_UP:
      return {
        ...state,
        error: null,
        loading: false
      };

    default:
      return state;
  }
}

export default authReducer;