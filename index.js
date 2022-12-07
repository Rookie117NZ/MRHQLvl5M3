const express = require('express');
const env = require('dotenv');
env.config();
const server = express();
server.use(express.json())

const PORT = process.env.PORT || 3002
server.listen(PORT, () => {
    console.log('Port 3002 green lighting')
});

server.get('/', (req, res) => {
    res.send('Greenlighting')
})

server.get('/Cars', (req, res) => {
    res.send(CarModelYear)
})

//server.post('/Cars/Add', (req, res) => {
//    const model = req.body.model
//    const year = req.body.year
//    CarModelYear.push(model, year)
//    res.send('Model and Year added')
//}) 
//
//server.delete('/Cars/D', (req, res) => {
//    const model = req.body.model
//    const year = req.body.year
//    CarModelYear.push(model, year)
//    res.send('Model and Year deleted')
//}) 
//
const CarModelYear = [  
    { model: "Civic", year: 2014 },
    { model: "Spyder", year: 2002 },
    { model: "Optima", year: 2012 }
];

const sumChars = (newValues, carYear) => {
let myNumber = newValues.replace("", "");
let i,
      n = myNumber.length,
      acc = 0;
    for (i = 0; i < n; i++) {
      acc += parseInt(myNumber[i], 36) - 9;
    }
    let totalSum = acc * 100 + parseInt(carYear);
    if (totalSum > 0) {
      return totalSum;
    } else {
      return console.log("ERROR");
    }
  };
  console.log(sumChars(CarModelYear[0].model, CarModelYear[0].year));

