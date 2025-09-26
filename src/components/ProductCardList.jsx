import React from "react";
import ProductCard from "./ProductCard";

function ProductCardList() {
  const Products = [
    {
      id: 1,
      image:
        "https://vape-reload.s3.us-east-1.amazonaws.com/products/1702e822-ad68-407a-a39a-d1a147b546e1.jpeg",
      productName: " E-shihsa luxe 30000",
      price: "AED 45.00",
      stock: "80 in Stock",
    },
    {
      id: 2,
      image:
        "https://vape-reload.s3.us-east-1.amazonaws.com/products/1702e822-ad68-407a-a39a-d1a147b546e1.jpeg",
      productName: " E-shihsa luxe 30000",
      price: "AED 45.00",
      stock: "80 in Stock",
    },
  ];
  return (
    <div className="product-list gap-4 d-flex">
      {Products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductCardList;
