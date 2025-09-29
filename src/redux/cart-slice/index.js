import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("cart")) || [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getData(state, { payload }) {
      if (state.data.find((value) => value.id === payload.id)) {
        state.data = state.data.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              count: (item.count += 1),
              userPrice: item.count * item.price,
            };
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify(state.data));
        return;
      }
      state.data = [
        ...state.data,
        { ...payload, count: 1, userPrice: payload.price },
      ];

      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
});

export const { getData } = cartSlice.actions;
export default cartSlice.reducer;
