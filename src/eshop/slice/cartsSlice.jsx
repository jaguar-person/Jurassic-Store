import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  carts: [],
};

const SERVER_URL = "http://localhost:5000";

export const getCartsAsync = createAsyncThunk("carts/get", async () =>
  axios
    .get(`${SERVER_URL}/carts`)
    .then((res) => res.data)
    .catch((err) => {
      throw err.data;
    })
);

export const addCartsAsync = createAsyncThunk("carts/add", async (data) =>
  axios
    .post(`${SERVER_URL}/carts`, data)
    .then((res) => res.data)
    .catch((err) => {
      throw err.data;
    })
);

export const removeCartsAsync = createAsyncThunk("carts/remove", async (data) =>
  axios
    .delete(`${SERVER_URL}/carts/${data}`)
    .then(() => data)
    .catch((err) => {
      throw err.data;
    })
);

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartsAsync.fulfilled, (state, action) => {
        state.carts = action.payload;
      })
      .addCase(addCartsAsync.fulfilled, (state, action) => {
        state.carts = state.carts.concat(action.payload);
      })
      .addCase(removeCartsAsync.fulfilled, (state, action) => {
        state.carts = state.carts.filter((item) => item.id !== action.payload);
      });
  },
});

export const selectCarts = (state) => state.carts.carts;
export default cartsSlice.reducer;
