import React from 'react';
import accountImg from '../components/assets/products/user.png'; 
import productImg from '../components/assets/products/package.png'; 
import packageImg from '../components/assets/products/rocket.png';

const Steps = () => {
    const stepsData = [
        {
            id: "01",
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started.",
            image: accountImg 
        },
        {
            id: "02",
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs.",
            image: productImg
        },
        {
            id: "03",
            title: "Start Creating",
            description: "Download and start using your premium tools immediately.",
            image: packageImg
        }
    ];

    return (
        <div className="py-20 px-6 bg-white font-sans">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4">
                    Get Started In 3 Steps
                </h2>
                <p className="text-gray-500 mb-16 max-w-lg mx-auto">
                    Start using premium digital tools in minutes, not hours.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stepsData.map((step) => (
                        <div key={step.id} className="relative bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
                            
                            <div className="absolute top-5 right-5 bg-[#7F27FF] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">
                                {step.id}
                            </div>

                            <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-6">
                                <img 
                                    src={step.image} 
                                    alt={step.title} 
                                    className="w-12 h-12 object-contain" 
                                />
                            </div>

                            <h3 className="text-xl font-bold text-[#111827] mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Steps;
