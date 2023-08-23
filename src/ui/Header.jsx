import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-yellow-500 px-4 py-3 font-semibold uppercase">
      <Link to="/" className="tracking-widest">
        {" "}
        FAST REACT PIZZA CO.
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}
