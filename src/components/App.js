import axios from "axios";
import { useEffect, useRef, useState } from "react";
import logo from "../logo.svg";
import "./App.css";
import { Card } from "./gameCard/card";
import { Search } from "./search/search";
import { gameData } from "./source";


// let url = 'https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter'
function App() {
const inputSearch =useRef();


const [filters,setFilters]=useState(false);
const [levelT,setLevelT]=useState(false);
const [Topic,setTopic]=useState(false);


const [level,setLevel]=useState(['all','kkkkk']);
const [topic,setTopicT]=useState(['all','kkkkk']);
const [group,setgroup]=useState(['all','kkkkk']);

const [ma,setma]=useState(false);
const [propdata,setpropdata]= useState(null)
useEffect(() => {
//   (async()=>{
//     const response =await axios.get(url)
// const data =await response.data;
// console.log(data)
//   })()

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// usage example:
// var unique = a.filter(onlyUnique);

setTimeout(()=>{
  const data = gameData;
  setpropdata([...data])

  //filtering levels
  const levels=data.map(e=>e.Level);
  const topics=data.map(e=>e.Topic);
  const groups=data.map(e=>e.Group);



  let filled = levels.filter(onlyUnique);
  let filled2 = groups.filter(onlyUnique);
  let filled3 = topics.filter(onlyUnique);
  // console.log(filled)
  setLevel(filled)
  setTopicT(filled3)
  setgroup(filled2)
},3000)


}, [])


const filteredit=(name,fil)=>{
  const dat = inputSearch.current.value;
  setTimeout(()=>{
    const data = gameData;
    if(fil==='all'){
      setpropdata(data)
    }else{
      setpropdata([...data.filter(l=>l[`${name}`]===fil)])
    }
    
  },1500)
  // console.log(dat)
}
const forSearching=()=>{
  setpropdata(null)
  setTimeout(()=>{
   console.log(inputSearch.current.value)
   const data = gameData;
     setpropdata([...data.filter(l=>l.GameTitle.toLowerCase().match(inputSearch.current.value))])

},1500)}
const forSearching2=(e)=>{
  setpropdata(null)
  setTimeout(()=>{
  //  console.log()
   const data = gameData;
     setpropdata([...data.filter(l=>l.GameTitle.toLowerCase().match(e.target.value))])

},1500)}
// console.log(propdata)
  return (
    <div className="block bg-green-100 text-center h-screen">
      <div className="min-h-screen bg-gray-100">
        <header className="pb-24 bg-indigo-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative py-5 flex items-center justify-center lg:justify-between">
            
              <div className="absolute left-0 flex-shrink-0 lg:static">
                <a href="535">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto"
                    src="https://9ijakids.com/wp-content/uploads/2020/06/cropped-9ijakids_logo___160px-2.png"
                    alt="Workflow"
                  />
                </a>
              </div>

             
              <div className="flex-1 min-w-0 px-12 lg:hidden">
                <div className="max-w-xs w-full mx-auto">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative text-white focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                     


                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search"
                      className="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                    autoComplete="off"
                      onChange={forSearching2}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block border-t border-white border-opacity-20 py-5">
              <div className="flex  items-center">
                <div className="w-full mx-auto">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative text-white focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      


                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      autoComplete="off"
                      id="search"
                      className="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                      ref={inputSearch}
                    />
                  </div>
                </div>
                <input
                  id="button"
                  value="search"
                  className="block bg-indigo-100 py-2 px-8 border border-transparent rounded-lg leading-5 text-indigo-400 text-center uppercase text-xl cursor-pointer focus:ring-0  sm:text-sm"
                  placeholder="Search"
                  type="button"
                  name="search"
                  onClick={forSearching}
                />
              </div>
            </div>
          </div>
        </header>

        <main className="-mt-24 pb-8">
          <div className="max-w-3xl mx-auto px-2 sm:px-6 lg:max-w-7xl lg:px-2">
            <h1 className="sr-only">Page title</h1>
            {/* <!-- Main 3 column grid --> */}
            <div className="grid grid-cols-1 gap-1 items-start lg:grid-cols-3 lg:gap-2">
              {/* <!-- Left column --> */}
              {/* <div className="grid grid-cols-1 lg:hidden">
              <Search key='232'  search={filteredit} main={setpropdata} toggle={filters} name="Level" data={level} setFilters={setFilters} />
                <Search key='112121' search={filteredit} main={setpropdata} toggle={Topic} name="Topic" data={topic} setFilters={setTopic} />
                <Search key='21213232' search={filteredit} main={setpropdata} toggle={levelT} name="Group" data={group} setFilters={setLevelT} />
            
              </div> */}
              <div className="grid grid-cols- gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="p-6 grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                     {propdata?
                       propdata.map((el,i)=>{
return(
  <Card key={i} data={el} />
)
                       })
                     :<>
                     <Card/>
                     <Card/>
                     <Card/>

                     </>}
                    </div>
                  </div>
                </section>
              </div>

              {/* <!-- Right column --> */}
              <div className="h-auto rounded-lg lg:block">
                <Search key='232'  search={filteredit} main={setpropdata} toggle={filters} name="Level" data={level} setFilters={setFilters} />
                <Search key='112121' search={filteredit} main={setpropdata} toggle={Topic} name="Topic" data={topic} setFilters={setTopic} />
                <Search key='21213232' search={filteredit} main={setpropdata} toggle={levelT} name="Group" data={group} setFilters={setLevelT} />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
              <span className="block sm:inline">
                &copy; 2021 Viktoh.dev Labs.
              </span>{" "}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
