"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Cards = () => {
  const [data, setData] = useState();
  const [genresData, setGenresData] = useState("");
  // console.log(data);
  let filterdData = data?.filter((val) =>
    genresData ? val.genres[0] == genresData : data
  );

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
      // console.log("result", response);
    } catch (error) {
      // console.error(error);
    }
  };
  useEffect(() => {
    options();
  }, []);

  return (
    <div className=" max-w-6xl mx-auto p-5 ">
      <div className="flex gap-5 text-black  text-3xl font-bold p-4" >
   {genresData &&

    <button onClick={() => setGenresData("")}>All Categories</button>
   }  
      </div>
      <ul className="flex gap-5 text-white bg-amber-200 text-xl font-bold p-3">

        <button onClick={() => setGenresData("Drama")}>Drama</button>
        <button onClick={() => setGenresData("Crime")}>Crime</button>
        <button onClick={() => setGenresData("Animation")}>Animation</button>
        <button onClick={() => setGenresData("Comedy")}>Comedy</button>
        <button onClick={() => setGenresData("Sci-Fi & Fantasy")}> Sci-Fi & Fantasy</button>
      </ul>

      <div className="grid grid-cols-5 gap-3 p-5">
        {filterdData != undefined &&
          filterdData.length > 0 &&
          filterdData.map((item, index) => {
            const {
              backdrop_path,
              original_title,
              overview,
              first_aired,
              genres,
            } = item;

            return (
              <div key={index}>
                <div className="bg-white text-black rounded-xl shadow-2xl">
                  <div class="max-w-md rounded overflow-hidden ">

                    <img
                      class="w-52 p-2 hover:p-1 "
                      src={backdrop_path}
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4 items-center">
                      <div class="font-bold text-lg mb-2 ">
                        {original_title}
                        <p className="font-light text-sm"> {first_aired}</p>
                      </div>
                      {/* <p class="text-gray-700 text-base"> {overview} </p> */}
                      <p class="text-gray-700 text-base"> {genres} </p>
                    </div>
                  </div>
                </div>
            </div>
            );
          })}

      </div>
    </div>
  );
};

export default Cards;

 {/* {_id}
            {item.first_aired}
            <div>
            <img src={item.backdrop_path} alt="" />
            </div> 
            {item.original_title}
          {item.overview} */}
                  {/* <p>{data[0]._id}</p> */}

