const functions = require("firebase-functions");
const {gecodingRequest} =require('./controllers/gecoding-controller')
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.gecoding = functions.https.onRequest((request,response)=>{
    gecodingRequest(request,response)
});
