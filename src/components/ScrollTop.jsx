import React, { useState } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
import { FaAngleUp } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


const ScrollTop = () => {
  const [btnHovered, setBtnHovered] = useState(false);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  return (
    <motion.div className="scroll_to_top"
    whileTap={{ scale: 0.9 }}
    onMouseEnter={() => setBtnHovered(true)}
    onMouseLeave={() => setBtnHovered(false)}
    >
    {btnHovered ?(
      <p onClick={goToTop}>
            <FaAngleUp className="upArrow icon-style" />
        </p>
    ):(
      <p onClick={goToTop}>
            <FaAngleUp className="upArrow" />
        </p>
    )}
        
    </motion.div>  
  )
}

export default ScrollTop