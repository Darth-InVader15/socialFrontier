import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      {/* <Sidebar/> */}
      <div className="wrapper">
        {/* <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        > */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <span style={{justifyContent: 'center'}}> Darth Web </span>
          </div>
        {/* </motion.span> */}
        {/* <div>
          <a href="https://darthshell.web.app/">Remove animations </a>
          <a> | </a>
          <a href="https://www.instagram.com/__i.r.i.d.e.s.c.e.n.t___/"> View Instagram</a>
        </div> */}
        <div className="social">
          <a href="https://www.facebook.com/officialPirate">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/__i.r.i.d.e.s.c.e.n.t___/">
            <img src="/instagram.png" alt="" />
          </a>
          {/* <a href="https://www.linkedin.com/in/darthinvader5/">
            <img src="/linkedin.png" alt="" />
          </a> */}
          <a href="https://snapchat.com/t/g3YvI2Oj">
            <img src="/snapchat.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
