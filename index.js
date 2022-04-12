const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const store = require('./store');
const app = express();

app.use(cors());
const router = express.Router();
app.use(bodyParser.json());


app.get('/test', function (req, res) {
//	console.log('getting::');
  res.send('getting it!')
});

app.post('/getWordFrom', function (req, res) {
  var aHeaders = req.headers;
  var aBody = req.body;
  const scheck = 'yourSecre4tHe4derKey' === aHeaders.apikey;
  if (scheck){//basic header check
      try{
        store
        .getWordFrom(aBody)
        .then((data) => {
        res.send(JSON.stringify(data));
        })
      }catch(err){
        console.error(err);
        res.end("there was an error getting your word!!!");
      };
    }else{
        res.end("get word UNAUTHORISED CONNECTION!!!");
    };
});
//.00. . .0 0.0. .*.00. . .0 0.0. .*.00. . .0 0.0. .*.00. . .0 0.0. .*.00. . .0 0.0. .*.00. . .0 0.0. .*
//m00m m m0 0m0m m^m00m m m0 0m0m m^m00m m m0 0m0m m^m00m m m0 0m0m m^m00m m m0 0m0m m
app.listen(7777, () => {
  console.log('Server running on http://localhost:7777');
});

