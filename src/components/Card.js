import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSpinner } from './SpinnerContext';

const styles = {
  card: "flex flex-col w-full sm:w-[30%] justify-start items-center overflow-hidden bg-[#6264fb50] pb-3 rounded-[0%] my-5 mx-3 shadow-xl dark:shadow-[#404052] backdrop-blur-[50px] transition duration-300 ease-in-out hover:scale-105 ",
  image: "rounded-[0%] w-full ",
  button: "relative inline-flex items-center justify-center p-0.5 text-white overflow-hidden text-md font-medium rounded-lg group bg-gradient-to-br from-[#AF40FF] via-[#5B42F3] to-[#00DDEB] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
  buttonSpan: "bg-[#05062d] px-3 py-2 lg:px-4 lg:py-3 rounded-md w-full transition-all duration-300 ease-in-out hover:bg-transparent",
  title: "my-2 text-xl font-semibold tracking-tight transition text-[#17172e] dark:text-white",
};


const Card = ({ title, description, imageSrc, target }) => {
  const { showSpinner, hideSpinner } = useSpinner();
  const navigate = useNavigate();

  const handleClick = (path, isNewTab) => {
    showSpinner();
    setTimeout(() => {
      if (isNewTab) {
        window.open(path, '_blank');
      } else {
        navigate(path);
      }
      hideSpinner();
    }, 600);
  };

  const isNewTab =
    title === "Typing Test App" ||
    title === "Advance Calculator" ||
    title === "Todo List App" ||
    title === "Simple React Calculator";

  return (
    <div className={`${styles.card} card`}>
      <div className="overflow-hidden">
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <p className={styles.title}>{title}</p>
      {isNewTab ? (
        <button className={styles.button} onClick={() => handleClick(target, true)}>
          <span className={styles.buttonSpan}>Learn More</span>
        </button>
      ) : (
        <a href={target} target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>
            <span className={styles.buttonSpan}>Learn More</span>
          </button>
        </a>
      )}
    </div>
  );
};

export default Card;
