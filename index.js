const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const store = require('./store');
const app = express();

app.use(cors());
//app.use(express.static('public'));
app.use(bodyParser.json());


app.post('/getWordFrom', (req, res) => {
  var aHeaders = req.headers;
//  var aBody = req.body;
  //console.log("addLeaderreq:", req);
//  console.log("TEST headers:", aHeaders);//simple as it gets authorisarion  - expand with need
  var id = req.params.id;
  var aHeaders = req.headers;
  var aBody = req.body;
  //console.log("addLeaderreq:", req);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  console.log("getWordFrom:",req.body);
//  console.log("id:", id);
  if (aHeaders.monkey==="spL1shSplAshSploS4"){
      try{
        store
        .getWordFrom(aBody)
        .then((data) => {
        res.send(JSON.stringify(data));
        })
      }catch(err){
        console.error(err);
        res.end("there was an error getting your ten quotes!!!");
      };
    }else{
        res.end("get word UNAUTHORISED CONNECTION!!!");
    };
});
//.00. . .0 0.0. .*.00. . .0 0.0. .*.00. . .0 0.0. .*.00. . .0 0.0. .*.00. . .0 0.0. .*.00. . .0 0.0. .*
//m00m m m0 0m0m m^m00m m m0 0m0m m^m00m m m0 0m0m m^m00m m m0 0m0m m^m00m m m0 0m0m m
app.listen(7766, () => {
  console.log('Server running on http://localhost:7766')
});
