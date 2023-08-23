import { Link } from "react-router-dom";

export default function Button({ children, type, to, onClick }) {
  const base =
    "inline-block bg-yellow-400 uppercase rounded-full tracking-wide font-semibold hover:bg-yellow-300 transition-colors duration-300";
  const styles = {
    primary: base + "py-3 px-4 sm:px-6 md:py-4 ",
    small: base + "py-2 px-3 md:px-5 md:py-2.5",
    secondary:
      "inline-block px-4 py-3 uppercase rounded-full border-2 text-stone-400 border-stone-300 tracking-wide font-semibold hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300",
    round: base + "py-3 px-3 md:px-3.5 md:py-2 text-sm hover:bg-yellow-300 transition-colors duration-300 focus:ring focus:outline-none focus:ring-offset-2 focus:ring-yellow-500 active-bg-yellow-700",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }
  return <button className={styles[type]}>{children}</button>;
}
