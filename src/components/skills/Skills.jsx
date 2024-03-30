// Imports
import { useRef } from "react";
import "./Skills.scss";
import { motion, useInView } from "framer-motion";
import { Zoom } from "react-reveal";

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
          Veni, Vidi, Vici
          <br /> 
        </p>
        <hr />
      </motion.div>
      
      {/* Title Container */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.h1>
            I Like <motion.b whileHover={{ color: "orange" }}>Exploring</motion.b>          </motion.h1>
        </div>
        <div className="title">
          <h1>
            New <motion.b whileHover={{ color: "orange" }}>Tech</motion.b>.
          </h1>
        </div>
      </motion.div>


      {/* Tech Stack */}
      <Zoom>
      <h1 className="headerSpacing"> Languages I have worked with : <br></br> </h1>
      <motion.div className="Techs" variants={variants}>
        {/* <h1 className="languages">Languages I have worked with : <br></br> </h1> */}
        {/* <br /> */}
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          C++
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          JavaScript
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Dart
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Python
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          SQL
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Embedded C
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Assembly
        </motion.div>
        </motion.div>
        {/* Add more tech buttons */}

        
        <h1 className="headerSpacing"> Libraries and Frameworks I have worked with : </h1>
        <div className="Techs">
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          ReactJS
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          NextJS
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          ExpressJS
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Node.JS
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        > 
        Flutter
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          MongoDB
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Postgress
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Framer Motion
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          JQuery
        </motion.div>
      {/* </motion.div> */}
      </div>

      {/* //Names of Tools goes here */}

      <h1 className="headerSpacing"> Software Packages I have worked with : <br></br> </h1>
      <div className="Techs">
        
      <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Git
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Github
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Linux
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          VS Code
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Android Studio
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
        Figma
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
        MATLAB
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Quartus Prime
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}initial={{ y: "100vh" }} // start from the bottom of the page
          animate={{ y: 0 }} // animate to its original position
          transition={{ type: "spring", stiffness: 50 }} // adjust the transition as needed
        >
          Arduino IDE
        </motion.div>
      {/* </motion.div> */}
      </div>
      </Zoom>

      {/* List Container */}
      <motion.div className="listContainer" variants={variants}>
        {/* Content for list container */}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
