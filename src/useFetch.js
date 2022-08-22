import { useEffect, useState } from "react"

const useFetch = url => {
  // States
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);
  // useEffect
  useEffect(() => {
    // Abort Controller
    const abortCont = new AbortController();
    // fetch data
    fetch(url, {signal: abortCont.signal})
      .then(res =>{
        if(!res.ok){
          throw Error("Could not fetch the data for that resource.")
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setPending(false);
        setError(null);
        console.log("Data is received.");
      })
      .catch(error => {
        if(error.name === "AbortError"){
          console.log("Fetch Aborted.");
        }else{
          setPending(false);
          setError(error.message);
          console.log("Error: Couldn't fetch data... ", error.message);
        }
      });
    // useEffect Returned value
    return () => abortCont.abort();
  },[url]);
  // useEffect End

  // useFetch Returned values
  return {data, isPending, error};
}

export default useFetch;