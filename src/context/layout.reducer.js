import { LAYOUT_UPDATE_REQUEST, LAYOUT_UPDATE_SUCCESS, LAYOUT_UPDATE_FAILURE } from './layout.constant';

export const initialState = {
  loading: null,
  error: null,
  data: {
    lang: 'TR',
    theme: 'default',
    ver: '1.0.0',
    title: 'Lorem Ipsum'
  }
};

const layoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case LAYOUT_UPDATE_REQUEST:
    return {
      ...state,
      loading: true
    };

  case LAYOUT_UPDATE_SUCCESS:
    return {
      ...state,
      data: payload.data
    };

  case LAYOUT_UPDATE_FAILURE:
    return {
      ...state,
      error: payload.data
    };

  default:
    return state;
  }
};

export default layoutReducer;
