import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      tagline: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      tagline: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    }
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mb-16">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                plan.isPopular 
                ? 'bg-[#7F27FF] text-white border-transparent shadow-2xl ' 
                : 'bg-white text-gray-900 border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >            
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.isPopular ? 'text-white/80' : 'text-gray-500'}`}>{plan.tagline}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={`text-sm ${plan.isPopular ? 'text-white/70' : 'text-gray-400'}`}>/Month</span>
              </div>         
              <ul className="space-y-4 mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm gap-3">          
                    <svg 
                      className={`w-4 h-4 shrink-0 ${plan.isPopular ? 'text-white' : 'text-[#7F27FF]'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.isPopular ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-auto'>
              <button className={`w-full py-3 rounded-xl font-bold transition-colors ${
                plan.isPopular 
                ? 'bg-white text-[#7F27FF] hover:bg-gray-100' 
                : 'bg-[#7F27FF] text-white hover:bg-[#6b21d9]'
              }`}>
                {plan.buttonText}
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

 