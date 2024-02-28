import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";
import Tag from "./Tag";

function Random() {
  // const [gif, setGif] = useState("");
  // const[loading,setLoading]=useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=67Z8Krmr2ItrN4tLuRgI27tvWBxSdVID`;
  //   const {data} = await axios.get(url);
  //   console.log(data);
  //   const imgsource= data.data.images.original.url;
  //   setGif(imgsource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  
  const {gif , loading ,fetchData} =useGif();

  function clickHandler() {
    console.log("Button clicked!")
    fetchData();
  }

  return (
    <div className=" relative bg-gray-900 flex h-[550px] items-center flex-col w-5/12 mt-[150px] gap-[25px] border border-yellow-50 rounded-xl text-yellow-50 justify-evenly mb-10">
      <h1 className="text-2xl  uppercase font-bold mt-4">
        {" "}
        Random Gif
      </h1>
      {

      loading ? (<Spinner/>) : (<img src={gif} key={gif} className="h-[280px] w-[400px] rounded-md" />)

      }
      <button
        onClick={clickHandler}
        className="w-10/12 bg-gray-700 rounded-lg py-2 px-2 cursor-pointer  hover:scale-90 opacity-8 transition-all duration-25 "
      >
      
        Generate 
      </button>
    </div>
  );
}

export default Random;
