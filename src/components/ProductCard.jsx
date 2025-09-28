import "../css/ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const navigate = useNavigate();
  const changePoductPage = (e) => {
    navigate("/product");
  };
  return (
    <div
      className="card"
      onClick={changePoductPage}
      style={{ width: "18rem", cursor: "pointer" }}
    >
      <img src={item.images.image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          <a href="#">{item.productName}</a>
        </h5>
        <div className="d-flex PriceStockCard">
          <p className="card-text price">{item.paidPrice}</p>
          <p className="card-text stock">{item.available}</p>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3">
          <div
            className="rounded-circle border border-secondary"
            style={{ width: 16, height: 16, backgroundColor: "#ef4444" }}
            title="red"
          />
          <div
            className="rounded-circle border border-secondary"
            style={{ width: 16, height: 16, backgroundColor: "#22c55e" }}
            title="green"
          />
          <div
            className="rounded-circle border border-secondary"
            style={{ width: 16, height: 16, backgroundColor: "#9ca3af" }}
            title="gray"
          />
          <div
            className="rounded-circle border border-secondary"
            style={{ width: 16, height: 16, backgroundColor: "#eab308" }}
            title="yellow"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
