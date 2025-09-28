import { useLocation } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { useContext } from "react";
import { AppContext } from "../store/Store";
import CartCard from "./CartCard";
import ProceedCheckout from "./ProceedCheckout";
function CartOffCanvas() {
  const { bagQuantity, cartData } = useContext(AppContext);
  const location = useLocation();
  const hideBagIcon = location.pathname === "/checkout";
  return (
    <>
      <button
        className="position-relative bg-black text-white border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        {!hideBagIcon && (
          <>
            <LuShoppingBag />
            <span className=" position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {bagQuantity}
            </span>
          </>
        )}
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <hr />
          {cartData.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            cartData.map((item, index) => <CartCard key={index} item={item} />)
          )}
          <hr />
          {cartData.length > 0 && <ProceedCheckout />}
        </div>
      </div>
    </>
  );
}

export default CartOffCanvas;
