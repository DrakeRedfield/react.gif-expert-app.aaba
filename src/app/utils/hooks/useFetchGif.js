import { useEffect, useState } from "react";
import { getGifs } from "../services";

export const useFetchGif = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((response) => {
      setGifs(response);
      setIsLoading(false);
    });
  }, [])

  return {
    gifs,
    isLoading
  }
}
