import React from "react";
import Card from '../components/Card';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const styles = {
  title: "text-3xl font-bold my-4 text-center text-[#17172e] dark:text-white transition",
  galleryItem: "flex flex-row justify-center flex-wrap",
};

const projects = [
  {
    title: "Typing Test App",
    description: "",
    getImageSrc: () => require("../assets/typing.png"),
    target: "/projects/typing-test"
  },
  {
    title: "Advance Calculator",
    description: "",
    getImageSrc: () => require("../assets/calculator-advance.jpg"),
    target: "/projects/calculator-advance"
  },
  {
    title: "Todo List App",
    description: "",
    getImageSrc: () => require("../assets/todo.png"),
    target: "/projects/todo-list-app"
  },
  {
    title: "Simple React Calculator",
    description: "",
    getImageSrc: () => require("../assets/Calculator.png"),
    target: '/projects/calculator'
  },
  {
    title: "Responsive Netflix Clone",
    description: "",
    getImageSrc: () => require("../assets/Netflix.jpg"),
    target: "https://hamzasyed2985.github.io/Netflix/"
  },
  {
    title: "Responsive Razer Clone",
    description: "",
    getImageSrc: () => require("../assets/Razer.png"),
    target: "https://hamzasyed2985.github.io/Razer"
  },
  {
    title: "Responsive Johns Cafe",
    description: "",
    getImageSrc: () => require("../assets/Johns Cafe.png"),
    target: "https://hamzasyed2985.github.io/JOHN's-Cafe"
  },
];

function Projects(props) {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  return (

    <div className="main-projects">
      <h1 className={styles.title} data-aos="fade-in" data-aos-duration="500" data-aos-delay="0" data-aos-easing="ease-out">My Projects Gallery</h1>
      <div class={styles.galleryItem} data-aos="fade-in" data-aos-duration="500" data-aos-delay="0" data-aos-easing="ease-out">
        {projects.map((project) => {
          return (<Card props={props} key={project.title} title={project.title} description={project.description} target={project.target} imageSrc={project.getImageSrc()} />);
        })}

      </div>
    </div>
  );
};

export default Projects;
