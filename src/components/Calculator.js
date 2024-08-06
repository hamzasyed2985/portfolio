import logo from '../logo.svg';
import React from 'react';
import { useState } from "react";

const styles = {
  mainCalculator: "py-6",
  calculatorHeader: "flex flex-col justify-center items-center",
  logo: "h-[100px]",
  form: "py-8 flex flex-col items-center",
  resultContainer: "flex flex-row justify-center flex-wrap m-1",
  result: "bg-black dark:bg-gray-700 text-white px-5 py-4 border border-white rounded m-1",
  input: "text-xl p-2.5 rounded mb-5 w-[35.5%] dark:bg-gray-700 dark:text-white",
  buttonContainer: "flex flex-row justify-center flex-wrap m-1",
  button: "text-xl p-2.5 rounded m-1 border border-gray-300 bg-gray-100 dark:bg-gray-600 dark:text-white",
  specialButton: "bg-black text-black dark:bg-gray-800",
};

function Calculator() {
  const inputRef = useState(null);
  const resultRef = useState(null);
  const [result, setResult] = useState(0);
  const [inputText, setText] = useState('');


  function handleChange(e) {
    setText(e.target.value);
  }

  function plus(event) {
    event.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = null;
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(() => 0);
  };


  return (
    <div className={styles.mainCalculator}>
      <div className={styles.calculatorHeader}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className="text-2xl font-bold dark:text-white">Simplest Working Calculator</h1>
      </div>
      <form className={styles.form}>
        <div className={styles.resultContainer}>
          <p className={styles.result}>Result = {result}</p>
          <p className={styles.result}>You typed: {inputText}</p>
        </div>
        <input
          onChange={handleChange}
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          className={styles.input}
        />
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={plus}>Add</button>
          <button className={styles.button} onClick={minus}>Minus</button>
          <button className={styles.button} onClick={times}>Times</button>
          <button className={styles.button} onClick={divide}>Divide</button>
          <button className={`${styles.button} ${styles.specialButton}`} onClick={resetInput}>Reset Input</button>
          <button className={`${styles.button} ${styles.specialButton}`} onClick={resetResult}>Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;

