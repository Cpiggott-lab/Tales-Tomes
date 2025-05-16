import useFetch from "../../hooks/useFetch";

//https://tales-tomes-production.up.railway.app/cart
function CartPage() {
  const apiURL = "https://tales-tomes-production.up.railway.app/cart";
  const { data, loading, error } = useFetch(apiURL);

  return <h1>Cart Page</h1>;
}
export default CartPage;

// Need to render cart items as a list, need to add in price values to books in the library
// add total for the books in the cart
// add a checkout button
// add a clear cart button
// add a remove item button
// add a remove all button
// add payment options/form for payment options. Do not take information or offer to take info.
