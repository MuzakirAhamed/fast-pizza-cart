import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity)
  const totalPrice = useSelector(getTotalPrice)
  if(!totalQuantity) return null
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200">
      <p className="space-x-4 text-stone-300">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
