import { loginFailure, loginRequest, loginSuccess, logout } from "./userRedux";
import {
  getProductRequest,
  getProductSuccess,
  getProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  addProductRequest,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";
import { publicCall, userCall } from "../urlCalls";

export const login = async (dispatch, user) => {
  dispatch(loginRequest());
  try {
    const res = await publicCall.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// export const logoutFunction = async (dispatch) => {
//   dispatch(logout());
// };

export const getProducts = async (dispatch) => {
  dispatch(getProductRequest());
  try {
    const res = await publicCall.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductRequest());
  try {
    // const res = await userCall.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id)); //
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductRequest());
  try {
    const res = await userCall.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product })); //res.id, res.product or updatedProduct res.data.id axios
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductRequest());
  try {
    const res = await userCall.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
