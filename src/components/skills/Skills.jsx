// Imports
import { useRef } from "react";
import "./Skills.scss";
import { motion, useInView } from "framer-motion";

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
};

// Services component
const Skills = () => {
  const ref = useRef();

  // Check if component is in view
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      {/* Text Container */}
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      
      {/* Title Container */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.h1>
            Currently pursuing <motion.b whileHover={{ color: "orange" }}>B.Tech</motion.b> from
          </motion.h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>NIT </motion.b>Kurukshetra.
          </h1>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div className="techStack" variants={variants}>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          C++
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Java
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          React
        </motion.div>
        {/* Add more tech buttons */}
      </motion.div>

      {/* Education Background */}
      <motion.div className="educationBackground" variants={variants}>
        <h2>Education Background</h2>
        <p>Insert your education background here</p>
      </motion.div>

      {/* List Container */}
      <motion.div className="listContainer" variants={variants}>
        {/* Content for list container */}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
