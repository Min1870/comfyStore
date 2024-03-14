import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartItem from "./CartItem";
import { SingleProductType } from "../interfaces";

const CartItemsList = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cartState.cartItems
  );
  return (
    <>
      {cartItems.map((item: SingleProductType) => {
        return <CartItem key={item.cardId} item={item} />;
      })}
    </>
  );
};

export default CartItemsList;
