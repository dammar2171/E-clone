import React from "react";

function Detail() {
  return (
    <div>
      <span>hello</span>
      <h2>hello sir how are you</h2>
      <div className="d-flex">
        <span>hello</span>
        <span>hello</span>
        <span>hello</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        quos!
      </p>
      <hr />
      <p>Product Option</p>
      <br />
      <span>hello</span>
      <br />
      <select name="flavor">
        <option value="mint">mint</option>
        <option value="apple">apple</option>
        <option value="bannana">banana</option>
      </select>
      <br />
      <span>Availabale Option 1 by 1</span>
      <hr />
      <span>quantity</span>
      <div className="btn-group d-flex">
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <span>80 Available</span>
      <br />
      <button>Add To Cart</button>
    </div>
  );
}

export default Detail;
