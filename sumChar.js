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


    //console.log(sumChars(CarModelYear[5].model, CarModelYear[5].year))
    // Overly complicated way to chuck it into an Array, console log and then send back into JSON
    //const suggestedValue = sumChars(CarModelYear[5].model, CarModelYear[5].year)
    //const suggestedValueArr = []
    //suggestedValueArr.push(suggestedValue)
    //console.log(suggestedValueArr)
    //res.send(suggestedValueArr).json()
  