import React from "react";
import avatar from '../assets/avatar.webp';
import animation from '../assets/animation (2).gif';
import html from '../assets/html.webp';
import css from '../assets/css.webp';
import js from '../assets/js.webp';
import nextjs from '../assets/next js.jpg';
import tailwind from '../assets/tailwind.png';
import vscode from '../assets/vs code.webp';
import bootstrap from '../assets/bootstrap.webp';
import mongodb from '../assets/mongo.png';
import java from '../assets/java.webp';
import node from '../assets/node.webp';
import react from '../assets/react.webp';
import python from '../assets/python.webp';
import git from '../assets/git.webp';
import githubimage from '../assets/github-image.webp';
import { TypeAnimation } from 'react-type-animation';
import Resume from '../assets/Resume.pdf';

const styles = {
  introSection: "flex flex-col md:flex-row justify-around items-center py-16 gap-10",
  introText: "w-full md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left",
  introImage: "w-full md:w-2/5 flex justify-center md:justify-end",
  hello: "text-2xl font-semibold m-0 text-[#6265fb]",
  introHeading: "text-3xl md:text-5xl m-0 font-bold transition text-[#17172e] dark:text-white",
  highlight: "text-[#6265fb] font-bold",
  introParagraph: "text-2xl sm:text-3xl my-2.5 font-normal text-black dark:text-white",
  aboutSection: "flex flex-col md:flex-row items-center justify-around py-16 gap-10",
  aboutLeft: "w-full bg-[#19192f] dark:bg-[#6265fb94] md:w-2/5 flex flex-col items-center justify-center text-white shadow-lg rounded-xl",
  aboutImg: "w-[250px] h-[250px] overflow-hidden rounded-full transition-all duration-500 ease-in-out mx-auto",
  aboutRightSection: "w-full md:w-1/2 flex flex-col items-center justify-center text-center text-white",
  aboutRightHeading: "text-4xl md:text-6xl uppercase font-bold transition text-[#17172e] dark:text-white",
  aboutRightSubheading: "font-semibold transition text-xl text-[#17172e] dark:text-white",
  aboutBtns: "flex gap-4 my-8",
  btnPink: "border-2 rounded-full py-2 px-4.5 w-32 font-semibold bg-[#6265fb] text-white cursor-pointer transition-all duration-500 ease-in-out border-[#6265fb]",
  btnWhite: "border-2 border-[#17172e] dark:border-white text-[#17172e] dark:text-white rounded-full py-2 px-4 w-32 font-semibold bg-transparent cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#6265fb] hover:border-[#6265fb] hover:text-white",
  aboutPara: "font-normal text-left text-black dark:text-white",
  aboutBullet: "flex flex-col sm:flex-row justify-between",
  skillsSection: "text-center py-16 flex flex-col items-center",
  skillsHeading: "text-4xl md:text-5xl mb-4 font-bold text-[#17172e] dark:text-white",
  skillsParagraph: "text-xl mb-6 font-semibold text-[#17172e] dark:text-white",
  skillsIcons: "grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-7 items-center gap-6",
  iconContainer: "flex flex-wrap justify-center",
  icon: "flex flex-col items-center max-w-[100px] mx-[30px] my-2.5",
  iconImage: "w-[70px] h-[70px] mb-2 transition-transform duration-300 ease-in-out hover:scale-110",
};

const skills = ["NextJs", "Python", "React", "VsCode", "Git", "Tailwind", "Bootstrap", "Html", "GithubImage", "Css", "Js", "Node", "MongoDb", "Java"];
const imgSrc = [nextjs, python, react, vscode, git, tailwind, bootstrap, html, githubimage, css, js, node, mongodb, java];

