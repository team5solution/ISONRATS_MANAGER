import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  NEW_PRODUCT
} from "../actions/types";

const INITIAL_STATE = {
  productItems: [],
  isFetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_PRODUCTS: {
      return { ...state, isFetching: false, productItems: action.payload };
    }
    case NEW_PRODUCT: {
      return {
        ...state,
        isFetching: false,
        productItems: [action.payload, ...state.productItems]
      };
    }
    default:
      return state;
  }
};
