import React from 'react';
import PlayImage from '../components/assets/products/Play.png'
import heroImage from '../components/assets/products/banner.png'
const Banner = () => {
    return (
                  <div className="max-w-7xl pb-20 mx-auto flex flex-col md:flex-row items-center px-10 mt-16">
                    <div className="md:w-1/2 space-y-6">
                      <span className="text-indigo-600 font-semibold bg-indigo-50 px-4 py-1 rounded-full text-sm">
                        New: AI-Powered Tools Available
                      </span>
                      <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
                        Supercharge Your <br /> 
                        <span className="text-indigo-600">Digital Workflow</span>
                      </h1>
                      <p className="text-gray-500 text-lg max-w-md">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place.
                      </p>
                      <div className="flex space-x-4">
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg">
                          Explore Products
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-bold flex items-center">
                          <span><img src= {PlayImage} /></span> <span className="ml-2">Watch Demo</span>
                        </button>
                      </div>
                    </div>                  
                   <div className="md:w-1/2 mt-12 md:ml-32 ml-0 md:mt-0">              
                     <img src={heroImage} alt="Hero Illustration" className="w-[500px] h-[590px]" />
                  </div>
                  </div>
           
        
    );
};

export default Banner;