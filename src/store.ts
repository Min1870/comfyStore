import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export default store;
