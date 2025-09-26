import React from "react";

function ProductCrousal() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://vape-reload.s3.us-east-1.amazonaws.com/products/1702e822-ad68-407a-a39a-d1a147b546e1.jpeg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://vape-reload.s3.us-east-1.amazonaws.com/products/1702e822-ad68-407a-a39a-d1a147b546e1.jpeg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://vape-reload.s3.us-east-1.amazonaws.com/products/1702e822-ad68-407a-a39a-d1a147b546e1.jpeg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ProductCrousal;
