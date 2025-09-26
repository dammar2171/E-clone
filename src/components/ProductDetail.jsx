import Detail from "./Detail";
import ProductCrousal from "./ProductCrousal";

function ProductDetail() {
  return (
    <div className="container-fluid py-4">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ProductCrousal />
          </div>
          <div className="col-6">
            <Detail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
