'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Caards = () => {
  const [data, setData] = useState(null);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://3d-cartoon-face.p.rapidapi.com/run', {
          image: 'https://jixjiastorage.blob.core.windows.net/public/sensor-ai/3d_cartoon_face/1.jpg',
          render_mode: '3d',
          output_mode: 'url'
        }, {
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '0dbeb59004msh9e8e1127464f292p1a7c01jsn8e9b0b5289e1',
            'X-RapidAPI-Host': '3d-cartoon-face.p.rapidapi.com'
          }
        });

        console.log(response.data);
        setData(response.data); // Set the received data to state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to execute only once on component mount

  return (
    <div>
      {/* Your JSX code goes here */}
      {data ? (
        // Render the fetched data, replace this with your specific rendering logic
        <img src={data.url} alt="3D Cartoon Face" />
      ) : (
        // Show a loading message or indicator while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Caards;
