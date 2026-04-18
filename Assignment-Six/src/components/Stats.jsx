import React from 'react';

const Stats = () => {
    return (      
            <div className="bg-[#7F27FF] text-white py-12 px-6">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around text-center gap-8">    
   
    <div className="flex flex-col">
      <h2 className="text-4xl md:text-5xl font-bold">50K+</h2>
      <p className="text-sm md:text-base opacity-80 mt-1">Active Users</p>
    </div>  
    <div className="hidden md:block h-16 w-[1px] bg-white/30"></div>  
    <div className="flex flex-col">
      <h2 className="text-4xl md:text-5xl font-bold">200+</h2>
      <p className="text-sm md:text-base opacity-80 mt-1">Premium Tools</p>
         </div>    
    <div className="hidden md:block h-16 w-[1px] bg-white/30"></div>   
    <div className="flex flex-col">
      <h2 className="text-4xl md:text-5xl font-bold">4.9</h2>
      <p className="text-sm md:text-base opacity-80 mt-1">Rating</p>
    </div>
  </div>
</div>     
    );
};

export default Stats;