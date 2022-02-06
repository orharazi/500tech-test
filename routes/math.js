var express = require('express');
var router = express.Router();

//operators bank
const actions = {
  "ADD": (a,b) => {return a + b},
  "SUBTRACK": (a,b) => {return a - b},
  "MULTIPLY": (a,b) => {return a * b},
  "DIVIDE": (a,b) => {return a / b},
}

/* GET math. */
router.get('/:action', function(req, res, next) {
  // catch if the parameters are not OK 
  try {
    let action = req.params.action
    let {firstNumber, secondNumber} = req.query

    //check if the numbers are in query
    if (firstNumber, secondNumber) {
      firstNumber = parseInt(firstNumber)
      secondNumber = parseInt(secondNumber)

      //check if parameters are numbers
      if (!isNaN(firstNumber) && !isNaN(secondNumber)) {

        //calc from the bank with the right func
        let calcNum = Number(actions[action](firstNumber, secondNumber))
			let calc = Number(calcNum.toFix(2))

        //returning json with {calc: num}
        res.json({calc});
      } else {
        res.status(400).send("Invalide numbers!")
      }
     } else {
      res.status(400).send("Invalide parameters!, please use 'firstNumber' and 'secondNumber' paramters")
     }
  } catch {
    res.status(400).send("Invalide paramers, please follow README");
  }

});

module.exports = router;
