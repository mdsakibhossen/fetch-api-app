import React from "react";

const ProductCard = ({ product }) => {
    // console.log(product);
  return (
    <div className="card shadow cursor-pointer group">
      <div className="img overflow-hidden h-40">
        <img
          className="w-full rounded group-hover:scale-110 transition-all"
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className="info px-1 py-3">
        <h3 className="text-lg font-medium text-purple-600 mb-1">
          {product.title}
        </h3>
        <p>
          <span className="font-semibold">Category:</span>{" "}
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
