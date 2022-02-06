import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  //some states
  const [selectedOperator, setSelectedOperator] = useState(null)
  const [firstNumber, setFirstNumber] = useState()
  const [secondNumber, setSecondNumber] = useState()
  const [calcFromApi, setCalcFromApi] = useState(" Enter parameters!")

  //API call that changes calc
  useEffect(() => {
    if (!isNaN(firstNumber) && !isNaN(secondNumber) && selectedOperator) {
      const getToAPI = async () => {
        let neCalc = await fetch(`/api/math/${operators[selectedOperator]}?firstNumber=${firstNumber}&secondNumber=${secondNumber}`, {
          method: 'GET'
        })
        let calc = (await neCalc.json()).calc
        setCalcFromApi(calc)
      }
      getToAPI()
    }
  }, [firstNumber, secondNumber, selectedOperator])
  
  // oparators bank
  const operators = {"+": "ADD", "-":"SUBTRACK","*":"MULTIPLY", '/': "DIVIDE"}
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello! please enter 2 numbers and select mathematical operator:</p>
        <div className="math">
        <input type="number" className='numberInput' onChange={e => setFirstNumber(e.target.value)} />
        {/* run on every operator */}
        {Object.keys(operators).map(operator => {
          return (
            <button type="radio" className={selectedOperator === operator ? "radioButton activeButton" : "radioButton" } id={operator} onClick={(e) => setSelectedOperator(e.target.id)}>{operator}</button>
          )
        })}
        <input type="number" className='numberInput' onChange={e => setSecondNumber(e.target.value)} />
         = {calcFromApi !== null ? calcFromApi : "Please enter a valid parameters, DONT DIVIDE BY ZIRO"}
        </div>
      </header>
    </div>
  );
}

export default App;
