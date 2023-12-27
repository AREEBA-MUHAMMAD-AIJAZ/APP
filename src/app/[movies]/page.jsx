"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
const page = () => {
    const [data, setData] = useState();
    const params = useParams();
    console.log(params);

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
    const filter = data?.filter((item) => {
        return item._id == params.movies;
    });
    console.log(filter);
    useEffect(() => {
        options();
    }, []);



    return (
      <div className="">
        {/* <h1>{params.movies}</h1> */}

        {filter && (
          <div className="text-center max-w-7xl mx-auto ">
            <h1 className="text-8xl font-bold p-5 z-10 text-gray-600  ">{filter[0].title}</h1>
            <img src= {filter[0].backdrop_path} width={1000} className="mx-28" />
            <h1 className="text-5xl font-semibold  p-3">{filter[0].contentType}  </h1>
            <p className="text-3xl font-semibold leading-normal p-3"> {filter[0].overview} {filter[0].first_aired}</p>

         <div className="flex justify-center gap-10 items-center">
            <div className=""> <img src={filter[0].poster_path} width={200} /> </div>
            <div className="text-3xl font-bold ">{filter[0].original_title}</div>
         </div>
         </div>
        )}
      </div>
    );
};

export default page;
