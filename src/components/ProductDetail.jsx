import { useContext } from "react";
import Detail from "./Detail";
import ProductCrousal from "./ProductCrousal";
import { AppContext } from "../store/Store";
function ProductDetail() {
  const { detail } = useContext(AppContext);
  return (
    <>
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              {detail.map((item) => (
                <ProductCrousal key={item.id} item={item} />
              ))}
            </div>
            <div className="col-6">
              {detail.map((item) => (
                <Detail key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
