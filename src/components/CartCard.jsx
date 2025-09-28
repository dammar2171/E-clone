import { useState, useContext, useEffect } from "react";
import { AppContext } from "../store/Store";

const CartCard = ({ item }) => {
  const [localQuantity, setLocalQuantity] = useState(item.quantity);
  const { updateCartItemQuantity, deleteCartItemQuantity, totalCost } =
    useContext(AppContext);

  useEffect(() => {
    updateCartItemQuantity(item.name, localQuantity);
  }, [localQuantity]);

  const addCartQuantity = () => {
    setLocalQuantity((prev) => prev + 1);
  };

  const subCartQuantity = () => {
    setLocalQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const onHandleDeleteItem = () => {
    deleteCartItemQuantity(item.name);
  };

  return (
    <div className="container-fluid custumCartCard">
      <div className="row mb-2">
        <div className="col-3">
          <img src={item.image} width={80} alt={item.name} />
        </div>
        <div className="col-9">
          <p className="mt-2 fw-semibold fs-6">{item.name}</p>
          <div className="btnGroupCart p-0 m-0 d-flex gap-3 align-items-center">
            <button onClick={addCartQuantity}>+</button>
            <span>{localQuantity}</span>
            <button onClick={subCartQuantity}>-</button>
          </div>
          <div className="d-flex delTotal">
            <span className="cartTotal">AED {totalCost}</span>
            <span className="cartDelete" onClick={onHandleDeleteItem}>
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
