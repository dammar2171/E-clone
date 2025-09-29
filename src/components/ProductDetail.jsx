import { useContext } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";
import ProductCrousal from "./ProductCrousal";
import { AppContext } from "../store/Store";
function ProductDetail() {
  const { detail } = useContext(AppContext);
  const { id } = useParams();

  // Find the product with the matching id
  const product = detail.find((item) => String(item.id) === id);

  if (!product) return <p>Product not found</p>;
  return (
    <>
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ProductCrousal item={product} />
            </div>
            <div className="col-6">
              <Detail item={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
