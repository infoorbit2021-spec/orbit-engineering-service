"use client";

import { useState } from "react";



export default function Services({servicedata}:{servicedata:any[]}) {
  const [active, setActive] = useState(0);
  const tabs = servicedata;
  console.log("tabs --------------------------------- ",tabs);
  return (
    // <section className="py-20 bg-white" id="services">
    //   <div className=" mx-auto px-4">
        
    //     {/* Heading */}
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl md:text-4xl font-bold">Services Offered</h2>
    //       <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    //     </div>

    //     {/* Tabs */}
    //     <div className="max-w-4xl mx-auto">
    //       <div className="flex flex-wrap justify-center gap-3 mb-10">
    //         {tabs.map((tab, i) => (
    //           <button
    //             key={i}
    //             onClick={() => setActive(i)}
    //             className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all
    //             ${
    //               active === i
    //                 ? "bg-blue-600 text-white shadow-md"
    //                 : "bg-white text-gray-600 border hover:bg-blue-50"
    //             }`}
    //           >
    //             <i className={tab.icon}></i>
    //             {tab.title}
    //           </button>
    //         ))}
    //       </div>

    //       {/* Content Area */}
    //       <div className="bg-white shadow-md p-6 rounded-xl text-gray-700 leading-relaxed animate-fadeIn">
    //         {tabs[active].content}
    //       </div>
    //     </div>
    //   </div>
    // </section>
     <section className="py-20 bg-white" id="services">
      <div className=" mx-auto px-4">

        {/* Heading */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            {tabs.Title || "Services Offered"}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div> */}

        {/* Layout Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Left: Tab Buttons */}
          <div className="space-y-3 md:col-span-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`flex items-center gap-3 w-full text-left px-5 py-4 rounded-lg border transition-all 
                  ${
                    active === index
                      ? "bg-[#a500da] text-white shadow-lg border-blue-600"
                      : "bg-white text-gray-700 hover:bg-blue-50"
                  }
                `}
              >
                {/* {tab.Icon && <i className={`${tab.Icon} text-lg`}></i>} */}
                <span className="font-medium text-sm md:text-base">{tab.Title}</span>
              </button>
            ))}
          </div>

          {/* Right: Content */}
          <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-lg leading-relaxed text-gray-700 animate-fadeIn">
            {tabs[active].ShortDescription}
          </div>

        </div>
      </div>
    </section>
  );
}
