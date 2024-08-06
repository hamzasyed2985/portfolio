import React, { useState } from 'react';


const styles = {
  calculator: "bg-[#17181a] p-6 md:p-8 rounded-2xl shadow-[30px_44px_100px_rgba(0,0,0,1)]",
  display: "bg-[#3e4656] w-full md:w-[300px] rounded-lg p-3 mb-5 flex flex-col items-end",
  expression: "text-lg md:text-xl text-[#1991ff] h-10",
  result: "text-2xl md:text-3xl text-white h-12",
  buttons: "grid grid-cols-4 gap-3 md:gap-4",
  button: "bg-[#303136] transition rounded py-4 md:py-5 px-2 md:px-3 text-xl md:text-2xl text-[#1991ff] cursor-pointer shadow-[0_2px_#4e4c4c] hover:bg-gray-600",
  clearDelete: "bg-[#878888] transition rounded py-4 md:py-5 px-2 md:px-3 text-xl md:text-2xl cursor-pointer text-white hover:bg-[#a9a9a9] shadow-[0_2px_#4e4c4c] ",
  ansSquare: "bg-[#606161] transition rounded py-4 md:py-5 px-2 md:px-3 text-xl md:text-2xl cursor-pointer text-white hover:bg-[#a9a9a9] shadow-[0_2px_#4e4c4c]",
  operator: "bg-[#005db2] transition rounded py-4 md:py-5 px-2 md:px-3 text-xl md:text-2xl cursor-pointer text-white shadow-[0_2px_#4d7fad] hover:bg-[#1991ff]",
  enter: "bg-[#1991ff] rounded transition py-4 md:py-5 px-2 md:px-3 text-xl row-span-2 md:text-2xl cursor-pointer text-white shadow-[0_2px_#4d7fad] hover:bg-[#1991ff]"
};

const Calculator = () => {
  const [result, setResult] = useState(" ");
  const [expression, setExpression] = useState(" ");
  const [lastAnswer, setLastAnswer] = useState(null);
  const [evaluated, setEvaluated] = useState(false);

  const handleChange = (value) => {
    if (evaluated) {
      setResult(value);
      setEvaluated(false);
    } else {
      setResult(result + value);
    }
  };

  const handleClear = () => {
    setExpression(" ");
    setResult(" ");
    setLastAnswer(null);
    setEvaluated(false);
  };

  const handleDelete = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const handleAns = () => {
    if (lastAnswer !== null) {
      setResult(result + lastAnswer.toString());
    }
  };

  const evaluate = () => {
    try {
      const sanitizedExpression = result.replace(/(^|[^\d.])0+(\d)/g, '$1$2');
      const evalResult = eval(sanitizedExpression);
      setExpression(result);
      setResult(`${evalResult}`);
      setLastAnswer(evalResult);
      setEvaluated(true); // Set evaluated to true
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <span className={styles.expression}>{expression}</span>
        <span className={styles.result}>{result}</span>
      </div>
      <div className={styles.buttons}>
        <button className={styles.clearDelete} onClick={() => handleChange('(')}>(</button>
        <button className={styles.clearDelete} onClick={() => handleChange(')')}>)</button>
        <button className={styles.ansSquare} onClick={handleAns}>Ans</button>
        <button className={styles.ansSquare} onClick={handleDelete}>DEL</button>
        <button className={styles.operator} onClick={() => handleChange('%')}>%</button>
        <button className={styles.operator} onClick={() => handleChange('√')}>√</button>
        <button className={styles.operator} onClick={() => handleChange('*')}>x</button>
        <button className={styles.operator} onClick={() => handleChange('/')}>÷</button>
        <button className={styles.button} onClick={() => handleChange('7')}>7</button>
        <button className={styles.button} onClick={() => handleChange('8')}>8</button>
        <button className={styles.button} onClick={() => handleChange('9')}>9</button>
        <button className={styles.operator} onClick={() => handleChange('-')}>-</button>
        <button className={styles.button} onClick={() => handleChange('4')}>4</button>
        <button className={styles.button} onClick={() => handleChange('5')}>5</button>
        <button className={styles.button} onClick={() => handleChange('6')}>6</button>
        <button className={styles.operator} onClick={() => handleChange('+')}>+</button>
        <button className={styles.button} onClick={() => handleChange('1')}>1</button>
        <button className={styles.button} onClick={() => handleChange('2')}>2</button>
        <button className={styles.button} onClick={() => handleChange('3')}>3</button>
        <button className={styles.enter} onClick={evaluate}>=</button>
        <button className={styles.button} onClick={() => handleChange('0')}>0</button>
        <button className={styles.button} onClick={() => handleChange('.')}>.</button>
        <button className={styles.button} onClick={handleClear}>AC</button>
      </div>
    </div>
  );
};

export default Calculator;
