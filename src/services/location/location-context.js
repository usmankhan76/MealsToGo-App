import React,{ createContext, useEffect, useState } from "react";
import { locationRequest, transformLocation } from "./location-service";

export const LocationContext=createContext();

export const LocationProvider=({children})=>{
    const [keyword,setKeyword]=useState('Antwerp')
    const [isLoadinglocation,setIsLoading]=useState(false);
    const [locationError,setError]=useState(null);
    const [location,setLocation]=useState(null);

    const  onSearch=(searchKeyword)=>{
        setIsLoading(true);
        setKeyword(searchKeyword);
       
    }
    
    useEffect(() => {
         if(!keyword.length){
            // if there is no keyword so we don't have need to search for empty
            return;
        }
        locationRequest(keyword.toLowerCase())
        .then(transformLocation)
        .then(result=>{
            setIsLoading(false);
            setLocation(result);
            // console.log("city and location:- ",keyword,result)
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err.message)
            console.log("location request error",err.message)
        });
    
    }, [keyword])
    

    

    return(
        <LocationContext.Provider value={{isLoadinglocation,locationError,location,onSearch,keyword}}>
            {children}
        </LocationContext.Provider>
        )
}