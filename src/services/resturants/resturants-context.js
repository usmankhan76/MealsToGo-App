import { createContext, useEffect, useState } from "react";
import { resturantsRequest, transformFucntion } from "./resturants-services";

export const ResturantContext=createContext();
export const ResturantProvider=({children})=>{
    const [resturants,setResturants]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const retriveResturants=()=>{
        setIsLoading(true);
        // we can also use the setTimeout to wrap the below request 
        resturantsRequest()
        .then(transformFucntion)
        .then((fetchedResturants)=>{
            setIsLoading(false)
            setResturants(fetchedResturants)
        })
        .catch(err=>{
            setIsLoading(false)
            setError(err)
        })
    }
    useEffect(()=>{
            retriveResturants()
    },[])
    return(
        <ResturantContext.Provider value={{resturants,isLoading,error}}>
            {children}
        </ResturantContext.Provider>
    )

}

