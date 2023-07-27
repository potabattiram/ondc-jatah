const express = require('express');
const app = express();
const port = 3000; 
const cors = require('cors');

app.use(cors({
  origin: "*"
}))
app.post('/on_search', (req, res) => {
    console.log(res);
    res.send('success');
});

app.listen(port || process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
