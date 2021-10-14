import React, { useState } from "react";

export const Search = ({ toggle, setFilters, name, data ,search,main}) => {
    const [current,setCurrent]=useState(-1);
    const [val,setVal]=useState('all')
  const setToggle = () => {
    setFilters(!toggle);
  };
  return (
    <section aria-labelledby="section-2-title">
      <h2 className="sr-only" id="section-2-title">
        Section title
      </h2>
      <div className=" bg-white  shadow">
        <div className="py-1">
          <div className="max-w-md mx-auto">
            <label htmlFor="select" className="font-semibold block py-2">
              Filter by {name}:
            </label>

            <div className="relative">
              <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
                <input
                  value={val}
                  name="select"
                  id="select"
                  className="px-4 appearance-none outline-none text-gray-800 w-full"
                />

                <label
                  onClick={setToggle}
                  htmlFor="show_more"
                  className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
                >
                  <svg
                    className="w-4 h-4 mx-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </label>
              </div>

              <input
                type="checkbox"
                name="show_more"
                id="show_more"
                className="hidden peer"
              />
              <div
                className={`rounded shadow bg-white overflow-hidden ${
                  toggle ? "" : "hidden"
                } peer-checked:flex flex-col w-full mt-1 border border-gray-200`}
              >
                <div onClick={()=>{
                    setVal('all')
                    setCurrent(-1)
                        main(null)
                        search(name,'all')}} className={`cursor-pointer group block p-2 border-transparent border-l-4 ${current ===-1?' border-blue-600':''} hover:border-blue-600 group-hover:bg-gray-100`}>
                   
                       All
                     
                    </div>
                {data.map((el,i) => {
                  return (
                    <div key={i} onClick={()=>{
setVal(el)

                        setCurrent(i)
                        main(null)
                        search(name,el)}} className={`cursor-pointer group block p-2 border-transparent border-l-4 ${current ===i?'border-blue-600':''} hover:border-blue-600 group-hover:bg-gray-100`}>
                   
                        {el}
                     
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
