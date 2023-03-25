import camelize from "camelize";

export const locationRequest=()=>{

    console.log("running")

  return fetch('http://127.0.0.1:5001/mealstogo-c743c/us-central1/gecoding?city=antwerp').then(response => response.json())
  .catch(err => console.error("errrrrrrrrr",err));
}

export const transformLocation=(result)=>{
    console.log("result that transform",result)
    const formatedResult=camelize(result)
    const {geometry={}}=formatedResult.results[0];
    const {lng,lat}=geometry.location
    const thisIsViewport=geometry.viewport
    return {lng,lat,thisIsViewport}
    

}