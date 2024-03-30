// Imports
import { useRef } from "react";
import "./Roles.scss";
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
const Roles = () => {
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
          Even though I prefer staying indoors
          <br /> I am always up for a challenge.
        </p>
        <hr />
      </motion.div>
      
      {/* Title Container */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.h1>
            Current <motion.b whileHover={{ color: "orange" }}>Roles</motion.b>.
          </motion.h1>
        </div>
       
      </motion.div>

      {/* Education Background */}
      <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="Background" variants={variants}>
        <h1 className="head1">
            <span>Piyush is currently</span>
            <motion.ul variants={variants}>
                <li>Content Creation Head at Colours | NIT-K</li>
                <li>Part of Web Development and Embedded Team | NIT-K</li>
            </motion.ul>
        </h1>
        <br></br>
        <Fade>
        <h2 className="head2" whileHover={{ scale: 1.2, color: "orange" }}>
            <motion>Where, he has</motion>
            <ul whileHover={{ scale: 1.2, color: "orange" }}>
                <li>Co-organized 5+ technical workshops on topics like Image Processing, C, Embedded Systems, etc. </li>
                <li>Conducted 3+ workshops on Content Writing and Creation.</li>
                <li> Co-organized college events like <span className="Events" sty>TechSpardha'23 '24, Confluence'22 '23, and TEDxNITKKR'23 </span></li>
            </ul>
            <br />
        </h2>
        </Fade>
        </motion.div>
    
        {/* <motion.div className="listContainer" variants={variants}>
        {/* Content for list container */}
      {/* </motion.div> */} 
      </motion.div>



      {/* Tech Stack */}
      <Zoom><h3 className="linksText"> You can find him across the Internet: </h3></Zoom>
      <motion.div className="links" variants={variants}>
      {/* <br></br> */}
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
          onClick={() => redirectTo('https://www.linkedin.com/in/darthinvader5/')}
        >
          LinkedIn
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('mailto:piyush.singh1315@gmail.com')}
        >
          Email
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://www.instagram.com/__i.r.i.d.e.s.c.e.n.t___/')}
        >
          Instagram
        </motion.div>

        
        
      </motion.div>
      <br></br>
      <br/>
        {/* <h1>This is just a test</h1> */}

      

      {/* List Container */}
      <motion.div className="listContainer" variants={variants}>
        {/* Content for list container */}
      </motion.div>
    </motion.div>
  );
};

export default Roles;
