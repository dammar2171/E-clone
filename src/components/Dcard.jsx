import "../css/Checkout.css";
function Dcard({ item }) {
  return (
    <div className="row py-3">
      <div className="col-2">
        <img src={item.image} width={80} />
      </div>
      <div className="col-10  mt-3 cardDetail">
        <span>{item.name}</span>
        <span>AED: {item.paidPrice}</span>
        <span>QTY {item.quantity}</span>
      </div>
    </div>
  );
}

export default Dcard;
