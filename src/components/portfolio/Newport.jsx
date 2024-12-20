import React from 'react'
import { motion } from "framer-motion";
function Newport() {
    return (
        <section >
          <div className="container">
            <div className="wrapper">
              <div className="imageContainer">
              <img src='/sleep.gif' style={{ margin: '20%', width:'50%', height:'auto'}}></img>
              </div>
              <motion.div className="textContainer" style={{marginTop: '20%', marginLeft: '5%'}}>
              <h2>Nah, I'm too lazy to write this one.</h2>
              <h3>This page will be added in future updates</h3>
              </motion.div>
            </div>
          </div>
        </section>
      );
}

export default Newport
