import React, { useState,useEffect } from 'react';

const styles = {
  container: 'flex flex-col gap-5 align-center justify-center items-center bg-[#efefef] min-h-screen p-4',
  title: 'text-black text-center text-3xl font-bold mb-2',
  grid: 'grid grid-cols-3 gap-4 max-w-xs mx-auto',
  button: 'bg-white text-4xl font-bold py-2 px-4 h-16 w-16 shadow-lg shadow-[#a1a1a1] border-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105',
  winner: 'text-black text-3xl font-semibold mt-4 animate-bounce',
  resetButton: 'mt-4 bg-blue-500 text-white text-lg py-2 px-4 font-semibold rounded hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105',
  winBar: 'flex flex-col sm:flex-row gap-5 sm:gap-20 bg-white text-black text-xl font-semibold py-2 px-4 mt-4 rounded shadow-lg flex justify-between items-center',
  resetWinButton: 'ml-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105',
};

const Tic= ()=> {

  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [text, setText] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const [blueWins, setBlueWins] = useState(0);
  const [redWins, setRedWins] = useState(0);

  const handleButtonClick = (buttonNumber) => {
    if (text[buttonNumber] || winner) return;

    const updatedItems = [...text];
    updatedItems[buttonNumber] = turn;
    setText(updatedItems);

    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const checkWinner = () => {
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (text[a] && text[a] === text[b] && text[a] === text[c]) {
        setWinner(text[a]);
        if (text[a] === 'X') {
          setBlueWins(blueWins + 1);
        } else {
          setRedWins(redWins + 1);
        }
        return;
      }
    }
  };

  const handleReset = () => {
    setText(Array(9).fill(''));
    setTurn('X');
    setWinner(null);
  };

  const handleResetWins = () => {
    setBlueWins(0);
    setRedWins(0);
  };

  useEffect(() => {
    checkWinner();
  }, [text]);

  return (
    <div className={styles.container}>
      <h1 className="text-4xl text-center font-bold mb-4">Welcome to TIC TAC TOE</h1>
      <div className={styles.winBar}>
        <span className='text-[#0b6af8] text-2xl font-bold'>X - {blueWins}</span>
        <span className='text-[#fc4427] text-2xl font-bold'>O- {redWins}</span>
        <button className={styles.resetWinButton} onClick={handleResetWins}>Reset Wins</button>
      </div>
      <h2 className={styles.title}>Turn = {turn}</h2>
      <div className={styles.grid}>
        {text.map((value, index) => (
          <button
            key={index}
            className={`${styles.button} ${value === 'X' ? 'text-[#0b6af8]' : value === 'O' ? 'text-[#fc4427]' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      {winner && <div className={styles.winner}>Player {winner} WON!</div>}
      
      <button className={styles.resetButton} onClick={handleReset}>Reset Board</button>
    </div>
  );
}

export default Tic;
