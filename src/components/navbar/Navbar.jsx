import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Darth Web
        </motion.span>
        <div>
          <a href="https://darthshell.web.app/">Remove animations </a>
          <a> | </a>
          <a href="https://drive.google.com/file/d/1J25Jir1OZNiwZe72KmG_RgLqAwxZThI5/view?usp=drive_link"> View Resume</a>
        </div>
        <div className="social">
          <a href="https://github.com/Darth-InVader15">
            <img src="/github1.png" alt="" />
          </a>
          <a href="https://www.instagram.com/__i.r.i.d.e.s.c.e.n.t___/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/darthinvader5/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://leetcode.com/Darth-InVader15/">
            <img src="/lc.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
