const express = require('express');
const env = require('dotenv');
env.config();
const server = express();
server.use(express.json())

const PORT = process.env.PORT || 3002
server.listen(PORT, () => {
    console.log('Port 3000 green lighting')
});

server.get('/', (req, res) => {
    res.send('Greenlighting')
})
//Sends Car array in JSON
server.get('/Cars', (req, res) => {
    res.send(CarModelYear).json()
})

server.post('/Cars/Add', (req, res) => {
    const model = req.body.model
    const year = req.body.year
    CarModelYear.push(model, year).json()
    res.send('Model and Year added')
}) 

server.get('/Cars/Calculate', (req, res) => {
  
// Calculation function
const sumChars = (carModel, carYear) => {
  let myNumber = carModel.replace("", "");
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
    module.exports = sumChars;
  console.log(sumChars(CarModelYear[5].model, CarModelYear[5].year))
  // Overly complicated way to chuck it into an Array, console log and then send back into JSON
  const suggestedValue = sumChars(CarModelYear[5].model, CarModelYear[5].year)
  const suggestedValueArr = []
  suggestedValueArr.push(suggestedValue)
  console.log(suggestedValueArr)
  res.send(suggestedValueArr).json()
}) 


const CarModelYear = [  
    { model: "Civic", year: 2014 }, //Value = 6614
    { model: "Spyder", year: 2002 }, //Value = 10702
    { model: "Optima", year: 2012 }, //Value = 9412
    { model: "911", year: 2020 }, //Value = 420
    { model: "Task-Force", year: -987 }, //Value = ERROR, undefined
    { model: "C200", year: 'twenty twenty' } //Value = ERROR, undefined
  ];


  server.delete('/Cars/Delete', (req, res) => {
    const model = req.body.model
        const year = req.body.year
        CarModelYear.pop(model, year)
        res.send('Model and Year deleted')
    }) 


