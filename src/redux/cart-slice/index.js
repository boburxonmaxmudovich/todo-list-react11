import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("cart")) || [],
  likes: JSON.parse(localStorage.getItem("likes")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getData(state, { payload }) {
      const existingItem = state.data.find((item) => item.id === payload.id);

      if (existingItem) {
        existingItem.count += 1;
        existingItem.userPrice = existingItem.count * existingItem.price;
      } else {
        state.data.push({
          ...payload,
          count: 1,
          userPrice: payload.price,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    deleteData(state, { payload }) {
      state.data = state.data.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    incrementCount(state, { payload }) {
      const item = state.data.find((i) => i.id === payload);
      if (item) {
        item.count += 1;
        item.userPrice = item.count * item.price;
      }
      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    decrementCount(state, { payload }) {
      const item = state.data.find((i) => i.id === payload);
      if (item && item.count > 1) {
        item.count -= 1;
        item.userPrice = item.count * item.price;
      }
      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    setCount(state, { payload }) {
      const { id, count } = payload;
      const item = state.data.find((i) => i.id === id);
      if (item) {
        item.count = count;
        item.userPrice = item.count * item.price;
      }
      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    toggleLike(state, { payload }) {
      const existing = state.likes.find((item) => item.id === payload.id);
      if (existing) {
        // agar oldin like bo‘lgan bo‘lsa – o‘chiramiz
        state.likes = state.likes.filter((item) => item.id !== payload.id);
      } else {
        // yangi like qo‘shamiz
        state.likes.push(payload);
      }
      localStorage.setItem("likes", JSON.stringify(state.likes));
    },
  },
});

export const {
  getData,
  deleteData,
  incrementCount,
  decrementCount,
  setCount,
  toggleLike, // yangi export
} = cartSlice.actions;

export default cartSlice.reducer;
