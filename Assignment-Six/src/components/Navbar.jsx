import React from 'react';
import ShopImage from '../components/assets/products/shopping-cart.png'

const Navbar = ({cartCount}) => {
    return (
      
             <div className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="flex justify-between items-center py-4 px-10 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-indigo-700">DigiTools</div>
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#">Products</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQ</a>
        </div>
        <div className='flex items-center gap-6'>        
          <div className="relative">
            <img src={ShopImage} alt="cart" className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-[10px] w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold">
            Get Started
          </button>
        </div>
      </nav>
    </div>
      
    );
};

export default Navbar;