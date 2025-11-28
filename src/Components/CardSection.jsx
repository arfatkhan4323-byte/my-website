import React from 'react'

const CardSection = () => {
    return (
    <>
     <section className="bg-white py-20"> 
  
    
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12"> 
        
        
        <div className="w-full md:order-1"> 
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-100">
                
                
                <div className="mb-8 pb-8 border-b border-gray-100">
                    <div className="flex items-start mb-3">
                       
                        <span className="text-blue-500 mr-3 pt-1 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" 
                            strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 
                            1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 
                            11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </span>
                        <h3 className="text-2xl font-bold text-gray-800">Address</h3>
                    </div>
                    <p className="text-gray-600 ml-9 leading-relaxed">
                        A/13 Block 1 F.B Area Sharifabad Karachi,<br/>
                        Pakistan
                    </p>
                </div>

              
                <div>
                    <div className="flex items-start mb-3">
                       
                        <span className="text-blue-500 mr-3 pt-1 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" 
                             strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path></svg>
                        </span>
                        <h3 className="text-2xl font-bold text-gray-800">Email Us</h3>
                    </div>
                    <p className="text-gray-600 ml-9">
                        <a href="mailto:info@3pldynamics.org" className="text-gray-600 hover:text-blue-500 transition duration-150">
                            info@3pldynamics.org
                        </a>
                    </p>
                </div>
            </div>
        </div>

       
        <div className="w-full md:order-2 mt-12 md:mt-0">
            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-xl">
                
               
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Need Help? Open a Ticket</h2>
                <p className="text-gray-600 mb-8">Our support team will get back to you ASAP via email.</p>

                <form className="space-y-4">
                    
                   
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg 
                                shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                       
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 
                                rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        
                       
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Your Phone</label>
                            <div className="mt-1 flex rounded-lg shadow-sm">
                                <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 
                                border border-r-0 border-gray-300 rounded-l-lg">
                                    <span className="mr-1 text-base">🇺🇸</span> +1
                                </span>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone"
                                    className="flex-1 block w-full px-4 py-3 bg-gray-50 border
                                     border-gray-300 rounded-none rounded-r-lg focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        
                        
                        <div>
                            <label htmlFor="plan" className="block text-sm font-medium text-gray-700">Your Plan</label>
                            <select
                                id="plan"
                                className="mt-1 block w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-300 
                                rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                <option>Select your plan</option>
                                <option>Basic Plan</option>
                                <option>Pro Plan</option>
                                <option>Enterprise</option>
                            </select>
                        </div>
                    </div>

                   
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input
                            type="text"
                            id="company"
                            placeholder="Enter your company name"
                            className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg 
                            shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    
                   
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Enter your Message"
                            className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg
                             shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        ></textarea>
                    </div>

                   
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-auto px-6 py-3 border border-transparent text-base font-medium 
                            rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none 
                            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit Ticket
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</section>
    </>
    );
};


export default CardSection;
