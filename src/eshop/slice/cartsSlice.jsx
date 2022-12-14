import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  carts: [],
};
export const getCartsAsync = createAsyncThunk("carts/get", async () =>
  axios
    .get("http://localhost:5000/carts")
    .then((res) => res.data)
    .catch((err) => {
      throw err.data;
    })
);
export const addCartsAsync = createAsyncThunk("carts/add", async (data) =>
  axios
    .post("http://localhost:5000/carts", data)
    .then((res) => res.data)
    .catch((err) => {
      throw err.data;
    })
);
export const removeCartsAsync = createAsyncThunk("carts/remove", async (data) =>
  axios
    .delete(`http://localhost:5000/carts/${data}`)
    .then((res) => data)
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
      .addCase(addCartsAsync.rejected, (state, action) => {})
      .addCase(removeCartsAsync.fulfilled, (state, action) => {
        state.carts = state.carts.filter((item) => item.id !== action.payload);
      });
  },
});

export const selectCarts = (state) => state.carts.carts;
export default cartsSlice.reducer;
