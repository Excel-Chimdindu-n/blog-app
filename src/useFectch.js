import { useState, useEffect } from "react";

const useFetch = (url) => {
     // blog arraylist
     const [data, setData] =  useState(null);// blogs
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);

    // this useEffct hook is used to fetch the data from the json pseudo-database that is located in the site given
    useEffect(() => {
        // new var as an instance of AbortController Class
        const abortCont = new AbortController();

        // the setTimeout function is here to simulate the effect of loading as normally seen i a real website
        setTimeout(()=> {
            // the fetch function is used to get info from a given location as a resource
            fetch(url, {signal: abortCont.signal})
                // the then function acts as an async process
                // turns the resourse to a json format and returns it
                .then( res => {
                    // checks the status of the resource
                    if (!res.ok) {
                        // throw and error() funct allows u to set the error message 
                        throw Error(" Couldn't connent to server !!");
                        // throw Error("Check ur server link");
                    }
                    return res.json()
                })
                // calls the  data and sets the blog to it and adjusts the other aspects allowed
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                // adding the catch method allows u comfirm if u gave an error message and to show the error messages if the error occurs
                .catch((err)=>{
                    // corrects the error message and adjusts all the other aspects
                    // regognizes the error concerning the running of the usefetch hook
                   if (err.name === "AbortError") {
                    console.log("calm down");
                   } else {
                    setError(err.message);
                    setIsLoading(false);
                   }
                })
        }, 1500);
        
        return ()=>{ abortCont.abort() }
     }, [url]);
     return {data, isLoading, error};

    }

export default useFetch;