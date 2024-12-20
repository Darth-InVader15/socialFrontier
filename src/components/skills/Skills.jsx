import { useState, useEffect, useRef } from "react";
import "./Skills.scss";
import { motion, useInView } from "framer-motion";
import { Zoom } from "react-reveal";
import TechButton from '../TechButton';
import NewSkills from "./newSkills";

// Variants for animation
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: 500,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

// Services component
const Skills = () => {
  const ref = useRef();
  const [showNewContent, setShowNewContent] = useState(false);

  // Check if component is in view
  const isInView = useInView(ref, { margin: "-100px" });

  // Automatically switch content after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewContent(true);
    }, 10000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
      exit="exit"
    >
      {/* Text Container */}
      <motion.div className="textContainer" variants={variants}>
        <p>
          Veni, Vidi, Vici
          <br /> 
        </p>
        <hr />
      </motion.div>
      
      {/* Title Container */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.h1>
            I Like <motion.b whileHover={{ color: "orange" }}>Exploring</motion.b>
          </motion.h1>
        </div>
        <div className="title">
          <h1>
            New <motion.b whileHover={{ color: "orange" }}>Tech</motion.b>.
          </h1>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <div>
        <Zoom>
          
          <motion.div className="Techs" variants={variants}>
            {showNewContent ? (
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <NewSkills />
              </motion.div>
            ) : (
              <>
                <h1 className="headerSpacing"> Languages I have worked with : <br></br> </h1>
                <div className="Techs">
                <TechButton>C++</TechButton>
                <TechButton>JavaScript</TechButton>
                <TechButton>Dart</TechButton>
                <TechButton>Python</TechButton>
                <TechButton>SQL</TechButton>
                <TechButton>Embedded C</TechButton>
                <TechButton>Assembly</TechButton>
                </div>

                <h1 className="headerSpacing"> Libraries and Frameworks I have worked with : </h1>
            <div className="Techs">
              <TechButton>ReactJS</TechButton>
              <TechButton>NextJS</TechButton>
              <TechButton>ExpressJS</TechButton>
              <TechButton>Node.JS</TechButton>
              <TechButton>Flutter</TechButton>
              <TechButton>MongoDB</TechButton>
              <TechButton>Postgress</TechButton>
              <TechButton>Framer Motion</TechButton>
              <TechButton>JQuery</TechButton>
            </div>

            <h1 className="headerSpacing"> Software Packages I have worked with : <br></br> </h1>
            <div className="Techs">
              <TechButton>Git</TechButton>
              <TechButton>Github</TechButton>
              <TechButton>Linux</TechButton>
              <TechButton>VS Code</TechButton>
              <TechButton>Android Studio</TechButton>
              <TechButton>Figma</TechButton>
              <TechButton>MATLAB</TechButton>
              <TechButton>Quartus Prime</TechButton>
              <TechButton>Arduino IDE</TechButton>
            </div>

              </>
            )}
          </motion.div>

          
        </Zoom>
      </div>

      {/* List Container */}
      <motion.div className="listContainer" variants={variants}>
        {/* Content for list container */}
      </motion.div>
    </motion.div>
  );
};

export default Skills;