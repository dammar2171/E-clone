import { useContext, useState } from "react";
import { AppContext } from "../store/Store";
import Dcard from "./Dcard";

function DeliveryCard() {
  const { cartData } = useContext(AppContext);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cartData.reduce(
    (acc, item) => acc + item.paidPrice * item.quantity,
    0
  );
  const totalQuantity = cartData.reduce((acc, item) => acc + item.quantity, 0);

  const discountedTotal = subtotal - subtotal * discount;

  return (
    <div className="container-fluid">
      <div className="container deliveryCardContainer mt-5 rounded">
        <div className="row">
          <div className="col-12">
            {cartData.map((item, index) => (
              <Dcard key={index} item={item} />
            ))}
          </div>

          <div className="col-12 d-flex gap-4 pt-3">
            <span className="w-100 mb-3">
              <input
                className="w-100 rounded form-control"
                type="text"
                placeholder="Discount Code"
              />
            </span>
            <span>
              <button className="applyDcard">Apply</button>
            </span>
          </div>

          <div className="col-12 totalQn">
            <span>Subtotal ({totalQuantity} items)</span>
            <span>AED {subtotal.toFixed(2)}</span>
          </div>

          <div className="col-12 totalQn py-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          {discount > 0 && (
            <div className="col-12 totalQn py-2 text-success">
              <span>Discount Applied</span>
              <span>-{(subtotal * discount).toFixed(2)}</span>
            </div>
          )}

          <div className="col-12 totalAmt py-2">
            <span>Total</span>
            <span>AED {discountedTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryCard;
