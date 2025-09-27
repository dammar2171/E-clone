import { Link } from "react-router-dom";
import "../css/ProductCard.css";
import { useContext, useState } from "react";
import { AppContext } from "../store/Store";
import { useRef } from "react";
function Detail({ item }) {
  const selectValue = useRef();
  const { setBagQuantity, bagQuantity, addToCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);

  const handleCartButton = () => {
    const flavour = selectValue.current.value;
    setBagQuantity(quantity, flavour);
    addToCart(item.productName, quantity, item.images.image1, flavour);
  };
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const subQuantity = () => {
    if (quantity === 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="customDetail">
      <span id="brandName">
        <Link to={"/"} id="home">
          Home
        </Link>
        {item.brandName}
      </span>
      <h2 className="productName">{item.productName}</h2>
      <div className="d-flex gap-2 align-items-center pb-2">
        <span id="originalPrice">
          <strike>AED{item.originalPrice}</strike>
        </span>
        <span id="paidPrice">AED {item.paidPrice}</span>
        <span id="savedPrice">Save AED{item.savedPrice}</span>
      </div>
      <p id="description">{item.description}</p>
      <hr />
      <p className="text-black fs-5 fw-bold">Product Options</p>
      <span className="flavour">Flavour</span>
      <br />
      <select name="flavor" ref={selectValue}>
        <option value={item.flavour.first}>{item.flavour.first}</option>
        <option value={item.flavour.second}>{item.flavour.second}</option>
        <option value={item.flavour.third}>{item.flavour.third}</option>
      </select>
      <br />
      <span className="availableOption">
        Availabale Option {item.availableOption}
      </span>
      <hr className="mt-4" />
      <span className="fs-6 fw-semibold ">QUANTITY</span>
      <div className="btn-group d-flex align-items-center gap-2">
        <button onClick={addQuantity} className="addSub">
          +
        </button>
        <span>{quantity}</span>
        <button onClick={subQuantity} className="addSub">
          -
        </button>
      </div>
      <span className="available">{item.available} Available</span>
      <br />
      <br />
      <button className="addCartBtn" onClick={handleCartButton}>
        Add To Cart
      </button>
    </div>
  );
}

export default Detail;
