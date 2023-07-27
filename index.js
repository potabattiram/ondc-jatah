const express = require('express');
const app = express();
const port = 3000; 
const cors = require('cors');

app.use(cors({
  origin: "*"
}))
app.get('/', (req,res) => {
  res.send('ONDC-JATAH BE is Working Fine!')
})

app.post('/on_search', (req, res) => {
    console.log({
      req: res,
      res: res
    });
    res.send('success');
});

app.listen(port || process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
