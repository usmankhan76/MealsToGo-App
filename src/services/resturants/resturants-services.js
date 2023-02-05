import camelize from "camelize";
import { mockImages, mocks } from "./mock"

export const resturantsRequest=(location="37.7749295,-122.4194155")=>{
    return new Promise((resolve, reject) => {
        const mock=mocks[location]
        console.log("this is mock",mock)
        if(!mock) reject("Not Found Then Location");
        resolve(mock)
    })
}
export const transformFucntion=({results=[]})=>{
    const updatedResults=results.map((resturant)=>{
        resturant.photos=resturant.photos.map(i=>{
            return mockImages[Math.ceil(Math.random() * (mockImages.length -1 ))];
        })
        return{
            ...resturant,
            isOpenNow:resturant.opening_hours && resturant.opening_hours.open_now ,
            isClosedTemporarly:resturant.business_status==="CLOSED_TEMPORARILY"
        }
    })
    return camelize(updatedResults)
}

// resturantsRequest()
// .then(transformFucntion)
// .then(res=>console.log('result of reques',res))
// .catch((err)=>console.log('error happen'))
