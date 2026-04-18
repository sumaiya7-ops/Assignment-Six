import React from 'react';
import ShopImage from "../components/assets/products/shopping-cart.png"
const Cart = ({ cart, removeFromCart, checkout }) => {
 const total = cart.reduce(
  (acc, item) => acc + item.price * (item.qty || 1),
  0
);
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-6">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center py-10 flex flex-col items-center justify-center">
           <img
              src={ShopImage} 
            alt="Empty Card"
            className="w-8 h-8"
           />
             <p className="text-gray-500 mb-4">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-xl border border-gray-50 transition-all hover:shadow-sm"
                >
                  <div className="flex items-center gap-4">                   
                    <div className="w-14 h-14 bg-white rounded-lg flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden">
                      {item.icon ? (
                        <img 
                          src={item.icon} 
                          alt={item.name} 
                          className="w-full h-full object-contain p-2" 
                        />
                      ) : (
                        <span className="text-2xl">{item.icon || "📦"}</span>
                      )}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 leading-tight">
                            {item.name}
                         </h3>

                        <p className="text-gray-400 text-sm font-medium">
                               ${item.price}
                           </p>

                        <p className="text-sm text-gray-500">
                       Qty: {item.qty}
                          </p>
                      </div>
                    
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#FF4D6D] hover:text-red-600 font-semibold text-sm transition-colors pr-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>       
            <div className="mt-10 pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-500 font-medium">Total:</span>
                <span className="text-3xl font-bold text-gray-900">${total}</span>
              </div>
              
              <button
                onClick={checkout}
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 rounded-full shadow-xl shadow-purple-100 transition-all transform active:scale-[0.98]"
              >
                Proceed To Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
