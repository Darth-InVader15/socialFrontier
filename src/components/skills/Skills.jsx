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
      <h1 className="headerSpacing"> Languages I have worked with : <br></br> </h1>
      <motion.div className="Techs" variants={variants}>
        {/* <h1 className="languages">Languages I have worked with : <br></br> </h1> */}
        {/* <br /> */}
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange"   }}
          whileTap={{ scale: 0.9 }}
        >
          C++
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"   }}
          whileTap={{ scale: 0.9 }}
        >
          JavaScript
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          Dart
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"   }}
          whileTap={{ scale: 0.9 }}
        >
          Python
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"   }}
          whileTap={{ scale: 0.9 }}
        >
          SQL
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"   }}
          whileTap={{ scale: 0.9 }}
        >
          Embedded C
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"   }}
          whileTap={{ scale: 0.9 }}
        >
          Assembly
        </motion.div>
        </motion.div>
        {/* Add more tech buttons */}

        
        <h1 className="headerSpacing"> Libraries and Frameworks I have worked with : </h1>
        <div className="Techs">
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1,  color: "orange"  }}

          whileTap={{ scale: 0.9 }}

        >
          ReactJS
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1,  color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          NextJS
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1,  color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          ExpressJS
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1,  color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          Node.JS
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1,  color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        > 
        Flutter
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          MongoDB
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          Postgress
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          Framer Motion
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"  }}
          whileTap={{ scale: 0.9 }}
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
          whileHover={{ scale: 1.1,  color: "orange"  }}

          whileTap={{ scale: 0.9 }}

        >
          Git
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1,  color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          Github
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1,  color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          VS Code
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1,  color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          Android Studio
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1,  color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        > 
        Figma
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1,  color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        > 
        MATLAB
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          Quartus Prime
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange"  }}
          whileTap={{ scale: 0.9 }}
        >
          Arduino IDE
        </motion.div>
      {/* </motion.div> */}
      </div>

      {/* List Container */}
      <motion.div className="listContainer" variants={variants}>
        {/* Content for list container */}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
