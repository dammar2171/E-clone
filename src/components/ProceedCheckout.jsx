import { useContext, useState } from "react";
import { AppContext } from "../store/Store";
import { useNavigate } from "react-router-dom";

function ProceedCheckout() {
  const [isChecked, setIsChecked] = useState(false);
  const { totalCost, bagQuantity } = useContext(AppContext);
  const navigate = useNavigate();

  const onHandleCheck = (e) => {
    const checkValue = e.target.checked;
    setIsChecked(true);
  };

  const onHandleProceedClicked = () => {
    if (isChecked && bagQuantity > 0) {
      navigate("/checkout");
    }
  };
  return (
    <div className="container-fluid py-2 cartButtom">
      <div className="totalPrice">
        <span>Total:</span>
        <span>{totalCost}</span>
      </div>
      <input type="checkbox" onChange={onHandleCheck} />
      <span className="inputText">
        I agree to the terms and conditions
      </span>{" "}
      <br />
      <button onClick={onHandleProceedClicked}>Proceed to Checkout</button>
    </div>
  );
}

export default ProceedCheckout;
