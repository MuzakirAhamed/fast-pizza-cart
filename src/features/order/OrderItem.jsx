import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex justify-between items-center gap-4">
        <p className="text-sm">
          <span className="font-semibold text-sm">{quantity}&times;</span> {name}
        </p>
        <p className="font-semibold text-sm">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
