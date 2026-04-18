import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);
  const [lastSelectedId, setLastSelectedId] = useState(null);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
      toast.success("Added to cart!");
    }

    setLastSelectedId(product.id);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));

    if (lastSelectedId === id) {
      setLastSelectedId(null);
    }

    toast.error("Removed!");
  };

  const checkout = () => {
    setCart([]);
    setLastSelectedId(null);
    toast.info("Checkout done!");
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <div className="text-center pt-10 pb-8 px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Premium Digital Tools
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Choose from our curated collection of digital products.
        </p>   
        <div className="mt-8 inline-flex bg-gray-200 rounded-full p-1 w-fit mx-auto">
          <button
            onClick={() => setView("products")}
            className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
              view === "products"
                ? "bg-[#7C3AED] text-white"
                : "text-gray-600"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setView("cart")}
            className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
              view === "cart"
                ? "bg-[#7C3AED] text-white"
                : "text-gray-600"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>
      <div className="container mx-auto p-10">
        {view === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((singleProduct) => (
              <ProductCard
                key={singleProduct.id}
                product={singleProduct}
                addToCart={addToCart}
                isInCart={lastSelectedId === singleProduct.id}
              />
            ))}
          </div>
        ) : (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            checkout={checkout}
          />
        )}
      </div>
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
