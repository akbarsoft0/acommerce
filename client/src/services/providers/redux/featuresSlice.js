import { convertLength } from "@mui/material/styles/cssUtils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  show: [],
  wishlist: [],
  cart: [],
  location: {},
  userInfo: null,
  alert: null,
};

export const featuresSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setShow: (state, action) => {
      state.show = [action.payload];
    },
    addToCart: (state, action) => {
      const product = state.cart.find((e) => e.id === action.payload.id);
      if (product) {
        product.qty++;
      } else {
        state.cart = [action.payload, ...state.cart];
      }
    },
    addToWishList: (state, action) => {
      // Define addToWishList reducer logic here
    },
    increaseQuantity: (state, action) => {
      const { id, list } = action.payload;
      const product = state[list].find((e) => e.id === id);
      if (product) {
        product.qty++;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id, list } = action.payload;
      const product = state[list].find((e) => e.id === id);
      if (product.qty > 1) {
        product.qty--;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },
    removeFromWishList: (state, action) => {
      state.wishlist = state.cart.filter((p) => p.id !== action.payload);
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
      console.log(state.location);
    },
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
  },
});

export const {
  addToCart,
  addToWishList,
  increaseQuantity,
  decreaseQuantity,
  setAllProducts,
  setShow,
  setUserInfo,
  removeFromCart,
  removeFromWishList,
  setLocation,
  setAlert,
} = featuresSlice.actions;

export default featuresSlice.reducer;
