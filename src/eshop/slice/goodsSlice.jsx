import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  goods: [],
};
export const getGoodsAsync = createAsyncThunk("goods/get", async () =>
  axios
    .get("http://localhost:5000/goods")
    .then((res) => res.data)
    .catch((err) => {
      throw err.data;
    })
);
export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGoodsAsync.fulfilled, (state, action) => {
      state.goods = action.payload;
    });
  },
});

export const selectGoods = (state) => state.goods.goods;
export default goodsSlice.reducer;
