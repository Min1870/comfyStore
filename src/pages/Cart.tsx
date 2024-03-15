import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";
import { RootState } from "../store";

const Cart = () => {

  const user = useSelector((state: RootState) => state.userState.user);
  const numItemsInCart = useSelector(
    (state: RootState) => state.cartState.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your Cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              LOGIN TO CHECKOUT
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
