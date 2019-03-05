import axios from "axios";

import { ROOT, REQUEST_PRODUCTS, RECEIVE_PRODUCTS, NEW_PRODUCT } from "./types";

export const fetchProducts = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_PRODUCTS });
    const res = await axios.get(`${ROOT}product/all`);

    dispatch({ type: RECEIVE_PRODUCTS, payload: res.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: RECEIVE_PRODUCTS, payload: [] });
  }
};
export const addNewProduct = product => dispatch => {
  dispatch({ type: NEW_PRODUCT, payload: product });
};
