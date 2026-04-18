import React from 'react';
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-[#0B1120] text-white py-16 px-6 md:px-12 ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">                   
            
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">DigiTools</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Premium digital tools for creators, professionals, and businesses. 
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>         
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Product</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
                        </ul>
                    </div>         
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Company</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">About</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                        </ul>
                    </div>  
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Social Links</h3>
                        <div className="flex items-center gap-3">                 
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1120] cursor-pointer hover:bg-gray-200 transition-colors">
                          <FaFacebookF />
                           </div>                
                                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1120] cursor-pointer hover:bg-gray-200 transition-colors">
                                  <FaYoutube />
                                    </div>  
                                       <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1120] cursor-pointer hover:bg-gray-200 transition-colors">
                                     <FaXTwitter />
                                   </div>          
                             </div>
                    </div>
                </div>    
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-6">
                         <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
