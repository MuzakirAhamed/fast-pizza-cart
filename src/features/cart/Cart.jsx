import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { clearItems, getTotalPrice } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector(getTotalPrice)
  const dispatch = useDispatch();
  // const cart = fakeCart;
  if (cart.length === 0) return <EmptyCart />;
  return (
    <div>
      <Link
        to="/menu"
        className="text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart,{username}</h2>
      <ul className="divide-y mt-3 divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type={"primary"}>
          <Link to="/order/new">Order pizzas</Link>
        </Button>
        <Button type="secondary" onClick={()=>dispatch(clearItems())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
