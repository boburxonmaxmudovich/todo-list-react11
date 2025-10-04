// src/redux/cart-slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
data: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
name: "cartSlice",
initialState,
reducers: {
addData: (state, action) => {
state.data.push(action.payload);
localStorage.setItem("cart", JSON.stringify(state.data));
},
deleteData: (state, action) => {
state.data = state.data.filter((item) => item.id !== action.payload);
localStorage.setItem("cart", JSON.stringify(state.data));
},
incrementCount: (state, action) => {
const item = state.data.find((i) => i.id === action.payload);
if (item) {
item.count = (item.count || 1) + 1;
}
localStorage.setItem("cart", JSON.stringify(state.data));
},
decrementCount: (state, action) => {
const item = state.data.find((i) => i.id === action.payload);
if (item && (item.count || 1) > 1) {
item.count -= 1;
}
localStorage.setItem("cart", JSON.stringify(state.data));
},
// (ixtiyoriy) to'g'ridan-to'g'ri countni o'rnatish:
setCount: (state, action) => {
const { id, count } = action.payload;
const item = state.data.find((i) => i.id === id);
if (item) item.count = count;
localStorage.setItem("cart", JSON.stringify(state.data));
},
},
});

export const { addData, deleteData, incrementCount, decrementCount, setCount } = cartSlice.actions;
export default cartSlice.reducer;
