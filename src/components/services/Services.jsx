// Imports
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Fade from 'react-reveal/Fade';
import { Zoom } from "react-reveal";

//This file contains the About Me section of the portfolio

function redirectTo(url) {
  window.open(url, '_blank');
}

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
const Services = () => {
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
          So you want to know more about me?
          {/* <br /> Btw, I'm professionally known as Darth InVader. */}
        </p>
        <hr />
      </motion.div>
      
      {/* Title Container */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.h1>
                       Hello <motion.b animate={{ color: ["#ffffff", "#ffa500", "#ffffff"] }} transition={{ repeat: Infinity, duration: 5 }}>World</motion.b> !
          </motion.h1>
        </div>
       
      </motion.div>

      {/* Education Background */}
      <Zoom>
      <motion.div
        className="education"
        // initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
      <motion.div className="educationBackground" variants={variants}>
        <h1>
        This website is created by Piyush Singh
        </h1>
        <br></br>
        <Fade>
          <ul>
        <li className="listItems">
        Initially he wanted to add some details about himself, but then he thought why bother?
        </li>        
        <li>
          Instead, here's a photo of a cat
        </li>
        <>

            <img src="https://cataas.com/cat" alt="Random Cat" style={{ alignItems: 'center', maxWidth: '40%', height: 'auto', marginLeft: '40px', marginTop: '40px' }}/>
            <br />
          
        </>
        </ul>
      </Fade>

      </motion.div>
      </motion.div>
      </Zoom>



      {/* Links
      <Zoom><h1 className="title2"> View other profiles</h1></Zoom>
      <motion.div className="links" variants={variants}>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://github.com/Darth-InVader15')}
        >
          Github
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://leetcode.com/Darth-InVader15/')}
        >
          Leetcode
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://auth.geeksforgeeks.org/user/darthinvader')}
        >
          GFG
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://drive.google.com/file/d/1J25Jir1OZNiwZe72KmG_RgLqAwxZThI5/view?usp=drive_link')}
        >
          View Resume
        </motion.div>
      </motion.div> */}

      

      {/* List Container */}
      <motion.div className="listContainer" variants={variants}>
        {/* Content for list container */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
