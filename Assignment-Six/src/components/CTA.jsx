import React from 'react';

const CTA = () => {
    return (       
    <div className="bg-[#7F27FF] text-white py-20 px-6  ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>       
           <p className="text-white/80 text-sm md:text-lg mb-10 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          <br className="hidden md:block" /> Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="bg-white text-[#7F27FF] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Explore Products
          </button>
          <button className="border border-white/50 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto">
            View Pricing
          </button>
        </div>  
        <p className="text-white/70 text-xs md:text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>      
    );
};

export default CTA;