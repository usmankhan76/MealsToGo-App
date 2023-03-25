const functions = require("firebase-functions");
const {locations}=require('./location-mock')
const url=require("url")

module.exports.gecodingRequest=(request,response)=>{
    // console.log("this is request",request)
    const {city}=url.parse(request.url,true).query
    console.log("this is city",city)
    const findedCity=locations[city.toLowerCase()]
    console.log("this is findedCity",findedCity)
    // functions.logger.info("Hello logs!", {structuredData: true});
    response.json(findedCity);
}