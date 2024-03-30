import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const resumeLink = "https://drive.google.com/file/d/1J25Jir1OZNiwZe72KmG_RgLqAwxZThI5/view?usp=drive_link";

const darthShell = "https://darthshell.web.app";

const Links = () => {
  const items = ["Homepage", "About", "Skills", "Projects", "Contact", "Terminal", "Resume"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={item === "Terminal" ? darthShell : item === "Resume" ? resumeLink : `#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
