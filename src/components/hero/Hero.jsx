import "./hero.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function redirectTerminal() {
    window.location.href = "https://darthshell.web.app";
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HI THERE, I AM</motion.h2>
          <motion.h1 variants={textVariants}>
          <TypeAnimation 
              sequence={[
                "Piyush Singh",
                2000,
                "i.r.i.d.e.s.c.e.n.t",
                1000,
                "Darth InVader",
                1000,
                // "Problem Solver",
                // 1000,
                // "Engineer",
                // 1000,
                // "Competitive Programmer",
                // 1000,
                // "Electrical Engineer",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* <motion.button variants={textVariants} onClick={redirectTerminal}>
              See this website in Terminal
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button> */}
            
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Darth Net
      </motion.div>
      <div className="imageContainer">
        <img src="/darth.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
