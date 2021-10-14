import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const Card = ({data}) => {
    return (
        <div>
        <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto shadow-lg">
        {data?  <>
          <div
            className="overflow-hidden w-full rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
            data-movie-id="438631"
          >
            <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
            <div
              className="relative curso-pointer group z-10 px-10 space-y-6 movie_info"
              data-lity=""
              href="https://www.youtube.com/embed/aSHs224Dge0"
            >
              <div className="poster__info align-self-end w-full">
                <div className="h-16"></div>
                <div className="space-y-6 detail_info">
                  <div className="flex flex-col space-y-2 inner">
                    <a
                      href="yufy"
                      className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                      data-unsp-sanitized="clean"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                        Trailer
                      </div>
                    </a>
                    <h3
                      className="text-2xl font-bold text-white"
                      data-unsp-sanitized="clean"
                    >
                      {data.GameTitle}
                    </h3>
                    <div className="mb-0 text-lg text-gray-400">
                     {data.Topic}
                    </div>
                  </div>
                  <div className="flex flex-row justify-between datos">
                    <div className="flex flex-col datos_col">
                      <div className="popularity">{data.Level}</div>
                      <div className="text-sm text-gray-400">Level:</div>
                    </div>
                    <div className="flex flex-col datos_col">
                      <div className="release">{data.Group}</div>
                      <div className="text-sm text-gray-400">Group:</div>
                    </div>
                   
                  </div>
                  <div className="flex flex-col overview">
                    <div className="flex flex-col"></div>
                    <div className="text-xs text-gray-400 mb-2">Overview:</div>
                    <p className="text-xs text-gray-100 mb-6">
                      {data.GameDescription}
                    </p>
                  </div>
                </div>
                <div
                  data-countdown="2021-09-15"
                  className="absolute inset-x-0 top-0 pt-5 w-full mx-auto text-2xl uppercase text-center drop-shadow-sm font-bold text-white"
                >
                
                </div>
              </div>
            </div>
            <img
              alt="1"
              className="absolute inset-0 transform w-full -translate-y-4"
              src={data.GameImage}
              style={{filter: "grayscale(0)"}}
            />
            <div className="poster__footer w-full flex flex-row relative pb-5 space-x-2 z-10">
              <a
                className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
                href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
                target="_blank"
                data-unsp-sanitized="clean"
                rel="noreferrer"
              >
              
                <div className="text-sm text-white">Play</div>
              </a>
            </div>
          </div>
          </>:<Skeleton height={400} width={250} />}
        </div>
      </div>
    )
}
