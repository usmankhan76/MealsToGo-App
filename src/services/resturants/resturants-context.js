import { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/location-context";
import { resturantsRequest, transformFucntion } from "./resturants-services";

export const ResturantContext=createContext();
export const ResturantProvider=({children})=>{
    const [resturants,setResturants]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    const {location}=useContext(LocationContext);
    const retriveResturants=(loc)=>{
        setIsLoading(true);
        setResturants([])// because it will format the array before we have and assign the new array 
        // we can also use the setTimeout to wrap the below request 

        resturantsRequest(loc)
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
        if(location){
            const locationToString=`${location.lat},${location.lng}` // we doin this because the location is in object format and we have need it in string format
            retriveResturants(locationToString)
        }
    },[location])
    return(
        <ResturantContext.Provider value={{resturants,isLoading,error}}>
            {children}
        </ResturantContext.Provider>
    )

}

