import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

 const url = `https://api.giphy.com/v1/gifs/random?api_key=67Z8Krmr2ItrN4tLuRgI27tvWBxSdVID`;


function useGif (tag)
{
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
  
  
    async function fetchData() {
      setLoading(true);
      
      const { data } = await axios.get(tag ? (`${url}`+`&tag=${tag})`) : (url));
      console.log(data);
      const imgsource = data.data.images.original.url;
      setGif(imgsource);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
   
  
  
  
   return {gif, loading , fetchData};

}

export default useGif;