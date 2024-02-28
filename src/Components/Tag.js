import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";


function Tag() {
//   const [gif, setGif] = useState("");
//   const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");

//   async function fetchData() {
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=67Z8Krmr2ItrN4tLuRgI27tvWBxSdVID&tag=${tag}`;
//     const { data } = await axios.get(url);
//     console.log(data);
//     const imgsource = data.data.images.original.url;
//     setGif(imgsource);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

  const{gif , loading , fetchData} =useGif(tag);

  function clickHandler() {
    console.log("Button clicked!");
    fetchData();
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="relative bg-gray-900 flex h-[550px] items-center flex-col w-5/12 mt-[150px] gap-[25px] border border-yellow-50 rounded-xl text-yellow-50 justify-evenly">
      <h1 className="text-2xl  uppercase font-bold mt-4"> {tag} Gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} key={gif} className="h-[280px] w-[400px] rounded-md" />
      )}
      <input
        onChange={changeHandler}
        className=" flex text-center w-10/12 bg-gray-100 rounded-lg py-2 px-2 cursor-pointer  hover:scale-90 opacity-8 transition-all duration-25  text-black "
        value={tag}
      ></input>
      <button
        onClick={clickHandler}
        className="w-10/12 bg-gray-700 rounded-lg py-2 px-2 cursor-pointer  hover:scale-90 opacity-8 transition-all duration-25 "
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
