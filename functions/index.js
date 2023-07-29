// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.post("/on_search", (req, res) => {
  console.log({
    req: req, // Access the request body
    res: "success", // Sending 'success' as the response
  });
  res.send("success");
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
