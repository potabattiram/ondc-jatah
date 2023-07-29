const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json()); // Parse incoming JSON data
app.use(cors({
  origin: "*"
}))

app.post('/on_search', (req, res) => {
  console.log({
    req: req.body,
    res: 'success'
  });
  res.send('success');
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
