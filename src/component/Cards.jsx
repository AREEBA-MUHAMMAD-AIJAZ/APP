"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Cards = () => {
  const [data, setData] = useState();
  // console.log(data);

  const options = async () => {
    try {
      const url = "https://movies-api14.p.rapidapi.com/shows";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0dbeb59004msh9e8e1127464f292p1a7c01jsn8e9b0b5289e1",
          "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        },
      };
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.movies);
      // console.log("result",response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    options();
  }, []);

  return (
    <div className="bg-gray-900 max-w-6xl mx-auto">
      <div className="grid grid-cols-5 gap-3 p-5">
        {data &&
          data.map((item, index) => {
            const {backdrop_path,original_title,overview,first_aired}=item
            return (
              <div key={index}>
                <div className="">
                  <div class="max-w-md rounded overflow-hidden ">
                    <img
                      class="w-52 p-2 hover:p-1"
                      src={backdrop_path}
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4 items-center">
                      <div class="font-bold text-lg mb-2 text-white">
                        {original_title}
                       <p className="font-light text-sm"> {first_aired}</p> 
                      </div>

                      {/* <p class="text-gray-700 text-base"> {overview} </p> */}
                    </div>
                    {/* <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #photography
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #travel
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #winter
                      </span>
                    </div> */}
                  </div>
                  {/* {_id}
            {item.first_aired}
            <div>
              <img src={item.backdrop_path} alt="" />
            </div> 
            {item.original_title}
            {item.overview} */}
                </div>
              </div>
            );
          })}

        {/* <p>{data[0]._id}</p> */}
      </div>
    </div>
  );
};

export default Cards;
