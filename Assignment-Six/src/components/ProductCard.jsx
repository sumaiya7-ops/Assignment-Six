import React from "react";

const ProductCard = ({ product, addToCart, isInCart }) => {
  const tagStyles = {
    "Best-seller": "bg-amber-100 text-[#bb4d00]",
    popular: "bg-[#e1e7ff] text-blue-500",
    new: "bg-[#dbfce7] text-[#0a883e]",
  };
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col relative hover:shadow-md transition-all duration-300">
       {product.tag && (
        <span
          className={`absolute top-5 right-5 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
            tagStyles[product.tag] || "bg-gray-50 text-gray-500"
          }`}
        >
          {product.tag}
        </span>
      )}
      <div className="mb-6">
        <div className="w-14 h-14 bg-[#F5F3FF] rounded-2xl flex items-center justify-center">
          <img
            src={product.icon}
            alt={product.name}
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>  
      <h3 className="text-xl font-bold text-[#111827] mb-2">
        {product.name}
      </h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
        {product.description}
      </p>  
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-3xl font-black text-[#111827]">
          ${product.price}
        </span>
        <span className="text-gray-400 text-sm font-medium italic">
          /{product.period}
        </span>
      </div>
      <ul className="space-y-4 mb-8">
        {product.features?.map((f, i) => (
          <li key={i} className="flex items-center text-[13px] text-gray-600">
            <span className="text-[#22C55E] mr-3 font-bold text-lg leading-none">
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={() => addToCart(product)}
        disabled={isInCart}
        className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
          isInCart
            ? "bg-[#22C55E] text-white cursor-not-allowed"
            : "bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
        }`}
      >
        {isInCart ? "✓ Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;