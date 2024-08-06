import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const styles = {
  container: "mx-4 flex flex-col items-center gap-5 font-sans",
  clock: "mb-24 bg-zinc-900 p-4 text-center rounded-lg",
  date: "text-sm font-bold text-[#ffd868]",
  time: "bg-[#ffd868] shadow-2xl shadow-amber-200 text-gray-800 text-3xl md:text-4xl border-3 border-[#ffd868] rounded-md p-2",
  counterTimerButtons: "flex gap-2 items-end",
  button: "outline outline-1 outline-[#ffd868] bg-transparent text-[#ffd868] px-4 py-2 transition rounded hover:bg-[#ffd868] hover:text-gray-800",
  timeLeft: "text-[#ffd868] text-xl font-bold",
  speedDetails: "flex gap-5 text-xl font-bold text-[#ffd868]",
  textAndField: "flex flex-col items-center gap-5 w-full",
  referenceText: "bg-yellow-50 border-2 border-[#ffd868] rounded-md w-full md:w-11/12 lg:w-5/6 xl:w-3/4 p-4 flex flex-wrap justify-around gap-1",
  inputField: "bg-yellow-50 border-2 border-[#ffd868] rounded-md w-full md:w-11/12 lg:w-5/6 xl:w-3/4 p-2 text-2xl outline-none",
  resetButton: "outline outline-[#ffd868] outline-1 text-[#ffd868] transition px-6 py-3 rounded text-lg hover:bg-[#ffd868] hover:text-gray-800",
};
const TypingTest = () => {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");
  const [correctWordsCount, setCorrectWordsCount] = useState(0);
  const [wrongWordsCount, setWrongWordsCount] = useState(0);
  const [totalCorrectWords, setTotalCorrectWords] = useState(0);
  const [totalWrongWords, setTotalWrongWords] = useState(0);
  const referenceText = "about above add after an away back be because but by call came cut day did don't down each earth face four from get girl grow had hand hear help idea if in Indian into is later learn leave left let letter look made mother mountain move not now number of off once one only over own page paper part people picture place plant play point put question quick quickly quite read really right river run said see seem sentence set she so some something spell start state still talk tell than that the their them think this those thought three took tree try turn two want was watch went were what when who why will with write year you young your";
  const referenceWords = referenceText.split(" ");
  const [shuffledWords, setShuffledWords] = useState(shuffleArray(referenceWords));
  const inputRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [typedWords, setTypedWords] = useState([]);
  const [counterTimer, setCounterTimer] = useState(60);
  const [counter, setCounter] = useState(counterTimer);
  const [startingLineIndex, setStartingLineIndex] = useState(0);
  const [endingLineIndex, setEndingLineIndex] = useState(26);
  const [line, setLine] = useState(shuffledWords.slice(startingLineIndex, endingLineIndex));

  useEffect(() => {//Date Display 
    const dateInterval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(dateInterval);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString(undefined, { hour12: false });
  };


  useEffect(() => {//for setting counter decrementing value
    if (counter > 0 && hasStarted) {
      const counterInterval = setInterval(() => {
        setCounter(prevCounter => prevCounter - 1);
      }, 1000);

      return () => clearInterval(counterInterval);
    }
  }, [counter, hasStarted]);

  const handleChange = (event) => {//for handling change in input field and add input text to typedWords array
    if (!hasStarted) {
      setHasStarted(true);
    }
    const newText = event.target.value;
    setText(newText);
    if (newText.endsWith(" ")) {
      setTypedWords([...typedWords, newText.trim()]);
      setText("");
    }
  };

  useEffect(() => {//for calculating correct and wrong count
    const textWords = typedWords;
    let correctCount = 0;
    let wrongCount = 0;
    textWords.forEach((word, index) => {
      if (word === line[index]) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });
    console.log(correctCount);
    setCorrectWordsCount(correctCount);
    setWrongWordsCount(wrongCount);
  }, [typedWords, line]);

  useEffect(() => {

    if (typedWords.length === 0) {//When new line starts Then previous correct or wrong words are summed.
      setTotalCorrectWords(totalCorrectWords + correctWordsCount);
      setTotalWrongWords(totalWrongWords + wrongWordsCount);
      setCorrectWordsCount(0);
      setWrongWordsCount(0);
    }

    if (typedWords.length === line.length) {//For moving to new line or displaying new line
      const newStart = startingLineIndex + 26;
      const newEnding = endingLineIndex + 26;

      setStartingLineIndex(newStart);
      setEndingLineIndex(newEnding);
      setLine(shuffledWords.slice(newStart, newEnding));
      setTypedWords([]);

    }
  }, [typedWords.length, line.length, shuffledWords, startingLineIndex, endingLineIndex, correctWordsCount, wrongWordsCount, totalCorrectWords, totalWrongWords]);

  const resetCounter = (timer) => {
    const newShuffledWords = shuffleArray([...referenceWords]);
    setCounterTimer(timer);
    setCounter(timer);
    setText("");
    setShuffledWords(newShuffledWords);
    setHasStarted(false);
    setTotalCorrectWords(0);
    setTotalWrongWords(0);
    setCorrectWordsCount(0);
    setWrongWordsCount(0);
    setTypedWords([]);
    setStartingLineIndex(0);
    setEndingLineIndex(26);
    setLine(newShuffledWords.slice(0, 26));
    if (inputRef.current) { inputRef.current.focus(); }
  };

  const calculateWPM = () => {
    const minutes = (counterTimer - counter) / 60;
    return minutes > 0 ? Math.round(totalCorrectWords + correctWordsCount / minutes) : 0;
  };
  const accuracy = () => {
    return Math.round((totalCorrectWords + correctWordsCount) / (totalCorrectWords + correctWordsCount + totalWrongWords + wrongWordsCount) * 100)
  }
  const handleHighlightText = () => {
    return line.map((word, index) => {
      let className = 'text-2xl p-1 rounded font-semibold';
      const typedWord = typedWords[index];

      if (index === typedWords.length) {
        className += ' bg-[#d1af4a] bg-rounded';
      } else if (typedWord === undefined) {
        className += ' text-black ';
      } else if (typedWord === word) {
        className += ' text-[#008000]';
      } else {
        className += ' text-[#ff0000]';
      }

      return <span key={index} className={className}>{word} </span>;
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <p className={styles.date}>{formatDate(date)}</p>
        <p className={styles.time}>{formatTime(date)}</p>
      </div>
      {!hasStarted && (
        <div className={styles.counterTimerButtons}>
          <span className="text-[#ffd868] text-lg">Test duration:</span>
          <button onClick={() => resetCounter(15)} className={styles.button}>15</button>
          <button onClick={() => resetCounter(30)} className={styles.button}>30</button>
          <button onClick={() => resetCounter(60)} className={styles.button}>60</button>
        </div>
      )}
      <p className={styles.timeLeft}>Time Left: {counter}</p>
      <AnimatePresence>
        {counter === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={styles.speedDetails}
          >
            <span>Results:</span>
            <span>WPM: {calculateWPM()}</span>
            <span>Accuracy: {accuracy()}%</span>
            <span>Incorrect: {totalWrongWords + wrongWordsCount}</span>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {counter !== 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className={styles.textAndField}
          >
            <div className={styles.referenceText}>
              {handleHighlightText()}
            </div>
            <input
              className={styles.inputField}
              placeholder="Start Typing..."
              value={text}
              ref={inputRef}
              onChange={handleChange}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => resetCounter(counterTimer)} className={styles.resetButton}>Reset</button>
    </div>
  );
};


export default TypingTest;