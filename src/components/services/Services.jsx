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
          Samose {`>>`} Pizza
          {/* <br /> Btw, I'm professionally known as Darth InVader. */}
        </p>
        <hr />
      </motion.div>
      
      {/* Title Container */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.h1>
                       Hello <motion.b animate={{ color: ["#ffffff", "#ffa500", "#ffffff"] }} transition={{ repeat: Infinity, duration: 3 }}>World</motion.b> !
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
        This website is just a fun project
        </h1>
        <br></br>
        <Fade>
          <ul>
        <li className="listItems">
        Initially I wanted to add some details, but then I thought why bother?
        </li>        
        <li>
          Instead, here's a cat
        </li>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginRight: '50px' }}>
        {/* the cat api was unresponsive so i had to comment it out */}
            <img src="https://cataas.com/cat" alt="Random Cat" style={{ alignItems: 'center', maxWidth: '50%', height: 'auto', marginLeft: '40px', marginTop: '40px' }}/>
            <br />
            <img src="/cat.gif" alt="Random Cat" style={{ alignItems: 'center', maxWidth: '50%', height: 'auto', marginLeft: '20px', marginTop: '40px' }}/>
          
        </div>
        </ul>
      </Fade>

      </motion.div>
      </motion.div>
      </Zoom>
      

      {/* List Container */}
      <motion.div className="listContainer" variants={variants}>
        {/* Content for list container */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
