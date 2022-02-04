var express = require('express');
var router = express.Router();
const actions = {
  "ADD": (a,b) => {return a + b},
  "SUBTRACK": (a,b) => {return a - b},
  "MULTIPLY": (a,b) => {return a * b},
  "DIVIDE": (a,b) => {return a / b},
}
/* GET math. */
router.get('/:action', function(req, res, next) {``
  try {
    let action = req.params.action
    let {firstNumber, secondNumber} = req.query
    if (firstNumber, secondNumber) {
      firstNumber = parseInt(firstNumber)
      secondNumber = parseInt(secondNumber)
      if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        console.log({firstNumber, secondNumber})
        console.log(actions[action](firstNumber, secondNumber))
        let calc = actions[action](firstNumber, secondNumber)
        res.json({calc});
      } else {
        res.status(400).send("not valide numbers!")
      }
     } else {
      res.status(400).send("not valide parameters!, please use 'firstNumber' and 'secondNumber' paramters")
     }
  } catch {
    res.status(400).send("not valide paramers, please follow README");
  }

});

module.exports = router;
