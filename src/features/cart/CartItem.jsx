import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem, getCurrentQuantity } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdatecartQuantity from "./UpdatecartQuantity";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));
  return (
    <li className="sm:flex sm:justify-between sm:items-center py-4">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center sm:gap-6">
        <p className="font-bold text-sm">{formatCurrency(totalPrice)}</p>
        <UpdatecartQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