function Homepage() {
  return (
    <div className="content">
      <div className={styles.introSection}>
        <div className={styles.introText} data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out">
          <p className={styles.hello}>Hello!</p>
          <h1 className={styles.introHeading}>I'm <span className={styles.highlight}>Syed Muhammad Hamza</span></h1>
          <TypeAnimation
            sequence={[
              'I am MERN Stack Developer',
              2000,
              'I am Full Stack Developer',
              1000,
              'I am Wordpress Developer',
              1000,
              'I am Shopify Developer',
              1000
            ]}
            className="text-black dark:text-white font-bold text-2xl sm:text-3xl my-3"
            wrapper="span"
            speed={2}
            deletionSpeed={10}
            repeat={Infinity}
            cursor={false}
          />
          <p className={styles.introParagraph}><span className={styles.introParagraph}>A Computer Science Student</span></p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/syed-hamza-07021724a/"><button class={styles.btnPink}>LinkedIn</button></a>
            <a href="https://github.com/hamzasyed2985"><button class={styles.btnWhite}>My Works</button></a>
          </div>
        </div>
        <div className={styles.introImage}>
          <img src={animation} className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]" alt="Animation" />
        </div>
      </div>

      <div className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
          <div className="p-8 text-center rounded-t-xl">
            <div className={styles.aboutImg}>
              <img src={avatar} alt="about" />
            </div>
            <h2 className="text-2xl mt-8 mb-2 leading-tight border-b-2 border-[#6265fb] text-white pb-4">Syed Muhammad Hamza</h2>
            <h3 className="uppercase font-light text-white tracking-widest mt-5">MERN Stack developer</h3>
          </div>

        </div>
        <div className={styles.aboutRightSection} data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-easing="ease-out">
          <h1 className={styles.aboutRightHeading}>About Me<span className={styles.highlight}>!</span></h1>
          <h2 className={styles.aboutRightSubheading}>Here's who I am & what I do</h2>
          <div className={styles.aboutBtns}>
            <a href={Resume}><button type="button" className={`${styles.btnPink}`}>Resume / CV</button></a>
            <a href="https://github.com/hamzasyed2985"><button type="button" className={`${styles.btnWhite}`}>Git hub</button></a>
          </div>
          <div className={styles.aboutPara}>
            <p>With a strong foundation in web development and a passion for my career, I am Syed Muhammad Hamza, currently pursuing a Bachelor's degree in Computer Science. Proficient in designing and building responsive web applications, I have honed my skills in various web technologies and frameworks. Experienced in creating dynamic user experiences and demonstrated success in leading impactful projects, optimizing performance, and continuously learning to stay at the forefront of the field.</p>
            <div className={styles.aboutBullet}>
              <div>
                <p><span className={styles.highlight}>Experience:</span> 2 Years </p>
                <p><span className={styles.highlight}>Country/Origin:</span> Pakistan</p>
              </div>
              <div>
                <p><span className={styles.highlight}>Email:</span> hamzasyed2985@gmail.com</p>
                <p><span className={styles.highlight}>Age:</span> 22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skillsSection}>
        <h1 className={styles.skillsHeading} data-aos="fade-up" data-aos-duration="500" data-aos-delay="" data-aos-easing="ease-out">Skills <span className="text-[#6265fb]">&</span> Experience</h1>
        <p className={styles.skillsParagraph} data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-easing="ease-out">I am expert in both Frontend, Backend and database development</p>
        <p className="w-4/5 mb-6 text-black dark:text-white" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-out">With extensive experience as a both Frontend and Backend Developer, I specialize in crafting exceptional web experiences. Utilizing Next.js, Three.js, Prisma, MongoDB, and React.js, I've built dynamic websites and fully functional applications, showcasing proficiency in both back-end and front-end development.</p>
        <div className={styles.skillsIcons} data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-easing="ease-out">
          {skills.map((skill, index) => {
            return (<div key={index} className={styles.icon}>
              <img src={imgSrc[index]} alt={skill} className={styles.iconImage} />
              <p className="text-[#17172e] dark:text-white font-semibold">{skill}</p>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;