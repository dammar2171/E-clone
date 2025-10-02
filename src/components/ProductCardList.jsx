import { useContext } from "react";
import ProductCard from "./ProductCard";
import { AppContext } from "../store/Store";

function ProductCardList() {
  const { detail } = useContext(AppContext);
  return (
    <div className="product-list mx-4">
      {detail.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductCardList;
