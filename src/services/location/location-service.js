import camelize from "camelize";
import { locations } from "./location-mock"

export const locationRequest=(searchLocation)=>{
    return new Promise((resolve, reject) => {
        const findLocation=locations[searchLocation];
        if(!findLocation) {
            reject("Not Found")
        }
            resolve(findLocation)
        
    })
}
export const transformLocation=(result)=>{
    const formatedResult=camelize(result)
    const {geometry={}}=formatedResult.results[0];
    const {lng,lat}=geometry.location
    return {lng,lat}
    

}