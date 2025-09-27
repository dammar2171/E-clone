function ProceedCheckout() {
  return (
    <div className="container-fluid py-2 cartButtom">
      <div className="totalPrice">
        <span>Total:</span>
        <span>44:00</span>
      </div>
      <input type="checkbox" />
      <span className="inputText">
        I agree to the terms and conditions
      </span>{" "}
      <br />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default ProceedCheckout;
