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
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      
      {/* Title Container */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.h1>
            Hello <motion.b whileHover={{ color: "orange" }}>World</motion.b> !
          </motion.h1>
        </div>
       
      </motion.div>

      {/* Education Background */}
      <motion.div className="educationBackground" variants={variants}>
        <h1>
        <TypeAnimation 
              sequence={[
                "Piyush is an engineering undergrad at NIT Kurukshetra. He is currently in his pre-final year.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
        </h1>
        <br></br>
        <Fade>
        <h2>
        He is passionate about technology and likes working on Robotics and Web Development projects.
        </h2>
        </Fade>
    
        <Fade>
        <h2>
          In his free time, he likes solving DSA problems. He has solved more than 1000 problems across multiple platforms like Leetcode, GFG, Codeforces, etc. He also likes reading thriller novels.
        </h2>
      </Fade>
      <Fade>
        <h2>
          He has worked with languages like C++, JS, Python, Assembly, and SQL, and has also completed several Full-Stack projects.
        </h2>
      </Fade>

      </motion.div>



      {/* Tech Stack */}
      <Zoom><h3 className="linksText"> You can find him across the Internet</h3></Zoom>
      <motion.div className="links" variants={variants}>
      <br></br>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://github.com/Darth-InVader15')}
        >
          Github
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://www.linkedin.com/in/darthinvader5/')}
        >
          LinkedIn
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('piyush.singh1315@gmail.com')}
        >
          Email
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://www.instagram.com/__i.r.i.d.e.s.c.e.n.t___/')}
        >
          Instagram
        </motion.div>
      </motion.div>

      

      {/* List Container */}
      <motion.div className="listContainer" variants={variants}>
        {/* Content for list container */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
